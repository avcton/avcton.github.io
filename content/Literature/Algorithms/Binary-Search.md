---
title: Binary Search
date: 2023-12-23T12:23:47Z
lastmod: 2023-12-23T12:32:27Z
---

## Inputs

| 0 | 1 | 2 | 3  | 4  | 5  | 6  | 7  |
| - | - | - | -- | -- | -- | -- | -- |
| 1 | 3 | 9 | 10 | 14 | 19 | 20 | 21 |

**K = 21, i = 0,  j = 7**

## Algo

```python
func binarySearch(arr, i,  j, k):
	mid = (i+j)/2
	if (arr[mid] == k):
		return mid
	if (i == j):
		return -1
	if (arr[mid] < k):
		return binnarySearch(arr, mid+1,  j, k)
	return binnarySearch(arr, i,  mid, k)
```

## Time Complexity

Let Input Size = n

### Recursive Equation

**T(n) = T(n/2) + O(1)**

### Recursion Tree

n	--- O(1)

n / 2	--- O(1)

n / 4	--- O(1)

n / 8	--- O(1)

.\
.

1

#### Height of the Tree

$log_2(n)$

#### Final Complexity

$O(log_2(n))$
