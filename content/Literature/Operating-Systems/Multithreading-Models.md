---
title: Multithreading Models
date: 2023-10-05T09:14:59Z
lastmod: 2023-10-18T22:07:25Z
---

***

* [https://www.javatpoint.com/multithreading-models-in-operating-system - www.javatpoint.com](https://www.javatpoint.com/multithreading-models-in-operating-system)
* 2023-10-05 09:14:59

***

> Multithreading allows the application to divide its task into individual threads. In multi-threads, the same process or task can be done by the number of threads, or we can say that there is more than one thread to perform the task in multithreading. With the use of multithreading, multitasking can be achieved

​![CleanShot 2023-10-07 at 18.59.43@2x](assets/CleanShot%202023-10-07%20at%2018.59.43@2x-20231007185953-bq07yw5.png)​

The main drawback of single threading systems is that only one task can be performed at a time, so to overcome the drawback of this single threading, there is multithreading that allows multiple tasks to be performed.

**For example:**

​![CleanShot 2023-10-07 at 19.00.01@2x](assets/CleanShot%202023-10-07%20at%2019.00.01@2x-20231007190005-sv9y163.png)​

In the above example, client1, client2, and client3 are accessing the web server without any waiting. In multithreading, several tasks can run at the same time.

In an [operating system](https://www.javatpoint.com/os-tutorial), threads are divided into the user-level thread and the Kernel-level thread. User-level threads handled independent form above the kernel and thereby managed without any kernel support. On the opposite hand, the operating system directly manages the kernel-level threads. Nevertheless, there must be a form of relationship between user-level and kernel-level threads.

<span class="text-highlight">A kernel level thread mapped to user level thread is responsible for handling the system calls and os level specific operations for that particular user level thread</span>.

**There exists three established multithreading models classifying these relationships are:**

* Many to one multithreading model
* One to one multithreading model
* Many to Many multithreading models

## Many to one Multithreading Model:

The many to one model maps many user levels threads to one kernel thread. This type of relationship facilitates an effective context-switching environment, easily implemented even on the simple kernel with no thread support.

The disadvantage of this model is that since there is only one kernel-level thread schedule at any given time, this model cannot take advantage of the hardware acceleration offered by multithreaded processes or multi-processor systems. In this, all the thread management is done in the user-space. If blocking comes, this model blocks the whole system.

As we can see from the figure, the many to one model associates all user-level threads to single kernel-level threads.

​![CleanShot 2023-10-07 at 19.00.16@2x](assets/CleanShot%202023-10-07%20at%2019.00.16@2x-20231007190021-xjnaw7n.png)​

## One to one multithreading model

The one-to-one model maps a single user-level thread to a single kernel-level thread. This type of relationship facilitates the running of multiple threads in parallel. However, this benefit comes with its drawback. The generation of every new user thread must include creating a corresponding kernel thread causing an overhead, which can hinder the performance of the parent process. Windows series and Linux operating systems try to tackle this problem by limiting the growth of the thread count.

As we can see in the figure, one model associates that one user-level thread to a single kernel-level thread.

![CleanShot 2023-10-07 at 19.00.36@2x](assets/CleanShot%202023-10-07%20at%2019.00.36@2x-20231007190040-rgu4hyj.png)

## Many to Many multithreading model

In this type of model, there are several user-level threads and several kernel-level threads. The number of kernel threads created depends upon a particular application. The developer can create as many threads at both levels but may not be the same. The many to many model is a compromise between the other two models. In this model, if any thread makes a blocking system call, the kernel can schedule another thread for execution. Also, with the introduction of multiple threads, complexity is not present as in the previous models. Though this model allows the creation of multiple kernel threads, true concurrency cannot be achieved by this model. This is because the kernel can schedule only one process at a time.

Many to many versions of the multithreading model associate several user-level threads to the same or much less variety of kernel-level threads as in the right figure.

​![CleanShot 2023-10-07 at 19.01.52@2x](assets/CleanShot%202023-10-07%20at%2019.01.52@2x-20231007190156-gxpd0ex.png)​
