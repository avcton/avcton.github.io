---
name: Wireshark Filter Commands
date: 2024-12-22
date_modified: 2025-01-13
highlight: Resources/Concepts
publish: true
---

Wireshark's display filters allow you to precisely control which packets are displayed during analysis.

Below is a curated list of common display filters along with their purposes:

**1. Protocol-Based Filters:**

- **TCP Packets:**
  - *Filter:* `tcp`
  - *Purpose:* Displays all TCP packets.
- **HTTP Requests:**
  - *Filter:* `http.request`
  - *Purpose:* Displays all HTTP request packets.

**2. IP Address Filters:**

- **Specific IP Address:**
  - *Filter:* `ip.addr == 192.168.0.1`
  - *Purpose:* Displays packets to or from the IP address 192.168.0.1.
- **Subnet Traffic:**
  - *Filter:* `ip.addr == 192.168.0.0/16`
  - *Purpose:* Displays packets within the 192.168.0.0/16 subnet.

**3. Port-Based Filters:**

- **TCP Port 80:**
  - *Filter:* `tcp.port == 80`
  - *Purpose:* Displays packets where the TCP port is 80 (commonly HTTP traffic).

**4. String Matching Filters:**

- **URI Contains Specific String:**
  - *Filter:* `http.request.uri contains "login"`
  - *Purpose:* Displays HTTP requests with URIs containing the string "login".
- **Host Matches Regular Expression:**
  - *Filter:* `http.host matches ".*\.example\.com"`
  - *Purpose:* Displays packets where the HTTP host matches the specified regular expression.

**5. TCP Flag Filters:**

- **SYN Packets:**
  - *Filter:* `tcp.flags.syn == 1`
  - *Purpose:* Displays TCP packets with the SYN flag set, indicating connection initiation.

**6. Packet Length Filters:**

- **Packets Greater Than 1000 Bytes:**
  - *Filter:* `frame.len > 1000`
  - *Purpose:* Displays packets with a length greater than 1000 bytes.

**7. Ethernet Address Filters:**

- **Specific MAC Address:**
  - *Filter:* `eth.addr == ff:ff:ff:ff:ff:ff`
  - *Purpose:* Displays packets with the specified Ethernet (MAC) address.

**8. Boolean Filters:**

- **TCP SYN Flag Set:**
  - *Filter:* `tcp.flags.syn == 1`
  - *Purpose:* Displays TCP packets where the SYN flag is true.

**9. Combined Filters:**

- **HTTP Requests from Specific IP:**
  - *Filter:* `http.request && ip.src == 192.168.0.1`
  - *Purpose:* Displays HTTP request packets originating from the IP address 192.168.0.1.

These filters can be combined using logical operators (`&&` for AND, `||` for OR, `!` for NOT) to create more complex expressions tailored to your analysis needs.
