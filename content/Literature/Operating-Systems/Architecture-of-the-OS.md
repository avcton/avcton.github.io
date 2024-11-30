---
title: Architecture of the OS
date: 2023-09-11T17:31:17Z
lastmod: 2023-12-30T19:52:14Z
---

## System Calls

> All backend operations are to be executed or triggered through the system call.
> It’s basically an API that helps us communicate with the the backend operations
> Different operating systems have their own System Call API structures

### Methods to Pass Parameters to System Calls

* Pass through a register
  * Drawback: Limited number of register, how to pass more parameters?
* Store in a block of memory
  * This approach is used by linux and solaris
* Push the parameters into the stack

## Context Switching

> Switching from User Mode to Kernel Mode or Vice Versa

### Mode Bit

> Decides what mode will the operating system will be utilising

| Bit | Context     |
| --- | ----------- |
| 0   | Kernel Mode |
| 1   | User Mode   |

* Basically an operating system operates in two modes\
  [In order for the CPU to be able to differentiate between a user process and an operating system code, we need two separate modes of operation: user mode and monitor mode (also called supervisor mode, system mode, or privileged mode). A bit, called the mode bit, is added to the hardware of the computer to indicate the current mode: monitor mode (0) or user mode (1).](assets/Operating%20Systems%20-%20CS604%20Handouts-20230917173807-mvuhx4l.pdf#page=8)

### User Mode

> User processes are executed here

### Kernel Mode

> Authorised access is needed here
> All system calls are to be executed in Kernel mode

[The dual-mode operation of the CPU](assets/Operating%20Systems%20-%20CS604%20Handouts-20230917173807-mvuhx4l.pdf#page=8)\
​![](assets/Operating%20Systems%20-%20CS604%20Handouts-P8-20230929110224-20230929110224-nxkajk4.png)​
