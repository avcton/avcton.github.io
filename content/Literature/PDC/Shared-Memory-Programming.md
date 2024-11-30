---
title: Shared Memory Programming
date: 2024-03-05T13:24:50Z
lastmod: 2024-03-07T13:29:02Z
---

> Physically each processor in a computer share access to the same RAM and the threads running on the processors interact with each other via shared variables in the common address space of a single process

* Architecture

  * UMA

    * Uniform Memory Access
    * Data access time from the memory is same for each processor
* Methodology

  * Multi-threaded Programming

    * Multiple threads are created which execute a piece of code concurrently
    * Can be achieved using Fork System Call in Linux
* Comparison with Message Passing Model

  * Message Passing requires effort to introduce parallelism and the network traffic is usually send sequentially
  * Incremental Parallelism is not supported in Message Passing
  * Shared Memory model is more better in terms of performance

## OpenMP

Shared Memory Programming is implemented through OpenMP

* Open Multi Processing
* API for writing multithreaded applications

### Implementation

* Available in C / C++ under the ==**Pragma**== directive

  * Pragma stands for Pragmatic Information
  * A way for programmer to communicate with the compiler
  * Compiler is free to ignore Pregma
  * Example

    ```c++
    #include <omp.h>

    #pragma omp parallel for
    for(i=0; i<N; i++)
    	a[i] = b[i] + c[i]
    ```

    the `for`​​ above instructs the compiler to work with the C / C++ for loop

#### Clauses and their Functions:

1. ##### ​**​`parallel`​**​​:

   * Function: Indicates that the following block of code should be executed in parallel.
   * Syntax:

     ```cpp
     #pragma omp parallel [clause[, clause]...]
     {
         // Parallelized code block
     }
     ```
2. ##### ​**​`for`​**​​:

   * Function: Splits the iterations of a loop among the available threads.
   * Syntax:

     ```cpp
     #pragma omp for [clause[, clause]...] 
     for (init; condition; increment) {
         // Loop body
     }
     ```
3. ##### ​**​`num_threads`​**​​:

   * Function: Specifies the number of threads to be used for parallel execution.
   * Syntax:

     ```cpp
     #pragma omp parallel num_threads(num_threads_count)
     {
         // Parallelized code block
     }
     ```
4. ##### ​**​`shared`​**​​:

   * Function: Shares variables among all threads. Any modification by one thread affects the value seen by other threads.
   * Syntax:

     ```cpp
     #pragma omp parallel shared(shared_var1, shared_var2)
     {
         // Parallelized code block
     }
     ```
5. ##### ​**​`private`​**​​:

   * Function: Specifies that each thread should have its own private instance of the variable.
   * Syntax:

     ```cpp
     #pragma omp parallel private(private_var1, private_var2)
     {
         // Parallelized code block
     }
     ```
6. ##### ​**​`reduction`​**​​:

   * Function: Performs a reduction operation on a variable across all threads. Commonly used for summing or finding the maximum of a set of values.
   * Syntax:

     ```cpp
     #pragma omp parallel for reduction(operator:sum)
     for (init; condition; increment) {
         // Loop body
     }
     ```
7. ##### ​**​`critical`​**​​:

   * Function: Allows only one thread at a time to execute a specific block of code.
   * Syntax:

     ```cpp
     #pragma omp critical
     {
         // Critical section
     }
     ```
8. ##### ​**​`ordered`​**​​:

   * Function: Ensures that the iterations of the loop execute in the order of their index.
   * Syntax:

     ```cpp
     #pragma omp for ordered
     for (init; condition; increment) {
         // Loop body
     }
     ```
