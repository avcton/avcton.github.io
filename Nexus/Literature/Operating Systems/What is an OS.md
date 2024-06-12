---
title: What is an OS?
date: 2023-09-11T17:31:14Z
lastmod: 2024-01-27T14:37:53Z
publish: true
---

# What is OS?

> An intermediary layer between user and computer hardware
> Provides abstraction for user to communicate with hardware
> Serves as a Resource Allocator

Resources can be shareable and non-shareable
IO Devices, timers, disks, memories, network interfaces, printers etc.

- Top-down view is that it is a program that acts as an intermediary between a user of a computer and the computer hardware, and makes the computer system convenient to use
- The bottom-up view is that operating system is a resource manager who manages the hardware and software resources in the computer system

# Purpose

- Solve User Problems
- Efficiency for User
- Connivence for User

# Terms / Components

## Kernel

> Those files / software which are stored in the RAM from ROM to load the operating system into the memory

There are four events that cause execution of a piece of code in the kernel.
These events are: interrupt, trap, system call, and signal.

​![](What%20is%20an%20OS.png)​

## Bootstrap Loading

> The process of loading the OS into the RAM

## Resource Multiplexing

1. In Time
2. In Space

## Process

> A process may require the combination of CPU utilisation and IO utilisation
> CPU manges computation and IO devices
> Therefore, a process needs to tend to CPU for computation as well as IO devices
> A process may consist of many threads

## Frequency

> A frequency of 2.3 GHz can about perform 2.3 Giga Oscillations

### See Also : [[Timeline of the Computer Systems]]
