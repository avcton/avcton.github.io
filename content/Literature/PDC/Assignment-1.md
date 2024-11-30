---
title: Assignment 1
date: 2024-02-15T19:46:42Z
lastmod: 2024-02-20T22:29:17Z
---

**Reference Document:**  [A 1.pdf](assets/A%201-20240215194910-09yc2k8.pdf)

## Q1

#### Formula

$$
\text{Speedup} = \frac{1}{(1-p)+\frac{p}{n}}
$$

### i

Increase the number of processors from 1 to 8 and parallelise 40% of the code.

$$
\text{SpeedUp} = \frac{1}{(1-0.4)+\frac{0.4}{8}}
$$

$$
\text{SpeedUp} = 1.54
$$

### ii.

Increase the number of processors from 1 to 4 and parallelise 70% of the code

$$
\text{SpeedUp} = \frac{1}{(1-0.7)+\frac{0.4}{4}}
$$

$$
\text{SpeedUp} = 2.11
$$

**Upgrade #**  **ii has a better speed up as compared to the other one**

## Q2

Assume a sequential program S has an execution time of 400 seconds. Further, assume that Sp is a parallel variant of S. After an experimental evaluation over different number of processors, the following running times were achieved

### a)

$$
\text{SpeedUp} = \frac{\text{Time Taken by Sequential Program}}{\text{Time Taken by its Parllelised Version}}
$$

$$
\text{SpeedUp (P = 2)} = \frac{400}{214} = 1.87
$$

$$
\text{SpeedUp (P = 4)} = \frac{400}{123.84} = 3.23
$$

$$
\text{SpeedUp (P = 6)} = \frac{400}{96.62} = 4.14
$$

$$
\text{SpeedUp (P = 8)} = \frac{400}{84.92} = 4.71
$$

### b)

$$
\text{e} = \frac{\frac{1}{S}-\frac{1}{P}}{1-\frac{1}{P}}
$$

$$
\text{e (P = 2)} = \frac{\frac{1}{1.87}-\frac{1}{2}}{1- \frac{1}{2}} =  0.07
$$

$$
\text{e (P = 4)} = \frac{\frac{1}{3.23}-\frac{1}{4}}{1- \frac{1}{4}} =  0.08
$$

$$
\text{e (P = 6)} = \frac{\frac{1}{4.14}-\frac{1}{6}}{1- \frac{1}{6}} =  0.09
$$

$$
\text{e (P = 8)} = \frac{\frac{1}{4.71}-\frac{1}{8}}{1- \frac{1}{8}} =  0.1
$$

## Q3

**Explain approaches used for multithreading in the SISD architecture. Use diagrams where required.**

Multithreading is a technique used to achieve parallelism by executing multiple threads concurrently. This technique can also be applied in *Single Instruction stream Single Data stream (SISD)*  architecture by primarily running multiple threads on the same core concurrently using different implementations.

### Implicit Multithreading

In Implicit multithreading, hardware automatically switches between multiple threads without requiring explicit instructions from the programmer or compiler. These <span class="text-highlight">threads are extracted from a single sequential program</span> and the processor hardware itself manages the concurrent execution.

### Explicit Multithreading

Explicit multithreading involves the programmer or compiler specifying how threads should be executed. Thus, giving more control to them over thread management. <span class="text-highlight">Different explicit threads are used for concurrent execution</span> either by interleaving instructions or parallel execution on parallel pipelines.

The approaches to implement explicit multithreading are as follow:

#### Interleaved Multithreading

Interleaved Multithreading AKA **fine-grained multithreading**, is a technique where the CPU switches between multiple threads on every clock cycle. This means that instructions from different threads are interleaved and multiple instructions from different threads are executed in a single cycle.

​![CleanShot 2024-02-21 at 20.14.39@2x](assets/CleanShot%202024-02-21%20at%2020.14.39@2x-20240221201500-hzsyzgq.png)​

#### Block Multithreading

Block Multithreading AKA **coarse-grained multithreading**, divides the processor’s pipeline into blocks and assigns each block to a different thread. It switches between entire blocks of instructions from different threads. Thus stalling events such as cache miss when fetching from memory produces a switch to a different thread.

#### Simultaneous Multithreading

A technique where a single physical CPU core appears as multiple logical cores to the operating system. It allows the CPU to execute instructions from multiple threads in parallel within the same core. An example would be Intel’s Hyper Threading Technology.

## Q4

### i

4x4 two-dimensional mesh with wraparound links

​![CleanShot 2024-02-21 at 06.48.47@2x](assets/CleanShot%202024-02-21%20at%2006.48.47@2x-20240221064858-v7oil1v.png)​

#### (a) Cost

$$
2(p) = 2 \times 16 = 32
$$

#### (b) Diameter

$$
2 \lfloor \sqrt p /2 \rfloor
$$

$$
2 \lfloor \sqrt{16} /2 \rfloor = 4
$$

#### (c) Bisection Width

$$
2 \sqrt{p}
$$

$$
2 \sqrt{16} = 2(4) = 8
$$

#### (d) Arc Connectivity

$$
4
$$

### ii

4x4 two-dimensional mesh with no wraparound links

​![CleanShot 2024-02-21 at 06.47.15@2x](assets/CleanShot%202024-02-21%20at%2006.47.15@2x-20240221064724-4e2ozk2.png)​

#### (a) Cost

$$
2(p - \sqrt{p})
$$

$$
2(16- \sqrt{16}) = 2(12) = 24
$$

#### (b) Diameter

$$
2(\sqrt{p}-1)
$$

$$
2(\sqrt{16}-1) = 2(3) = 6
$$

#### (c) Bisection Width

$$
\sqrt{p}
$$

$$
\sqrt{16} = 4
$$

‍

#### (d) Arc Connectivity

$$
2
$$

### iii

[Four-dimensional hypercube (size=16 Nodes)](assets/A%201-20240215194910-09yc2k8.pdf#page=2)\
​![](assets/A%201-P2-20240220211602-20240220211602-xv1w757.png)​

#### (a) Cost

$$
\frac{p\log p}{2}
$$

$$
\frac{16\log 16}{2} = \frac{64}{2} = 32
$$

#### (b) Diameter

$$
\log p
$$

$$
\log 16 = 4
$$

#### (c) Bisection Width

$$
\frac{p}{2}
$$

$$
\frac{16}{2} = 8
$$

#### (d) Arc Connectivity

$$
\log p
$$

$$
\log 16 = 4
$$

### iv

[A complete binary tree of 3 levels as shown in the image below:](assets/A%201-20240215194910-09yc2k8.pdf#page=2)\
​![](assets/A%201-P2-20240220211717-20240220211718-118k2ra.png)​

#### (a) Cost

$$
p - 1
$$

$$
15 - 1 = 14
$$

#### (b) Diameter

$$
2 \log \left( \frac{p+1}{2} \right)
$$

$$
2 \log \left( \frac{15+1}{2} \right) = 2 \times 3 = 6
$$

#### (c) Bisection Width

$$
1
$$

#### (d) Arc Connectivity

$$
1
$$
