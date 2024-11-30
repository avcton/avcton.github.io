---
title: Parallel Computing
date: 2024-02-01T13:36:05Z
lastmod: 2024-03-05T13:49:47Z
---

> Multiple processors or cores working in parallel as one integrated system.
>
> Normally, on a single geographical location with no network involved.

* A processor (CPU) is the central unit responsible for executing instructions in a system

  * This CPU can have multiple cores

    * Each Core is capable of working on its own
    * Multiple cores within a processor enable <span class="text-highlight">parallel processing</span> and improved performance
* Multiple CPU with multiple cores can exist in a computer system

  * These parallel CPUs communicate with each other using a <span class="text-highlight">System Bus</span>

    This system bus connects multiple CPUs as well as a central shared memory
* Consist of

  * Multi-core Architecture

    * Only CPUs work simultaneously
  * Many-core Architecture

    * Additional components work simultaneously with the CPU, i.e GPU
* Pthreads and OpenMP Paradigms are used to implement Parallel Computing

## Need

* Uniprocessors are fast but

  * They cannot concurrently execute multiple tasks
  * They can’t do

    * Weather Simulation
    * Online Gaming
    * Web Servers
    * Code Breaking
  * Performance needs are increasing day by day

    * As a result, we have moved from Uniprocessor systems to Multiprocessor systems

      Thus, moving towards Parallel Computing

## Requirements

* Proper communication and synchronisation mechanisms between the processes and the sub-tasks
* The program must have low coupling and higher cohesion

## Performance

* ### **Moore’s Law**

  * Number of <span class="text-highlight">transistors</span> incorporated in a chip will approximately <span class="text-highlight">double every 18 months</span>
  * Does doubling the transistors double the speed?

    * True for Single Core Chips
    * False for Multi Core Chips because:

      This does not increase the internal communication of the CPU Cores
  * Does Moore’s Law hold forever?

    No, it doesn’t

    * Adding multiple cores on a single chip can cause heat issues
    * Increasing the number of cores requires more communication and thus speed can not increase
* ### Measuring Efficiency

  Assigning variables and displaying results can be sequential while iterating through a loop is parallel in nature

  * Good Parallel hardware
  * Good system software
  * Good sequential algorithms
  * Good Parallel algorithms
