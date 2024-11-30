---
title: Amdahl’s law
date: 2024-02-13T13:44:55Z
lastmod: 2024-05-24T17:46:27Z
---

> Formula which gives the theoretical speedup in the execution of a task having fixed workload that can be expected of a system whose resources are improved by scaling

* Used in Parallel Computing to predict the speedup and scalability
* Ignores the parallelism overhead due to which it overestimate the achievable speedup
* [Parallel Processing - Performance Analysis](https://engineering.purdue.edu/~smidkiff/ece563/slides/speedupBasic.pdf)
* ## Formula

  * $$
    \text{Speedup} = \frac{1}{(1-p)+\frac{p}{n}}
    $$

    where $n$ is the count of processors and $p$ is the ratio of parallelism that can be achieved
  * It is very difficult to compute ((20240213134646-idzeeug ‘p’))​
  * [Speedup achieved by a parallel algorithm is defined as the ratio of the time required by the best sequential algorithm to solve a problem, T(1), to the time required by parallel algorithm using p processors to solve the same problem, T(p).](https://arc.net/l/quote/wchdsuss)
* ## Example

  ​![CleanShot 2024-02-13 at 13.50.17@2x](assets/CleanShot%202024-02-13%20at%2013.50.17@2x-20240213135024-kuwdb9o.png)​
* ## Karp-Flatt Metric

  * Amdahl’s law ignore the parallelisation overhead due to which it overestimate the achievable speedup
  * Deals with the overestimation issue of Amdahl’s law
  * The Karp-Flatt metric is used to calculate serial fraction for a given parallel configuration

    * Experimentally determined serial fraction $e$ takes into account parallel overhead
  * Used to calculate serial fraction of synchronisation
  * Can determine if the efficiency drop with increasing p for a fixed size problem is:

    1. Because of limited parallelism
    2. Because of increases in algorithmic or architectural overhead
  * [The less the value of e the better the parallelisation]()

    * $e$ can be considered as the overhead contributing to speedup
    * If $e$ is less then speedup should be better and if it isn’t then it’s likely due to more sequential tasks
  * ### Formula

    * $$
      \text{e} = \frac{\frac{1}{S}-\frac{1}{P}}{1-\frac{1}{P}}
      $$
