---
title: Counting Inversion Pairs
date: 2023-09-13T15:06:54Z
lastmod: 2023-10-01T21:53:35Z
---

## Problem

### Input

Array A containing the numbers 1,2,3,..,n in some arbitrary order

### Output

Number of inversions = number of pairs (i, j) of array indices with i\<j and A\[i] > A\[j]

## Example

1, 3, 5, 2, 4, 6

### Inversions

(3,2), (5,2), (5,4)

## Motivation:

Numerical similarity between two ranked lists. e.g\
collaborative filtering

## Questions

> What is the largest‐possible number of inversions that a 6-element array can have?

An array in decreasing order (descending order) will have a maximum number of inversion pairs

thus, we can use the formula to calculate the maximum number of pairs in an array:

$$
\frac{n (n-1)}{2}
$$

## Algorithm

> Instead of using a Brute Force approach, that it is to use 2 nested loops and thus have a time complexity of ø$(n^2)$, we can develop a more high level algorithm

## Divide and Conqueror

> We can use a similar algorithm as that of merge sort to traverse through all the elements of the array and use the sorted pattern of that sorting algorithm to our advantage
