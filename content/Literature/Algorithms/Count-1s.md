---
title: Count 1s
date: 2023-12-23T15:33:02Z
lastmod: 2023-12-23T16:40:06Z
---

## Input

\[0, 0, 0, 0, 1, 1, 1]

## Algo

```python
def countOnes(arr, i, j):
	# Base Case
	if i == j:
		if arr[i] == 1:
			return 1
		return 0

	mid = (i+j)/2
	return countOnes(arr, i, mid) + countOnes(arr, mid+1, j)
```

## Time Complexity

$\theta(log\space n)$
