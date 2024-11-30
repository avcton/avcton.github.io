---
title: Assignment 4
date: 2023-10-06T19:53:29Z
lastmod: 2024-06-17T15:48:46Z
---

Reference Document: [HW 4.pdf](assets/HW%204-20231006195547-uena1gb.pdf)

## Task1

**This algorithm keeps track of end of Max sub array.
Modify this algorithm to keep track of start of Max sub array**

‍

```c++
MaxSubArraySum(A,n) {
	globalSum = A[1]
	MaxSum[1] = A[1]
	localStart = 1
	for (i = 2 to n)
		if (MaxSum[i-1] + A[i] > A[i])
			MaxSum[i] = MaxSum[i-1] + A[i]
		else
			MaxSum[i] = A[i]
			localStart = i // Capture the point where MaxSum is Current Index Value

	if (globalSum < MaxSum[i])
		globalSum = MaxSum[i]
		globalEnd = i	// Start Index
		globalStart = localStart // Get the point where we had the MaxSum started

	return globalSum
}
```

We can manage to do that if we store the point where the MaxSum becomes the current index. In this way if we find a MaxSum that beats the previous MaxSum, its start index will be that point we stored.

## Task2

**Dry run brute force O(n**\*\*<sup>2</sup>\*\* \*\*) algorithm on given array and show all working.
Show all values of MaxSum\[i] array. \*\*

**MaxSum\[i] array stores maximum sum out of all subarrays ending at index i.**

MaxSum\[1] = 2

MaxSum\[2] = -2

MaxSum\[3] = 3

MaxSum\[4] = 7

MaxSum\[5] = 4

MaxSum\[6] = 9

MaxSum\[7] = 4

MaxSum\[8] = 10

MaxSum\[9] = 9

\==MaxSum = 10 | Start Index = 3 | End Index = 8==

## Task3

**Dry run Kadane’s algorithm on following array and show all working.
Show all values of MaxSum\[i] array.**

‍

​![CleanShot 2023-10-07 at 18.10.58@2x](assets/CleanShot%202023-10-07%20at%2018.10.58@2x-20231007181113-qrccxmh.png)​

MaxSum\[i] = Max (A\[i] + MaxSum\[i-1] , A\[i])

MaxSum\[1] = 2

MaxSum\[2] = Max(-2, -4) = -2

MaxSum\[3] = Max(1, 3) = 3

MaxSum\[4] = Max(7, 4) = 7

MaxSum\[5] = Max(4, -3) = 4

MaxSum\[6] = Max(9, 5) = 9

MaxSum\[7] = Max(4, -5) = 4

MaxSum\[8] = Max(10, 6) = 10

MaxSum\[9] = Max(9, -1) = 9

\==MaxSum = 10==

## Task4

**Can you write the dynamic programming solution of this problem that takes O(1) memory (without array of MaxSum) and O(n) time?**

Yes. Given the requirements that to calculate the MaxSum of the next index we only need the MaxSum of previous index, we can easily construct a solution that only keeps track of the Previous Max Sum instead of the whole array.

Hence, using this Previous Max Sum we can easily calculate the MaxSum of future values.

```c++
MaxSubArraySum(A,n) {
	globalSum = A[1]
	PrevMaxSum = A[1] // PrevMaxSum replaces the MaxSum array
	localStart = 1
	for (i = 2 to n)
		if (PrevMaxSum + A[i] > A[i])
			PrevMaxSum = PrevMaxSum + A[i]
		else
			PrevMaxSum = A[i]
			localStart = i

	if (globalSum < PrevMaxSum)
		globalSum = PrevMaxSum
		globalEnd = i	// Start Index
		globalStart = localStart

	return globalSum
}
```
