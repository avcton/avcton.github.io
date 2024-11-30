---
title: Timeline of the Computer Systems
date: 2023-09-11T17:30:18Z
lastmod: 2023-12-30T19:18:32Z
---

> history of classified os developed over the years

## Uniprogrammed Systems

* One process at a time
* Process is called a ***Job***

  * The reason is that there is no interactivity, the user cannot interact at the time of the execution

[Memory partitioned into user and system spaces](assets/Operating%20Systems%20-%20CS604%20Handouts-20230917173807-mvuhx4l.pdf#page=5)\
​![](assets/Operating%20Systems%20-%20CS604%20Handouts-P5-20230929092908-20230929092909-ma5tbb5.png)​

### The Monitor - Simple Batch System

* Involves Punchcards / Magnetic Tapes
* Manages the sequential execution in terms of a batch

#### Process

* Bring cards to 1401
* Read cards to tape
* Put tape to 7094 which does computing
* Put tape on 1401 which prints output

#### Cons

* Waste of CPU Resources
  * If only an I/O Job is required, the CPU sits Idle
* No Customisation in terms of software needs
  * If the program changes, the logic changes, the punch card needs to be changed

## Multiprogrammed Systems

*One Job can use the CPU for computation while the other waits for I/O Operation*

* Multiple programs simultaneously but <span class="text-highlight">not at the same time</span>
* Several jobs are kept in the main memory and the CPU is multiplexed upon them
* Context Switching

#### Performance Criteria

* Turn Around Time
  * The Time taken to start and provide output for the job
  * The Less the Better

## Multitasking Systems

*A Time Sharing System*

The CPU resource is shared between processes based on a specific time.
Involves Process Preemption

### Resource Sharing Algorithms

* Shortest Job First
* Round Robin Approach

## Difference between Multitasking and Multiprogramming

[The objective of multiprogramming is to have some process running all the time so as to maximize CPU utilization](assets/Operating%20Systems%20-%20CS604%20Handouts-20230917173807-mvuhx4l.pdf#page=31)[. The objective of time-sharing is to switch the CPU among processors so frequently that users can interact with each program while it is running.](assets/Operating%20Systems%20-%20CS604%20Handouts-20230917173807-mvuhx4l.pdf#page=31)

## Multiprocessing OS

*MultiCore Systems*

More than one CPU in close communication

* Increased throughput
* Economical
* Fault Tolerant

#### Symmetric Multiprocessing (SMP)

In an SMP system, all processors or cores are considered equal and have equal access to the system resources. The operating system treats <span class="text-highlight">all processors as peers</span> and can assign tasks to any available processor. SMP systems typically share a <span class="text-highlight">common memory space</span>, allowing processes or threads to communicate and share data easily. This symmetric design simplifies programming because the same code can often run on any processor without the need for specific optimisations or considerations.

#### Asymmetric Multiprocessing (AMP)

In an AMP system, different processors or cores may have distinct roles or responsibilities. Each processor is typically dedicated to specific tasks or functions. For example, one processor might handle user interface tasks, while another handles data processing. In an AMP system, the processors <span class="text-highlight">may or may not share a common memory space</span>, depending on the specific design. Programming for AMP systems can be more complex because developers must explicitly manage task allocation and synchronisation between the different processors.

### Parallel Systems

* Tightly coupled

### Distributed System

* Processors are over the network, the network os decides which query will be handled by which processor

## Clustered OS

* Distribution of Computer Systems but they share a <span class="text-highlight">same physical storage</span>
