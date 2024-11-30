---
title: Assignment 2
date: 2023-09-19T20:17:23Z
lastmod: 2024-06-17T15:47:45Z
---

Reference Document: [HW 2.pdf](assets/HW%202-20230919201750-h7bvdmt.pdf)

‍

## Q1

### Algorithm

We will keep two indices, i and j to track the position of reds and whites respectively. Both of these will point at the last red and white colours in the sequence we are creating. To add a swap / add a colour in the sequence we simply increment i or j and swap out the element to preserve the sequence. If Red swaps out some White, the next if condition catches that and put that White in it’s correct position again.

### PseudoCode

```
int i=-1, j=-1;
for(int k=0; k<size; k++){
	if(A[k] == Red){
		// We Found Red
		// No need to initialise i since we will put it at start
		swap(A[++i], A[k]);
	}
	if(A[k] == White){
		// We Found White, it could have been swapped by red too
		if(j == -1){
			// We need to initialise j to keep track of Whites 
			j = i;
		}
		swap(A[++j], A[k]);
	}
	// By maintaining Reds and Whites, Blue will itself be maintained
}
```

## Q2

### Algorithm

We are required to perform a total of O(logM) comparisons, that is we cannot linearly traverse the array as we did in Merge function of our MergeSort Algorithm. Alternatively, we can use Binary Search to find the correct position of a new element to be inserted into the array. Using this new position, we can create space within our newly sorted array and insert the sorted element into the right index. The requirement of O(n logM) is only for the comparisons so we can create space in the array without keeping that into account. Note that for every iteration we provide the modified start and end index values to our Binary Search Function to calculate the correct index position for our sorted element in the new modified sized array. However, the difference of the start and end index values is always M, to satisfy the requirement of O(logM) comparisons in each iteration.

### PseudoCode

```
int BinaryIndexSearch(arr, start, end, val){
	// Returns the index from where we can start inserting new element

	if(start == end){
		if(arr[start] > val)
			// Calculating the right inedex to insert element
			return start-1;
		else
			return start;
	}

	int mid = (start + end) / 2;
	if(arr[mid] > val)
		return BinaryIndexSearch(arr, start, mid-1, val);
	else if (arr[mid] < val)
		return BinaryIndexSearch(arr, mid+1, end, val);
	else
		return mid;
}

// M and N are respective Sorted Array Sizes of X & Y
// We Create a new array C as the combined size of X & Y
int C[M + N];

// Copying all the elements of X into C
for(int i=0; i<M; i++)
	C[i] = X[i];

// O is the size of array C
int O = M;

// We visit each element in Y and search for that in C
for(int i=0; i< N; i++){
	int index = BinaryIndexSearch(C, O-M, O-1, Y[i]);
	// initially O was M
	// and gradually it is increasing when we insert an element
	// thus the size in range (O-M, O-1) will always be M
	// hence for Binary Search - O(logM) Comparisons

	// We need to create space for our new value
	for(int i = O-1; i>index; i--)
		C[i+1] = C[i];

	C[index + 1] = Y[i];
	O++;
}
```

## Q3

### Algorithm

First we need to confirm if the array is already sorted completely; for this we can check if the left most element is smaller than the right most. If so then it is sorted else there has to be some rotations. Finding the index where the current element is smaller than the previous will directly get us the number of k. We will utilise *binary search* to search for this index either in the right or left part of the array. Once we reach the comparison condition, the index we need to find will be in the reduced subarray and we can return it.

### PseudoCode

```
int getK(arr, left, right){
	if(left == right || arr[left] < arr[right])
		// Already sorted if left most element is smaller than right most
		return -1;

	int mid = (left + right) / 2;

	// Either we go left or right
	if(arr[mid] < arr[left])
		i = getK(arr, left, mid);
	else
		i = getK(arr, mid+1, right);

	if(i>=0)
		// We have the index, return from this point forward
		return i;

	if(arr[left] > arr[right]){
		// Getting the index after binary searching
		return right;
	}
	return -1;
}
```

## Q4

### (a)

#### Algorithm

