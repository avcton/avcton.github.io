import sys


def display_menu(snippets):
    for i, snippet in enumerate(snippets, start=1):
        print(f"{i}. {snippet['title']}")


def main(snippets, arg=None):

    if arg is None:
        display_menu(snippets)

    else:
        try:
            choice = int(arg)
            if 1 <= choice <= len(snippets):
                print(f"\n--- {snippets[choice-1]['title']} ---")
                print(snippets[choice-1]['code'])
            else:
                print("Invalid choice. Please try again.")
        except ValueError:
            print("Invalid input. Please enter a number.")


if __name__ == "__main__":
    # {'title': '',
    #  'code':
    #      """
    #      """
    #  }
    snippets = [
        {'title': 'Byte Order',
         'code':
         """
import sys

# Print Byte Order
print(sys.byteorder)
         """
         },
        {'title': 'Binary Struct Packing',
         'code':
         """
import struct

short_int = 0x12

# Convert to bytes
# '<' = little-endian | '>' = big-endian
# - 'b': signed char(1 byte)
# - 'B': unsigned char(1 byte)
# - 'h': short(2 bytes)
# - 'H': unsigned short(2 bytes)
# - 'i': int(4 bytes)
# - 'I': unsigned int(4 bytes)
# - 'l': long(4 bytes)
# - 'L': unsigned long(4 bytes)
# - 'q': long long(8 bytes)
# - 'Q': unsigned long long(8 bytes)
# - 'f': float(4 bytes)
# - 'd': double(8 bytes)

binary_packed_short_int = struct.pack('<h', short_int)

print(binary_packed_short_int)
          """
         },
        {'title': 'TCP Server Template',
         'code':
         """
import socket

if __name__ == "__main__":
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    SERVER_ADDRESS = ('127.0.0.1', 5695)

    try:
        server_socket.bind(SERVER_ADDRESS)
        print("Server started")

    except socket.error as err:
        print("Failed to bind to IP and port:", err)
        server_socket.close()
        exit()

    server_socket.listen(1)
    print("Listening for incoming connections...")

    while True:
        client_socket, client_address = server_socket.accept()

        print(
            f'Client connected (IP = {client_address[0]}, Port = {client_address[1]})')

        try:
            client_message = client_socket.recv(2000).decode()
            print(
                f'Received message from (IP = {client_address[0]}, Port = {client_address[1]}):', client_message)
            
            client_socket.send('Message received'.encode())

        except socket.error as err:
            print("Failed to receive message:", err)

        finally:
            client_socket.close()
         """
         },
        {'title': 'TCP Client Template',
         'code':
         """
import socket

if __name__ == '__main__':
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    SERVER_ADDRESS = ('127.0.0.1', 5695)

    try:
        client_socket.connect(SERVER_ADDRESS)
        print("Successfully connected to the server")
    except socket.error as err:
        print(f"Connection failed. Error: {err}")
        client_socket.close()
        exit()

    client_message = input("Enter message: ")

    try:
        client_socket.send(client_message.encode())
    except socket.error as err:
        print(f"Send failed. Error: {err}")
        client_socket.close()
        exit()

    try:
        server_message = client_socket.recv(2000).decode()
        print(f"Server Message: {server_message}")
    except socket.error as err:
        print(f"Receive failed. Error: {err}")
    finally:
        client_socket.close()
         """
         },
        {'title': 'UDP Server Template',
         'code':
         """
import socket

if __name__ == "__main__":
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    SERVER_ADDRESS = ('127.0.0.1', 5695)

    try:
        server_socket.bind(SERVER_ADDRESS)
        print("Server started")

    except socket.error as err:
        print("Failed to bind to IP and port:", err)
        server_socket.close()
        exit()

    print("Listening for incoming connections...")

    while True:
        try:
            client_message, client_address = server_socket.recvfrom(2000)

            print(
                f'Client connected (IP = {client_address[0]}, Port = {client_address[1]})')

            client_message = client_message.decode()

            print(
                f'Received message from (IP = {client_address[0]}, Port = {client_address[1]}):', client_message)

            server_socket.sendto('Message received'.encode(), client_address)

        except Exception as err:
            print("An error occurred:", err)
            break
         """
         },
        {'title': 'UDP Client Template',
         'code':
         """
import socket

if __name__ == "__main__":
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    SERVER_ADDRESS = ('127.0.0.1', 5695)

    try:
        client_message = input("Enter client message: ")
        client_socket.sendto(client_message.encode(), SERVER_ADDRESS)

    except socket.error as err:
        print('Error sending message to server:', err)

    try:
        server_message, _ = client_socket.recvfrom(2000)
        print('Server Message:', server_message.decode())

    except socket.error as err:
        print('Error recieving message from server:', err)

    client_socket.close()
         """
         },
        {'title': 'UDP Server with Threading',
         'code':
         """
import os
import re
import socket
import threading

PORT = 5695
thread_lock = threading.Lock()
database = 'database.txt'

# Create database.txt if it does not exist
if not os.path.exists(database):
    print(f"Database Not Found: Creating One.. ")
    with open(database, 'w') as db_file:
        db_file.write("")


def handle_checkin(sock, decoded_message, client_address):
    global database

    with thread_lock:
        with open(database, 'a+') as db_file:
            db_file.seek(0)
            records = db_file.readlines()
            print('Current Records in datbase:\n', records, sep='')
            for record in records:
                if decoded_message in record:
                    response = f"You are already here."
                    sock.sendto(response.encode('utf-8'), client_address)
                    return

            db_file.seek(0, 2)
            db_file.write(f"{decoded_message}\n")

    response = f"Welcome Student {decoded_message}"
    sock.sendto(response.encode('utf-8'), client_address)


def handle_checkout(sock, client_message, client_address):
    global database

    with thread_lock:
        with open(database, 'a+') as db_file:
            db_file.seek(0)
            records = db_file.readlines()
            print('Current Records in datbase:\n', records, sep='')
            for record in records:
                if client_message in record:
                    records.remove(record)
                    db_file.seek(0)
                    db_file.truncate()
                    db_file.writelines(records)
                    response = "GoodBye Student" + ' ' +  \
                        f"{client_message}! Have a nice day."
                    sock.sendto(response.encode('utf-8'), client_address)
                    return

    response = f"You didn't check in today. Contact System Administrator."
    sock.sendto(response.encode('utf-8'), client_address)


def main():
    # Create a UDP socket
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

    # Bind the socket to the server address and port
    server_address = ('127.0.0.1', PORT)
    sock.bind(server_address)

    print("Socket created and bound")
    print(f"Server Listening for messages on PORT {PORT}...\n")

    while True:
        try:
            client_message, client_address = sock.recvfrom(2000)
            print(f"Received message from IP: {client_address[0]}",
                  f"and Port No: {client_address[1]}")

            decoded_message = client_message.decode('utf-8')
            print(f"Client Message: {decoded_message}")

            if re.match(r'\d{2}-\d{4}-CI', decoded_message.upper()):
                threading.Thread(target=handle_checkin,
                                 args=(sock, decoded_message.split('-CI')[0], client_address)).start()

            elif re.match(r'\d{2}-\d{4}-CO', decoded_message.upper()):
                threading.Thread(target=handle_checkout,
                                 args=(sock, decoded_message.split('-CO')[0], client_address)).start()

            else:
                response = "Invalid Check In/OUT format"
                sock.sendto(response.encode('utf-8'), client_address)

        except Exception as e:
            print(f"An error occurred: {e}")
            break

    # Closing the socket
    sock.close()


if __name__ == "__main__":
    main()
         """
         },
        {'title': 'TCP Server with Threading',
         'code':
         """
import socket
import threading

server_socket = None
PORT = 5695  # My Roll No.
MAX_CLIENTS = 3
CONNECTED_CLIENTS = 0
thread_lock = threading.Lock()


def handle_client(client_socket, client_address):
    global CONNECTED_CLIENTS
    try:
        while True:
            data = client_socket.recv(1024).decode('utf-8')

            if not data:
                break

            print(f"Received from {client_address}: {data}")

            if data.strip() == "DISCONNECT":
                print(f"Client {client_address} disconnected.")
                break

            client_socket.sendall(f"Echo: {data}".encode('utf-8'))

    except Exception as e:
        print(f"Error: {e}")

    finally:
        client_socket.close()

    with thread_lock:
        CONNECTED_CLIENTS -= 1

    print(f"Client {client_address} connection closed.",
          f"Active Connections: {CONNECTED_CLIENTS}")


if __name__ == '__main__':
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    server_socket.bind(('localhost', PORT))
    server_socket.listen()
    print(f"Server listening on port {PORT}")

    try:
        while True:
            client_socket, client_address = server_socket.accept()

            with thread_lock:
                if CONNECTED_CLIENTS < MAX_CLIENTS:
                    CONNECTED_CLIENTS += 1
                    print(f"Connection from {client_address} accepted.")
                    print(f"No. of Active Connections: {CONNECTED_CLIENTS}")

                    client_socket.sendall(
                        "Connection Accepted".encode('utf-8'))

                    client_thread = threading.Thread(
                        target=handle_client, args=(client_socket, client_address))
                    client_thread.start()
                else:
                    print(f"Connection from {client_address} rejected",
                          "Server full.")
                    client_socket.sendall("Server Full".encode('utf-8'))
                    client_socket.close()

    except Exception as e:
        print(f"Error: {e}")

    finally:
        server_socket.close()
         """
         },
        {'title': 'TCP Continuous Client with Threading',
         'code':
         """
import socket

SERVER_PORT = 5695  # My Roll No.

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

client_socket.connect(('localhost', SERVER_PORT))
connection_state = client_socket.recv(1024).decode('utf-8')

if connection_state == "Connection Accepted":
    print("Connected to the server.")

    try:
        while True:
            message = input("Enter message (type 'DISCONNECT' to exit): ")

            client_socket.sendall(message.encode('utf-8'))

            if message.strip() == "DISCONNECT":
                print("Disconnecting...")
                break

            response = client_socket.recv(1024).decode('utf-8')
            print(f"Server response: {response}")

    except Exception as e:
        print(f"Error: {e}")

    finally:
        client_socket.close()
        print("Connection closed.")

else:
    print("Connection to the server was refused with state:", connection_state)
    client_socket.close()
         """
         },
    ]
    args = sys.argv[1:]
    main(snippets, args[0] if args else None)
