---
title: First or Last Occurrence
date: 2023-12-23T15:52:15Z
lastmod: 2023-12-23T16:31:14Z
---

**First or Last Occurrence** of a given number in a sorted array

## Input

\[2, 5, 5, 5, 6, 6, 8, 9, 9, 9]

K = 5

## Algo

```python
def getOccurrence(arr, i, j, K):
	# Base Case
	if i == j:
		if arr[i] == K:
			return (i, i)
		return -1

	mid = (i+j)/2
	l_part = getOccurence(arr, i, mid, K)
	r_part = getOccurence(arr, mid + 1, j, K)

	if l_part != -1 && r_part != -1:
		return (min(l_part[0], r_part[0]), max(l_part[1], r_part[1]))

	else if l_part == -1 && r_part != -1:
		return r_part

	else if r_part == -1 && l_part != -1:
		return l_part

	return -1
```

## Time Complexity

$\theta(log\space n)$
