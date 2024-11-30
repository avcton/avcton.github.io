---
title: Process
date: 2023-09-11T17:31:34Z
lastmod: 2023-12-30T21:37:52Z
---

> Program in Execution
>
> A process has a PCB

[A process is the unit of work in most systems. Such a system consists of a collectionof processes: operating system processes execute system code and user processes executeuser code. All these processes may execute concurrently.](assets/Operating%20Systems%20-%20CS604%20Handouts-20230917173807-mvuhx4l.pdf#page=28)

## State

[The state of a process is defined in part by the current activity of that process.](assets/Abraham-Silberschatz-Operating-System-Concepts-10th-2018-20230917173659-aljli44.pdf#page=145)

## Jobs or Process?

[Although we personally prefer the more contemporary term process, the term job has historical significance, as much of operating system theory and terminology was developed during a time when the major activity of operating systems was job processing. Therefore, in some appropriate instances we use job when describing the role of the operating system. As an example, it would be misleading to avoid the use of commonly accepted terms that include the word job (such as job scheduling) simply because process has superseded job.](assets/Abraham-Silberschatz-Operating-System-Concepts-10th-2018-20230917173659-aljli44.pdf#page=144)

## Process or Program

| Program                                                                                      | Process                                                     |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Passive Entity                                                                               | Active Entity                                               |
| Written in a specific language                                                               | The active program loaded in the memory                     |
| Additional Library Files are to be linked to the program through a linker                    | The process is the final product of the program             |
| Loader loads the program into the memory by allocating some memory to turn it into a process | The program when loaded into the memory is called a process |

### Single Thread Process

* Consists of a single program counter
  * This Program counter points to the next instruction to execute

### Multi-Thread Process

* Consists of multiple program counters each belonging to a thread

  * Serves the same purpose of pointing to the next instruction

## Process Table

> The process table is an array of PCB’s, that means logically contains a PCB for all of the current processes in the system

[Process Control Block Vs Process Table](https://eng.libretexts.org/Courses/Delta_College/Operating_System%3A_The_Basics/03%3A__Processes_Concepts/3.4%3A_Process_Control#:~:text=A%20process%20control%20block%20\(PCB,current%20processes%20in%20the%20system.)

## Types

### Zombie Process

A process that has completed its execution but still has an entry in the process table, waiting for its parent process to read its exit status

**What about the resources consumed by the Zombie Process?**

Until the zombie process is reaped by the parent, it consumes only a small amount of memory for storing its process table entry and other essential information. However, it does not consume any CPU resources as it is no longer executing any code.

### Orphan Process

[if a parent did not invoke wait() and instead terminated, thereby leaving its child processes as orphans.](assets/Abraham-Silberschatz-Operating-System-Concepts-10th-2018-20230917173659-aljli44.pdf#page=160)

**What about the orphan process whose Parents are terminated?**

The init process, usually identified as process ID 1, is the ancestor of all other processes in the system and serves as the ultimate parent process. It automatically becomes the parent of any orphaned processes (i.e., processes whose parent has terminated) and takes responsibility for reaping their exit statuses. This ensures that no zombie processes accumulate in the system.

## Process Models

### [5 State Process Model](5%20State%20Process%20Model.md)

### [7 State Process Model](7%20State%20Process%20Model.md)

## [Process Synchronisation](Synchronisation.md)