9. ##### ​**​`schedule`​**​​:

   * Function: Specifies how iterations of a loop should be divided among threads.
   * Syntax:

     ```cpp
     #pragma omp for schedule(static | dynamic | guided | auto | runtime[, chunk_size])
     for (init; condition; increment) {
         // Loop body
     }
     ```
   * Where, `static | dynamic | guided | auto | runtime`​ is the scheduling type, and `chunk_size`​ (optional) is the number of iterations each thread should handle at a time
   * The `schedule`​ clause in OpenMP is used to control how iterations of a loop are divided among the threads in a parallel region. It allows you to specify the way in which work is distributed among threads, which can have an impact on performance and load balancing.
   * ###### Types of Scheduling:

     1. **Static Scheduling (`schedule(static[, chunk_size])`​​​):**:

        * In static scheduling, iterations of the loop are divided into equal-sized chunks at compile time and distributed among the threads.
        * Each thread is assigned a chunk of iterations to work on.
        * If `chunk_size`​ is not specified, the iterations are evenly divided among the threads.
        * Example:

          ```cpp
          #pragma omp for schedule(static)
          for (int i = 0; i < n; ++i) {
              // Loop body
          }
          ```
        * In the example, if `n`​ is 100 and you have 4 threads, each thread would handle 25 iterations (assuming no `chunk_size`​ specified).
     2. **Dynamic Scheduling (`schedule(dynamic[, chunk_size])`​​):**:

        * In dynamic scheduling, iterations are distributed dynamically among the threads at runtime.
        * Each thread takes a chunk of iterations to work on, and when it finishes, it requests more work until all iterations are complete.
        * The `chunk_size`​ specifies the number of iterations to be assigned to each thread at a time.
        * Example:

          ```cpp
          #pragma omp for schedule(dynamic, 10)
          for (int i = 0; i < n; ++i) {
              // Loop body
          }
          ```
        * In this example, each thread initially gets 10 iterations to work on. When a thread finishes its work, it will request more iterations until all are done.
     3. **Guided Scheduling (`schedule(guided[, chunk_size])`​​):**:

        * Guided scheduling is similar to dynamic scheduling, but the chunk size decreases over time.
        * The first chunk size is `chunk_size`​, and subsequent chunks are smaller.
        * This can be useful for tasks where the amount of work per iteration varies widely.
        * Example:

          ```cpp
          #pragma omp for schedule(guided, 20)
          for (int i = 0; i < n; ++i) {
              // Loop body
          }
          ```
        * In this example, the initial chunk size is 20, and it decreases as iterations are completed.
     4. **Auto Scheduling (`schedule(auto)`​​):**:

        * The `auto`​ scheduling option allows the compiler to decide the best scheduling type based on heuristics.
        * It aims to balance workload among threads and reduce scheduling overhead.
        * Example:

          ```cpp
          #pragma omp for schedule(auto)
          for (int i = 0; i < n; ++i) {
              // Loop body
          }
          ```
        * The actual scheduling type chosen by the compiler may vary depending on the system and workload.
     5. **Runtime Scheduling (`schedule(runtime)`​​):**:

        * With `schedule(runtime)`​, the scheduling type and chunk size are determined at runtime through environment variables or API calls.
        * This provides flexibility to change the scheduling behavior without recompiling the code.
        * Example:

          ```cpp
          #pragma omp for schedule(runtime)
          for (int i = 0; i < n; ++i) {
              // Loop body
          }
          ```
        * The scheduling type and chunk size can be set using environment variables like `OMP_SCHEDULE`​.

     **Summary:**:

     * **Static**: Divide iterations into equal-sized chunks at compile time.
     * **Dynamic**: Distribute iterations dynamically at runtime, with a specified chunk size.
     * **Guided**: Decrease chunk size over time, useful for varying workloads.
     * **Auto**: Let the compiler decide the best scheduling type.
     * **Runtime**: Determine scheduling at runtime using environment variables or API calls.
10. ##### ​**​`nowait`​**​​:

    * Function: Specifies that threads do not need to wait for the completion of the loop before proceeding.
    * Syntax:

      ```cpp
      #pragma omp for nowait
      for (init; condition; increment) {
          // Loop body
      }
      ```

These are just a few of the many clauses available in OpenMP for C++. They allow you to control the behaviour  of parallel sections of code, specifying things like how many threads to use, how to handle shared data, and how to split work among threads. Remember to always check the OpenMP documentation for the most up-to-date information and for additional clauses and options.

* Execution through it can be turned under the C / C++ preferences Visual Studio