The approach is to keep breaking down the array into two subarrays until we reach individual elements. From there we can start returning those individual elements as majority elements. Then we can compare majority elements of two arrays and return if they are same. Else we will traverse that combined array and find the counts of each majority element returned. The element with the major count will be returned as majority element. If both elements have same count then one of it is returned. Since the criteria for a majority element is to have occurrences more than the half of the size of the array. The majority element will always be found and returned by a sub array and thus will be iterated to check for the complete array.

#### PseudoCode

```
int FindMajority(arr, start, end){
	if (start == end)
		// Return the element itself
		return arr[start];

	int half = (start + end) / 2;
	int major1 = FindMajority(arr, start, half);
	int major2 = FindMajority(arr, half+1, end);

	if (major1 == major2)
		// if we have the same majority elements in both subarrays
		return major1;

	// else we will need to get the exact count of each majority element
	int count_major1 = 0, count_major2 = 0;
	for(int i=start; i<=end; i++){
		if(arr[i] == major1)
			count_major1++;
		if(arr[i] == major2)
			count_major2++;
	}

	if(count_major1 > count_major2)
		return major1;
	else if (count_major2 > count_major1)
		return major2;
	else
		return major1;
}

int FindMajorityElement(arr, size){
	// this wrapper function is responsible for calling and verifying result
	int major = FindMajority(arr, 0, size-1);

	int count=0;
	for(int i=0; i<size; i++)
		if(arr[i] == major)
			count++;
	if(count >= size/2)
		return major;

	return NULL; // We do not have any majority element

	// O(n) + O(nlogn) = O(nlogn)
}
```

### (b)

#### Algorithm

Given an array of non-comparable elements, we will first visit each pair and then append the element into a new array if the pairs have the same two elements. In case of an odd element that is left out, it is directly put into the new array. This array is then recursively passed to the function to calculate further pairs and reduce them into a single majority element. This element is further needed to be validated in the original array to deduce if it is fulfils the criteria of the maximum element.

#### PseudoCode

```
int MajorElement(arr, int size){
	if(size == 1){
		return arr[0]; // Return the maximum element
	}

	// Create an Array to store not discarded pairs
	results = []

	for(int i=0; i<size; i+=2){
		if(i+1 >= size){ // Comparison of index not the element
			// Odd
			results += arr[i]; // Appending to the results array
		}
		else{
			// Even
			if(arr[i] == arr[i+1])
				results += arr[i];
		}
	}

	return MajorElement(results, size(results));
}

int GetMajorElement(arr, size){
	int elem = MajorElement(arr, size);
	int count=0;

	// Verifying the Validity of Majority Element
	for(int i=0; i<size; i++)
		if(arr[i] == elem)
			count ++;
	
	if(count > n/2)
		return elem;

	return NULL; // We do not have any majority element
}
```

## Q5

##### Size of Array = 10<sup>9</sup> = 1 Billion

### (a)

**Comparison Instruction Count**

|  Algorithm | Iteration 1       | Iteration 2 | Iteration 3 | Iteration 4 | Iteration 5 | Average Comparison Count |
| :--------: | ----------------- | ----------- | ----------- | ----------- | ----------- | :----------------------: |
| Merge Sort | 29926258176<br /> | 29926258176 | 29926258176 | 29926258176 | 29926258176 |      29,926,258,176      |
|  Heap Sort | 29018118170       | 29018122764 | 29018140260 | 29018105517 | 29018126290 |      29,018,122,600      |
| Quick Sort | 19666102982       | 19580488236 | 20478962176 | 21502576096 | 21214577604 |      20,488,541,419      |

### (b)

**Running Time Count in milliseconds (ms)**

|  Algorithm | Iteration 1   | Iteration 2   | Iteration 3   | Iteration 4   | Iteration 5   |     Average Running Time    |
| :--------: | ------------- | ------------- | ------------- | ------------- | ------------- | :-------------------------: |
| Merge Sort | 1445267<br /> | 1744690<br /> | 2161783<br /> | 2413675<br /> | 2505082<br /> | 2,054,099 ms ≅ 34 min<br /> |
|  Heap Sort | 1642001<br /> | 1701511<br /> | 2291343<br /> | 2178784<br /> | 1744858<br /> | 1,911,699 ms ≅ 32 min<br /> |
| Quick Sort | 356906<br />  | 376065<br />  | 455117<br />  | 715699<br />  | 376219<br />  |   456,001 ms ≅ 8 min<br />  |
