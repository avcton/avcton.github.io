---
title: Cisco Packet Tracer - Key Commands
date: 2024-12-22
date_modified: 2025-01-03
publish: true
---

Following are the key commands which are essential to operate and configure the network topologies in `Cisco Packet Tracer`:

## Display Forwarding Table

```
Router> enable
Router# show ip route
```

## Configure DHCP

```
Router> enable
Router# confugure terminal

Router(config)# ip dhcp pool [LABEL]

# To assign IPs starting from 192.168.1.2
Router(dhcp-config)# network 192.168.1.2 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# exit

# To reserve any ip or ip-range
Router(config)# ip dhcp excluded-address 192.168.1.4 192.168.1.7
```

## Configure RIP

```
Router> enable
Router# configure terminal

Router(config)# router rip

Router(config-router)# network 192.168.*.*
Router(config-router)# network 172.0.0.*
Router(config-router)# exit

Router(config)# exit
```

## Configure OSPF

```
Router> enable
Router# configure terminal

Router(config)# router ospf [Process No.] # Example: router ospf 1

# Example Usage:
# network [ip to advertize] [complement of its subnet] area [area no.]
Router(config-router)# network 192.168.*.* 0.0.0.255 area 0
Router(config-router)# network 172.0.0.* 0.0.255.255 area 0
Router(config-router)# exit

Router(config)# exit
```

## Configure BGP

```
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
```
