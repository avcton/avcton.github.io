---
title: Pairs with Difference 'K'
date: 2023-12-23T14:16:14Z
lastmod: 2023-12-23T15:30:14Z
---

## Input

**\[1, 5, 2, 2, 2, 5, 5, 4]**

K = 3, i = 0, j = 7

## Algo

$p - q = diff$

$p - diff = q$

```python
def find_KDiff_Pair(arr, K):
	for num in arr:
		if binarySearch(arr, size(arr), num - K):
			# We have a Count
```

## Time Complexity

$O(n\space logn)$
