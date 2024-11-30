---
title: Merge Sort
date: 2023-09-11T17:28:22Z
lastmod: 2023-09-11T17:28:36Z
---

> A sorting algorithm invented by John von Neumann (1903-1957) that follows a divide and conquer paradigm. It was developed in 1945.

## Basic Algorithm

1. **Divide**: Divide the unsorted list into two sub lists of about half the size
2. **Conquer**: Sort each of the two sub lists recursively until we have list sizes of length 1, in which case the list itself is returned.
3. **Combine**: Merge the two-sorted sub lists back into one sorted list
