---
title: CPU Schedulers
date: 2023-09-11T17:31:19Z
lastmod: 2023-12-30T21:03:40Z
publish: true
---

​![CleanShot 2023-09-23 at 12.11.36@2x](CPU%20Schedulers.png)​

## Long-Term / Job Scheduler

* Schedules jobs from the job queue to be put into the main memory
* Long-term scheduler is invoked infrequently (seconds, minutes) -> (may be slow)
* Manages the ==Degree of Multiprogramming==

  * Keeps track of the count of available space in the memory to load processes
  * A mixture of I/O bound and CPU Bound processes are selected to be loaded in the memory

## Short-Term / CPU

* Schedules processes from ready queue to be executed into the CPU
* Short-term scheduler is invoked frequently (milliseconds) -> (must be fast)
* Algorithms should be devised from the number of processes available in the ready queue such that the *throughput of the CPU* can be maximum

## Medium-Term / Swapper

- Introduces a 7 State Process Model
- Swaps in and out some processes from ready or waiting queue in to *Suspend queue*
  - The process that is swapped out is called the victim process

### Dispatch Latency

> The time it takes for the dispatcher to stop one process and start another running is known as the dispatch latency
