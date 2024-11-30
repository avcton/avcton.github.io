---
title: Assignment 2
date: 2023-11-01T18:34:33Z
lastmod: 2024-06-17T18:04:55Z
---

Reference Document: [Assignment 2.pdf](assets/Assignment%202-20231101183723-aceqjys.pdf)

## Q1

Assumption: The BuyMilk function will change the status of NoMilk (shared refrigerator) to false which is initially true

[Too Much Milk Problem](https://people.cs.umass.edu/~emery/classes/cmpsci377/f07/scribe/scribe8-1.pdf)

[Concurrency](https://web.stanford.edu/~ouster/cgi-bin/cs140-winter16/lecture.php?topic=concurrency)

**Is there any chance that the two roommates buy too much milk for the house?**

No. Since the two roommates need to pass the entry section before heading over to buy milk. Only one of the roommate will be allowed to buy the milk while the other either waits for the whole process (Roommate  A) or Does not do anything at all (Roommate B).

**Prove the above algorithm for all the three necessary conditions of critical section problem**

**Mutual Exclusion**​

Since only one roommate (thread) will be able to access the critical section (BuyMilk Function) in a single time unit, thus Mutual Exclusion exists here

**Progress**

Progress is also satisfied as each roommate (thread) update it’s own turn and does not allocates the turn to the other roommate. Therefore, no thread executing in it’s remainder section is given the turn / access to the critical section.

**Bounded Waiting**

Bounded Waiting is also satisfied since each thread is allowed to access it’s critical section once and during that time if another thread arrives, it may wait (Roommate A) and will eventually get it’s turn after the current thread is done with the critical section.

## Q2

### Output for Program 1

Predictable

Output will be:

main: creating thread 00{i}\
Hello world! Function calling, 00{i}

Will be printed 8 times with i=0 in increasing order

### Output for Program 2

Not Predctable

Output will be:

main: creating thread 00{i} (8 times with i=0 in increasing order)

Hello world! Function calling, 00{i} will be printed 8 times with i=0 till 7 but the order will be unpredictable and will overlap within the previous (main: creating thread) output too

### Justification

The main difference between the two programs is the count of threads running concurrently. The first program only has a single thread running at a time while the second program has `n`​ number of threads running simultaneously. This is because the first program collects the thread before creating another through pthread\_join while the second program collects all threads at once after creating all of them. This can cause unpredictability in the output as any thread can execute at any given time.

## Q3

**The above solution satisfies which necessary or optional requirement of critical section problem Conditions? Justify your answer.**

\*\*Mutual Exclusion: \*\* Since only one process can access the critical section in a given time as the other will be waiting because of the lock, there exists mutual exclusion.

\*\*Progress: \*\* The process after executing in the critical section and returning to the exit section, only gives the turn to other process if it is waiting and wants access to the critical section. Thus progress is satisfied as no process in its remainder section given access to the critical section.

\*\*Bounded Waiting: \*\* Since the current process in the critical section after leaving it, checks if the other process is waiting for the access to the critical section and if so, gives access to. There exists a bound.

**What is the purpose of line6 (While Loop) in Function1() ?**

This while loop is responsible for busy waiting processes which wants access to the critical section while some other process is already inside the critical section and hence acquired a lock.

**What is the purpose of line10 (While Loop) in Function1() ?**

This while loop checks if the next processes after the current process are waiting and hence wants access to the critical section. And if they do so, it stops their waiting and thus they gain access to the section while the lock is still not free. If no process requires the critical section which mean none is waiting, the lock is simply freed.
