---
title: Assignment 3
date: 2024-04-01T19:48:15Z
lastmod: 2024-06-22T16:05:23Z
---

**Reference Document:**  [A 3.pdf](assets/A%203-20240401194846-pdrh3fw.pdf)

## Q1

```C++
workers = omp_get_max_threads(); //can use num_procs
printf ("%d maximum allowed threads\n", workers);
printf ("Total number of allocated cores are:%d\n", omp_get_num_procs());
omp_set_dynamic(1); // dynamic adjustment enabled
omp_set_num_threads(8);
printf ("Total number of requested when dynamic is true are:%d\n", 8);

#pragma omp parallel {
	#pragma omp single nowait
	printf("Total threads in parallel region1=%d:\n", omp_get_num_threads());
	#pragma omp for
	for (i = 0; i < mult; i++)
	{a = complex_func();}
}

omp_set_dynamic(0); // dynamic adjustment disabled
omp_set_num_threads(6);
printf("Total number of requested when dynamic is false are:%d\n", 6);

#pragma omp parallel {
	#pragma omp single nowait
	printf("Total threads in parallel region2=%d:\n", omp_get_num_threads());
	#pragma omp for
	for (i = 0; i < mult; i++)
	{a = complex_func();}
}
```

### Output

4 maximum allowed threads\
Total number of allocated cores are 4\
Total number of requested when dynamic is true are: 8

Total threads in parallel region1= 4

Total number of requested when dynamic is false are: 6

Total threads in parallel region2= 6

## Q2

​![CleanShot 2024-04-02 at 00.12.19@2x](assets/CleanShot%202024-04-02%20at%2000.12.19@2x-20240402001253-ncodv04.png)​

​![CleanShot 2024-04-02 at 00.12.37@2x](assets/CleanShot%202024-04-02%20at%2000.12.37@2x-20240402001413-63frflo.png)​

**Final State**

​![CleanShot 2024-06-22 at 4 .05.14@2x](assets/CleanShot%202024-06-22%20at%204.05.14@2x-20240622160522-s469w5g.png)​

## Q3

​![CleanShot 2024-04-02 at 00.10.00@2x](assets/CleanShot%202024-04-02%20at%2000.10.00@2x-20240402001130-7e5eu9z.png)​

​![CleanShot 2024-04-02 at 00.10.27@2x](assets/CleanShot%202024-04-02%20at%2000.10.27@2x-20240402001141-me9ko00.png)​

## Q4

### (i)

All to All Personalised AKA Total Exchange

### (ii)

​![CleanShot 2024-06-22 at 4 .04.55@2x](assets/CleanShot%202024-06-22%20at%204.04.55@2x-20240622160505-jmmb22u.png)​

### (iii)

​![CleanShot 2024-06-22 at 4 .04.29@2x](assets/CleanShot%202024-06-22%20at%204.04.29@2x-20240622160443-5cbpxth.png)​
