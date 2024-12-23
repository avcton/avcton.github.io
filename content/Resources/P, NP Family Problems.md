---
title: P / NP Family Problems
date: 2023-09-16
---

## P

> A P Problem is the one which can be solved in polynomial time. It consists of solving the actual problem in polynomial time.

## NP

> Non-deterministic Polynomial  
> A problem is NP, if its solution can be verified in polynomial time. Note that we are only talking about verifying the problem and not actually solving it.
>
> Non-Deterministic means that algorithm needs to guess the right solution .

The question of whether P is equal to NP, denoted as P = NP, remains one of the most famous unsolved problems in computer science. It asks whether every problem for which a solution can be verified in polynomial time can also be solved in polynomial time. In other words, it asks whether every problem in NP is also in P.

[Open question: Does P = NP? | No, P ≠ NP](p_np_np-hard_np-complete.pdf)

## NP-Hard

> A given problem is NP-Hard if all NP problem can be polynomial time reduced to it.  
> Such as Hamiltonian Cycle.  
> Any NP problem can be reduced to HC in polynomial time.  
> It's important to note that NP-hard problems themselves may or may not be in NP. Some NP-hard problems may not have solutions that can be efficiently verified.

[Every problem in NP is reducible to HC in polynomial time. Ex: TSP is reducible to HC. Example: lcm(m, n) = m \* n / gcd(m, n)](p_np_np-hard_np-complete.pdf)

## NP-Complete

> If a given problem is NP as well as NP-Hard, then it is NP-Complete.

## Resource

[Deep Looks into P, NP, NP-Hard and NP-Complete Problems.pdf](p_np_np-hard_np-complete.pdf)
