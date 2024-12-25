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
                snippet = snippets[choice-1]['code']
                print(f"#--- {snippets[choice-1]['title']} ---#")
                print(snippet)
            else:
                print("Invalid choice. Please try again.")
        except ValueError:
            print("Invalid input. Please enter a number.")


if __name__ == "__main__":
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
        {'title': 'TCP Weather Server with Threading',
         'code':
             """
import re
import socket
import threading

DATABASE = "weather_data.txt"
PINS = "pin.txt"

thread_lock = threading.Lock()
weather_data = dict()
pin_data = dict()

# Reading from location database
with open(DATABASE, 'r') as database:
    content = database.readlines()
    for row in content:
        re_match = re.match(
            r'Location: ([a-zA-Z\s]+), Forecast: (.*)', row.strip())
        location, forecast = re_match.groups()
        weather_data[location.lower()] = dict(
            orig_loc=location, forecast=forecast)

# Reading admin pins
with open(PINS, 'r') as pins:
    content = pins.readlines()
    for row in content:
        re_match = re.match(
            r'Pin: (\d+), Location: ([a-zA-Z\s]+)', row.strip())
        pin, location = re_match.groups()
        pin_data[location.lower()] = pin


def forecast_weather(client_socket, location):
    global weather_data
    if location in weather_data:
        try:
            client_socket.send(weather_data[location]['forecast'].encode())
            return
        except socket.error as err:
            print(
                'Error sending forecast response to the client:', err)

    # At this point, we could not find the user requested location in database
    try:
        client_socket.send(
            "Could not find the requested location in database. Please verify it.".encode())
    except socket.error as err:
        print('Error sending forecast response to the client:', err)


def update_weather(client_socket, pin, location, forecast):
    try:
        if location not in pin_data or location not in weather_data:
            response = 'Invalid Location Provided'
            client_socket.send(response.encode())
            return

        if pin_data[location] == pin:
            # Correct Pin for Location
            with thread_lock:
                weather_data[location]['forecast'] = forecast
                with open(DATABASE, 'w') as db:
                    for data in weather_data.values():
                        db.write(
                            f"Location: {data['orig_loc']}, Forecast: {data['forecast']}" + '\\n')

            response = 'Location updated successfully'
            client_socket.send(response.encode())

        else:
            response = 'Invalid PIN provided for location'
            client_socket.send(response.encode())
    except socket.error as err:
        print('Error sending response to client', err)


def main():
    # Creating the socket
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # Binding the socket to IP and port
    server_address = ('127.0.0.1', 2000)  # Localhost, port 2000
    try:
        server_socket.bind(server_address)
        print("Socket successfully bound to IP and port")
    except socket.error as err:
        print(f"Bind failed. Error: {err}")
        return

    # Putting the socket into listening state
    server_socket.listen(1)
    print("Listening for incoming connections...")

    while True:
        # Accepting a connection
        client_socket, client_address = server_socket.accept()
        print(
            f"Client connected with IP: {client_address[0]} and Port: {client_address[1]}")

        # Receiving the message from the client
        try:
            client_message = client_socket.recv(2000).decode('utf-8')
            print(f"Client Message: {client_message}")

            if 'pin' in client_message.lower():
                re_match = re.match(
                    r'[Pp]in: (\d+), [Ll]ocation: ([a-zA-Z\s]+), [Ff]orecast: (.*)', client_message)
                if re_match:
                    pin, location, forecast = re_match.groups()
                    threading.Thread(target=update_weather,
                                     args=(client_socket, pin, location.lower(), forecast)).start()
                else:
                    response = "Invalid Pin Format. Please enter: 'Pin: [YOUR PIN], Location: [LOCATION NAME], Forecast: [UPDATED FORECAST]'"
                    client_socket.send(response.encode())

            elif 'location' in client_message.lower():
                requested_location = None
                re_match = re.match(
                    r'[Ll]ocation: ([a-zA-Z\s]+)', client_message)

                if re_match:
                    requested_location = re_match.group(1).lower()
                    threading.Thread(target=forecast_weather, args=(
                        client_socket, requested_location)).start()

                else:
                    response = "Invalid Location Format. Please enter: 'Location: [LOCATION NAME]'"
                    client_socket.send(response.encode())

            else:
                response = "Invalid input..\\n If you're an admin use: 'Pin: [YOUR PIN], Location: [LOCATION NAME], Forecast: [UPDATED FORECAST]'\\n If you're a user use: 'Location: [LOCATION NAME]'"
                client_socket.send(response.encode())

        except socket.error as err:
            print(f"Receive failed. Error: {err}")
            client_socket.close()
            continue

    # Closing the server socket (this won't be reached in an infinite loop, but could be useful in modifications)
    server_socket.close()


if __name__ == "__main__":
    main()
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
            print('Current Records in datbase:\\n', records, sep='')
            for record in records:
                if decoded_message in record:
                    response = f"You are already here."
                    sock.sendto(response.encode('utf-8'), client_address)
                    return

            db_file.seek(0, 2)
            db_file.write(f"{decoded_message}\\n")

    response = f"Welcome Student {decoded_message}"
    sock.sendto(response.encode('utf-8'), client_address)


def handle_checkout(sock, client_message, client_address):
    global database

    with thread_lock:
        with open(database, 'a+') as db_file:
            db_file.seek(0)
            records = db_file.readlines()
            print('Current Records in datbase:\\n', records, sep='')
            for record in records:
                if client_message in record:
                    records.remove(record)
                    db_file.seek(0)
                    db_file.truncate()
                    db_file.writelines(records)
                    response = "GoodBye Student" + ' ' + f"{client_message}! Have a nice day."
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
    print(f"Server Listening for messages on PORT {PORT}...\\n")

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
        {'title': 'NS3 Small Network with 2 Nodes',
         'code':
         """
from ns import ns

def main():
    # Set up logging
    ns.LogComponentEnable("UdpEchoClientApplication", ns.LOG_LEVEL_INFO)
    ns.LogComponentEnable("UdpEchoServerApplication", ns.LOG_LEVEL_INFO)

    # Create nodes
    nodes = ns.NodeContainer()
    nodes.Create(2)

    # Set up point-to-point connection
    pointToPoint = ns.PointToPointHelper()
    pointToPoint.SetDeviceAttribute("DataRate", ns.StringValue("10Mbps"))
    pointToPoint.SetChannelAttribute("Delay", ns.StringValue("5ms"))

    # Install network devices
    devices = pointToPoint.Install(nodes)

    # Install the Internet stack
    stack = ns.InternetStackHelper()
    stack.Install(nodes)

    # Assign IP addresses
    address = ns.Ipv4AddressHelper()
    address.SetBase(ns.Ipv4Address("10.1.2.0"), ns.Ipv4Mask("255.255.255.0"))
    interfaces = address.Assign(devices)

    # Set up server application on node 1
    echoServer = ns.UdpEchoServerHelper(8080)
    serverApps = echoServer.Install(nodes.Get(1))
    serverApps.Start(ns.Seconds(1.0))
    serverApps.Stop(ns.Seconds(10.0))

    # Set up client application on node 0
    echoClient = ns.UdpEchoClientHelper(
        interfaces.GetAddress(1).ConvertTo(), 8080)
    echoClient.SetAttribute("MaxPackets", ns.UintegerValue(5))
    echoClient.SetAttribute("Interval", ns.TimeValue(ns.Seconds(0.5)))
    echoClient.SetAttribute("PacketSize", ns.UintegerValue(512))

    clientApps = echoClient.Install(nodes.Get(0))
    clientApps.Start(ns.Seconds(2.0))
    clientApps.Stop(ns.Seconds(10.0))

    # Run the simulation
    ns.Simulator.Run()
    ns.Simulator.Destroy()


if __name__ == "__main__":
    main()
         """},
        {'title': 'NS3 Multi Traffic Network with 4 Nodes',
         'code':
         """
from ns import ns

# Set up logging for TCP and UDP socket factories
ns.LogComponentEnable("TcpSocket", ns.LOG_LEVEL_INFO)
ns.LogComponentEnable("UdpSocket", ns.LOG_LEVEL_INFO)

# Set up logging for BulkSendHelper (FTP) and OnOffHelper (CBR)
ns.LogComponentEnable("BulkSendApplication", ns.LOG_LEVEL_INFO)
ns.LogComponentEnable("OnOffApplication", ns.LOG_LEVEL_INFO)

# Log received packets for both UDP and TCP sinks
ns.LogComponentEnable("PacketSink", ns.LOG_LEVEL_INFO)

# Create nodes
nodes = ns.NodeContainer()
nodes.Create(4)
n0, n1, n2, n3 = nodes.Get(0), nodes.Get(1), nodes.Get(2), nodes.Get(3)

# Install internet stack
internet_stack = ns.InternetStackHelper()
internet_stack.Install(nodes)

# Create links
p2p_helper_2mbps_10ms = ns.PointToPointHelper()
p2p_helper_2mbps_10ms.SetDeviceAttribute("DataRate", ns.StringValue("2Mbps"))
p2p_helper_2mbps_10ms.SetChannelAttribute("Delay", ns.StringValue("10ms"))
p2p_helper_2mbps_10ms.SetQueue(
    "ns3::DropTailQueue", "MaxSize", ns.StringValue("10p"))

link_0_2 = p2p_helper_2mbps_10ms.Install(n0, n2)
link_1_2 = p2p_helper_2mbps_10ms.Install(n1, n2)

p2p_helper_1_7mbps_20ms = ns.PointToPointHelper()
p2p_helper_1_7mbps_20ms.SetDeviceAttribute(
    "DataRate", ns.StringValue("1.7Mbps"))
p2p_helper_1_7mbps_20ms.SetChannelAttribute("Delay", ns.StringValue("20ms"))
p2p_helper_1_7mbps_20ms.SetQueue(
    "ns3::DropTailQueue", "MaxSize", ns.StringValue("10p"))

link_2_3 = p2p_helper_1_7mbps_20ms.Install(n2, n3)

# Set up IP addresses
address_helper = ns.Ipv4AddressHelper()

address_helper.SetBase(ns.Ipv4Address("192.168.1.0"),
                       ns.Ipv4Mask("255.255.255.0"))
interfaces_0_2 = address_helper.Assign(link_0_2)

address_helper.SetBase(ns.Ipv4Address("192.168.2.0"),
                       ns.Ipv4Mask("255.255.255.0"))
interfaces_1_2 = address_helper.Assign(link_1_2)

address_helper.SetBase(ns.Ipv4Address("192.168.3.0"),
                       ns.Ipv4Mask("255.255.255.0"))
interfaces_2_3 = address_helper.Assign(link_2_3)

# Install TCP and UDP agents
tcp_sink = ns.PacketSinkHelper("ns3::TcpSocketFactory",
                               ns.InetSocketAddress(interfaces_2_3.GetAddress(1), 8080).ConvertTo())
sink_app = tcp_sink.Install(n3)
sink_app.Start(ns.Seconds(0.0))
sink_app.Stop(ns.Seconds(5.0))

tcp_source_socket = ns.Socket.CreateSocket(n1, ns.TcpSocketFactory.GetTypeId())
tcp_source_address = ns.InetSocketAddress(
    interfaces_2_3.GetAddress(1), 8080).ConvertTo()
tcp_source_socket.Connect(tcp_source_address)

udp_source_socket = ns.Socket.CreateSocket(n0, ns.UdpSocketFactory.GetTypeId())
udp_sink_address = ns.InetSocketAddress(
    interfaces_2_3.GetAddress(1), 8090).ConvertTo()

# FTP application for TCP traffic
ftp_app = ns.BulkSendHelper("ns3::TcpSocketFactory", tcp_source_address)
ftp_client = ftp_app.Install(n1)
ftp_client.Start(ns.Seconds(1.0))
ftp_client.Stop(ns.Seconds(4.0))

# CBR application for UDP traffic (1 kByte packets at 1 Mbps)
cbr_app = ns.OnOffHelper("ns3::UdpSocketFactory", udp_sink_address)
cbr_app.SetAttribute("PacketSize", ns.UintegerValue(1024))  # 1 kByte
cbr_app.SetAttribute("DataRate", ns.StringValue("1Mbps"))  # 1 Mbps
cbr_client = cbr_app.Install(n0)
cbr_client.Start(ns.Seconds(0.1))
cbr_client.Stop(ns.Seconds(4.5))

# Run the simulation
ns.Simulator.Run()
ns.Simulator.Destroy()
         """},
        {'title': 'NS3 Mesh Network Simulation with 5 Nodes',
         'code':
             """
from ns import ns


def main():
    # Set up logging
    ns.LogComponentEnable("UdpEchoClientApplication", ns.LOG_LEVEL_ALL)
    ns.LogComponentEnable("UdpEchoServerApplication", ns.LOG_LEVEL_ALL)

    # Create nodes
    nodes = ns.NodeContainer()
    nodes.Create(5)

    # Set up point-to-point connections for a mesh network
    pointToPoint = ns.PointToPointHelper()
    pointToPoint.SetDeviceAttribute("DataRate", ns.StringValue("512Kbps"))
    pointToPoint.SetChannelAttribute("Delay", ns.StringValue("5ms"))

    # Create a list to hold all devices
    devices = []

    # Install network devices and create links between all nodes
    for i in range(5):
        for j in range(i + 1, 5):
            device = pointToPoint.Install(nodes.Get(i), nodes.Get(j))
            devices.append(device)

    # Install the Internet stack
    stack = ns.InternetStackHelper()
    stack.Install(nodes)

    # Assign IP addresses to each link
    address = ns.Ipv4AddressHelper()
    address.SetBase(ns.Ipv4Address("10.1.0.0"), ns.Ipv4Mask("255.255.255.0"))

    interfaces = []
    for device in devices:
        interfaces.append(address.Assign(device))

    # Set up server application on node 4
    echoServer = ns.UdpEchoServerHelper(8080)
    serverApps = echoServer.Install(nodes.Get(4))
    serverApps.Start(ns.Seconds(0.0))
    serverApps.Stop(ns.Seconds(1.5))

    # Set up client application on node 0
    echoClient = ns.UdpEchoClientHelper(
        interfaces[4].GetAddress(4).ConvertTo(), 8080)

    # 100 packets per second
    echoClient.SetAttribute("MaxPackets", ns.UintegerValue(100))
    echoClient.SetAttribute("Interval", ns.TimeValue(ns.Seconds(0.01)))
    # Packet size of 1 KB
    echoClient.SetAttribute("PacketSize", ns.UintegerValue(1024))

    clientApps = echoClient.Install(nodes.Get(0))
    clientApps.Start(ns.Seconds(0.02))
    clientApps.Stop(ns.Seconds(1.5))

    # Manipulate the link between node 2 and node 3
    linkDevices = pointToPoint.Install(nodes.Get(2), nodes.Get(3))

    # Bring down the link at simulation time 0.4
    ns.Simulator.Schedule(ns.Seconds(
        0.4), pointToPoint.SetChannelAttribute, "Delay", ns.StringValue("inf"))

    # Restore the link at simulation time 1.0
    ns.Simulator.Schedule(ns.Seconds(
        1.0), pointToPoint.SetChannelAttribute, "Delay", ns.StringValue("5ms"))

    # Enable tracing for packets
    ns.PcapHelper().EnablePcapAll("mesh-network")

    # Run the simulation
    ns.Simulator.Run()

    # Clean up and destroy the simulator
    ns.Simulator.Destroy()
             """
         },
        {'title': 'Cisco - Configure DHCP',
         'code':
             """
Router> enable
Router# confugure terminal

Router(config)# ip dhcp pool [LABEL]

# To assign IPs starting from 192.168.1.2
Router(dhcp-config)# network 192.168.1.2 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# exit

# To reserve any ip or ip-range
Router(config)# ip dhcp excluded-address 192.168.1.4 192.168.1.7
             """
         },
        {'title': 'Cisco - Configure RIP',
         'code':
             """
Router> enable
Router# configure terminal

Router(config)# router rip

Router(config-router)# network 192.168.*.*
Router(config-router)# network 172.0.0.*
Router(config-router)# exit

Router(config)# exit
             """
         },
        {'title': 'Cisco - Configure OSPF',
         'code':
             """
Router> enable
Router# configure terminal

Router(config)# router ospf [Process No.] # Example: router ospf 1

# Example Usage:
# network [ip to advertize] [complement of its subnet] area [area no.]
Router(config-router)# network 192.168.*.* 0.0.0.255 area 0
Router(config-router)# network 172.0.0.* 0.0.255.255 area 0
Router(config-router)# exit

Router(config)# exit
             """
         },
        {'title': 'Cisco - Configure BGP',
         'code':
             """
Router> enable
Router# configure terminal

Router(config)#router bgp [AS#] # Example: router bgp 1

# Example Usage:
# neighbor [neighbor ip] remote-as [AS# of Neighbor]
# network [ip to advertize] mask [subnet mask of ip]
Router(config-router)# neighbor 172.16.0.2 remote-as 71
Router(config-router)# network 10.0.0.0 mask 255.0.0.0
Router(config-router)# exit

Router(config)#do write
             """
         }
        # {'title': '',
        #  'code':
        #      """
        #      """
        #  }
    ]
    args = sys.argv[1:]
    main(snippets, args[0] if args else None)
