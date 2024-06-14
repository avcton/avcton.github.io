---
title: PCB
date: 2023-09-11T17:31:48Z
lastmod: 2023-09-17T19:29:32Z
publish: true
---

> Each process is represented in the operating system by a process control  
> block (PCB)—also called a task control block.
> PCB simply serves as the repository for all the data needed to start,  
> or restart, a process, along with some accounting data.

Following information is sustained within it:
* Process state. The state may be new, ready, running, waiting, halted, and so on.
* Program counter. The counter indicates the address of the next instruction to be executed for this process.
* CPU registers. The registers vary in number and type, depending on the computer architecture. They include accumulators, index registers, stack pointers, and general-purpose registers, plus any condition-code information. Along with the program counter, this state information must be saved when an interrupt occurs, to allow the process to be continued correctly afterward when it is rescheduled to run.
* CPU-scheduling information. This information includes a process priority, pointers to scheduling queues, and any other scheduling parameters.
* Memory-management information. This information may include such items as the value of the base and limit registers and the page tables, or the segment tables, depending on the memory system used by the operating system.
* Accounting information. This information includes the amount of CPU and real time used, time limits, account numbers, job or process numbers, and so on.
* I/O status information. This information includes the list of I/O devices allocated to the process, a list of open files, and so on.

​![|400](Literature/_old-attachments/PCB-1.png)​

