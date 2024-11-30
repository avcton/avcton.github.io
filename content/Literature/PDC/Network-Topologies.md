---
title: Network Topologies
date: 2024-02-15T13:36:20Z
lastmod: 2024-02-15T19:41:25Z
---

## Shared Memory Architectures

### System Bus

> Communication pathway that allows various components within a computer system to communicate with each other.

* Serves as a central conduit through which data, instructions, and control signals are transmitted between the CPU (Central Processing Unit), memory, input/output devices, and other subsystems
* Multiple processors and cores of a single processor communicate through the system bus
* [CS301: Topologies | Saylor Academy](https://learn.saylor.org/mod/page/view.php?id=27187 "CS301: Topologies | Saylor Academy")

### Multistage Omega Network

* Most common multistage interconnects
* Stages lie in the middle while processors and memory modules are connected on the sides
* Calculations

  * Stages = $\log p$
  * Nodes = $\frac{p}{2} \times \log p$
  * Costs = $p \times \log p$

## Distributed Memory Architectures

### Linear Array

* Each node has two neighbours, connected to left and right.
* Movement can be done from left to right or right to left

### K-d Meshes

* Each node has four neighbours
* Movement can be done to north, south, east or west

### Hypercube

* Based on the mathematical concept of an n-dimensional hypercube
* Each node has $\log p$ neighbours
* The distance between any two neighbours is at most $\log p$
* d-dimensional hypercubes can be constructed by connecting corresponding nodes of multiple (d-1) dimensional hypercubes

### Tree Based Network

* One path between any pair of nodes
* Linear Arrays are a special case of a tree based network

#### Fat Tree

* A node can communicate to the other node through the root node
* There exists <span class="text-highlight">higher traffic</span> at the root node

## Evaluation

### Cost

* Number of links for communication
* <span class="text-highlight">Lower values</span> are favourable
* Example

  * Cost of a Linear Array is $p-1$

### Diameter

* Shortest distance between the two most farthest node in the network
* <span class="text-highlight">Lower values</span> are favourable

### Bisection Width

* Minimum number of wires required to cut / remove in order to divide the network into two equal parts
* <span class="text-highlight">Higher values</span> are favourable

### Arc Connectivity

* The minimum number of arcs / links that should be cut down in order to separate a single node from the network
