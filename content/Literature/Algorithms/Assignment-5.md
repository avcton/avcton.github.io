---
title: Assignment 5
date: 2023-10-11T10:20:22Z
lastmod: 2024-06-17T15:48:55Z
---

Reference Document: [Rod Cutting Assignment.pdf](assets/Rod%20Cutting%20Assignment-20231011102039-z6yux13.pdf)

## Task1

| Length (i)          | 1 | 2 | 3 | 4 | 5  | 6  | 7  | 8  | 9  | 10 |
| ------------------- | - | - | - | - | -- | -- | -- | -- | -- | -- |
| Price p<sub>i</sub> | 1 | 5 | 8 | 9 | 10 | 17 | 17 | 20 | 24 | 30 |

**Given above table of rod process, compute all possible solutions for rod of length 6.**

First lets find out Optimal Solutions for lengths less than 6

| Optimal Solution for Length | Optimal Length Split | Revenue |
| --------------------------- | -------------------- | ------- |
| 5                           | 2, 3                 | 13      |
| 4                           | 2, 2                 | 10      |
| 3                           | 3                    | 8       |
| 2                           | 2                    | 5       |
| 1                           | 1                    | 1       |

Following could be possible solutions for splitting the length 6 rod into difference lengths

| Possible Solutions | Revenue                   |
| ------------------ | :------------------------ |
| 6                  | 17                        |
| 1, 5               | 1 + 13 = 14               |
| 2, 4               | 5 + 10 = 15               |
| 3, 3               | 8 + 8 = 16                |
| 1, 1, 4            | 1 + 1 + 10 = 12           |
| 1, 2, 3            | 1 + 5 + 8 = 14            |
| 2, 2, 2            | 5 + 5 + 5 = 15            |
| 1, 1, 2, 2         | 1 + 1 + 5 + 5 = 12        |
| 1, 1, 1, 3         | 1 + 1 + 1 + 8 = 11        |
| 1, 1, 1, 1, 2      | 1 + 1 + 1 + 1 + 5 = 9     |
| 1, 1, 1, 1, 1, 1   | 1 + 1 + 1 + 1 + 1 + 1 = 6 |

(*No Repetition of Same Sequence)*

The maximum revenue will be of `17`​ with the original length that is `6`​

## Task2

| Length (i)          | 1 | 2 | 3 | 4 | 5  | 6  | 7  | 8  | 9  | 10 |
| ------------------- | - | - | - | - | -- | -- | -- | -- | -- | -- |
| Price p<sub>i</sub> | 1 | 5 | 8 | 9 | 10 | 17 | 17 | 20 | 24 | 30 |

**Dry run Dynamic programming solution on above example for rod length 6.
Show all computations using recursive equation and values in array**

### DP Top Down Recursive Algorithm

```C
int Optimal_Price(int C[], int n) {
  if (MaxRevenue[n] != 0) {
    return MaxRevenue[n];
  }

  int max_revenue = C[n]; // initially the current price
  for(int i=1; i<=n; i++)
    max_revenue = MAX(max_revenue, C[i] + Optimal_Price(C, n-i));

  MaxRevenue[n] = max_revenue;
  return MaxRevenue[n];
}
```

**C = \[1, 5, 8, 9, 10, 17, 17, 20, 24, 30]**

Initial Memoization

MaxRevenue = \[0, 0, 0, 0, 0, 0]

Final Memoization

MaxRevenue = \[1, 5, 8, 10, 13, 17]

**Optimal\_Price(6) - Initial Call to Function**

MaxRevenue\[6] = $Max [\\C[6],\\Optimal\_Price(5) + C(1),\\Optimal\_Price (4) + C(2),\\Optimal\_Price (3) + C(3),\\Optimal\_Price (2) + C(4),\\Optimal\_Price (1) + C(5)\\]$

Returns MaxRevenue(6) = 17

**Optimal\_Price(5)**

MaxRevenue\[5] = $Max [\\C[5],\\Optimal\_Price (4) + C(1),\\Optimal\_Price (3) + C(2),\\Optimal\_Price (2) + C(3),\\Optimal\_Price (1) + C(4)\\]$

Returns MaxRevenue(5) = 13

**Optimal\_Price(4)**

MaxRevenue\[4] = $Max [\\C[4],\\Optimal\_Price (3) + C(1),\\Optimal\_Price (2) + C(2),\\Optimal\_Price (1) + C(3)\\]$

Returns MaxRevenue(4) = 10

**Optimal\_Price(3)**

MaxRevenue\[3] = $Max [\\C[3],\\Optimal\_Price (2) + C(1),\\Optimal\_Price (1) + C(2)\\]$

Returns MaxRevenue(3) = 8

**Optimal\_Price(2)**

MaxRevenue\[2] = $Max [\\C[2],\\Optimal\_Price (1) + C(1)\\]$

Returns MaxRevenue(2) = 5

**Optimal\_Price(1)**

MaxRevenue\[1] = $C[1]$

Returns MaxRevenue(1) = 1

…

Hence, we get Optimal Price at Length 6 as `17`​.

## Task3

**Compute the optimal solution (where should we cut the rod to get optimal revenue) by modifying the algorithm**

### Bottom Up Iterative Algorithm Modification

We can store the cut point where we get a maximum revenue into a variable only for the final iteration / the nth value we need to work on. This is done in line # `9`​.

```
Rod-Cutting-DP(V, n){
	C[0] = 0
	cut = -1;
	for (i = 1 to n) {
		max = -∞
		for (k = 1 to i) {
			if (max < V[k] + C[i − k])
				max = V[k] + C[i − k]
				if (i == n) // Checking if we are working for n
					cut = k; // we need to store this cut point
			}
		C[i] = max
		// cut has the Optimal Cut Point for our Optimal Revenue
	}
}
```
