---
title: Rod Cutting Problem
date: 2023-10-15T10:14:28Z
lastmod: 2023-10-15T11:03:15Z
publish: true
---

# Problem Statement

Some company buys long steel rods and cuts them into shorter rods, which it then sells.

Each cut is free. The management of company wants to know the best way to cut up the rods.

We assume that we know the price p<sub>i</sub> in dollars (for i = 1, 2,...n ), that the company charges for a rod of length i inches. Rod lengths are always an integral number of inches.

## Goal

Determine the maximum revenue r<sub>n</sub> , obtainable by cutting up the rod and selling the pieces

# Example

|Length i|1|2|3|4|5|6|7|8|9|10|
| ----------| ---| ---| ---| ---| ----| ----| ----| ----| ----| ----|
|Price p<sub>i</sub>|1|5|8|9|10|17|17|20|24|30|

​![CleanShot 2023-10-15 at 10.20.19@2x](Rod%20Cutting%20Problem.png%20"All%20the%20ways%20to%20cut%20up%20a%20rod%20of%204%20inches%20in%20length,%20including%20the%20way%20with%20no%20cuts%20at%20all")​

The most optimal revenue will be deduced by cutting the rod into 2 equal cuts: 5+5 = 10

# Brute Force Solution

We will explore each possibility of cutting the rod into various sizes

This can be defined from the recurrence:

$$
r_n = max_{1 \leq i \leq n}(p_i + r_{n-i})
$$

* Cut a piece of length i , with remainder of length n
* Only the remainder, and not the rest piece, may be further divided

  * Hence only the remainder is being used to check the optimal solution of rest of the length

​![CleanShot 2023-10-15 at 10.41.21@2x](../_old-attachments/Rod%20Cutting%20Problem-1.png)​

This Solution will give us a Time Complexity of **T(2**<sup>**n**</sup> **)** 

This is because every recursive call itself produce further n-1 recursive calls

​![CleanShot 2023-10-15 at 10.50.25@2x](../_old-attachments/Rod%20Cutting%20Problem-2.png)​

# Dynamic Programming Solution

## Optimal Substructure

* The Optimal Solution / split of the current length can also have an optimal solution

​![CleanShot 2023-10-15 at 10.31.32@2x](../_old-attachments/Rod%20Cutting%20Problem-3.png)​

## Memoization

* We can avoid repetitions through memoization

​![CleanShot 2023-10-15 at 10.51.38@2x](../_old-attachments/Rod%20Cutting%20Problem-4.png)​

To implement this we can just change the notation of our BruteForce Recurrence

$$
r[n] = max_{1 \leq i \leq n}(p[i] + r[n-i])
$$

We can store the result / revenue `r`​ into an array

## Bottom Up DP Solution

​![CleanShot 2023-10-15 at 11.00.25@2x](../_old-attachments/Rod%20Cutting%20Problem-5.png)​

Where C is our array `r`​ and V is the array `p`​

This give us a Time Complexity of $n^2$

