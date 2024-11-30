---
title: What is an OS?
date: 2023-09-11T17:31:14Z
lastmod: 2024-06-14T20:04:15Z
---

> An intermediary layer between user and computer hardware
> Provides abstraction for user to communicate with hardware
> Serves as a Resource Allocator

Resources can be shareable and non-shareable
IO Devices, timers, disks, memories, network interfaces, printers etc.

[top-down view is that it is a program that acts as an intermediary between a user of a computer and the computer hardware, and makes the computer system convenient to use](assets/Operating%20Systems%20-%20CS604%20Handouts-20230917173807-mvuhx4l.pdf#page=3)

[the bottom-up view is that operating system is a resource manager who manages the hardware and software resources in the computer system](assets/Operating%20Systems%20-%20CS604%20Handouts-20230917173807-mvuhx4l.pdf#page=3)

## Purpose

* Solve User Problems
* Efficiency for User
* Connivence for User

## Terms / Components

### Kernel

> Those files / software which are stored in the RAM from ROM to load the operating system into the memory

[there are four events that cause execution of a piece of code in the kernel. These events are: ](assets/Operating%20Systems%20-%20CS604%20Handouts-20230917173807-mvuhx4l.pdf#page=14)[interrupt, trap, system call, and signal.](assets/Operating%20Systems%20-%20CS604%20Handouts-20230917173807-mvuhx4l.pdf#page=14)

[Entry points into the operating system kernel](assets/Operating%20Systems%20-%20CS604%20Handouts-20230917173807-mvuhx4l.pdf#page=15)\
​![](assets/Operating%20Systems%20-%20CS604%20Handouts-P15-20230929112645-20230929112645-l17wflk.png)​

### Bootstrap Loading

> The process of loading the OS into the RAM

### Resource Multiplexing

1. In Time
2. In Space

### Process

> A process may require the combination of CPU utilisation and IO utilisation
> CPU manges computation and IO devices
> Therefore, a process needs to tend to CPU for computation as well as IO devices
> A process may consist of many threads

### Frequency

> A frequency of 2.3 GHz can about perform 2.3 Giga Oscillations

### See Also : [Timeline of the Computer Systems](Timeline%20of%20the%20Computer%20Systems.md)
