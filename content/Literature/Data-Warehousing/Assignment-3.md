---
title: Assignment 3
date: 2023-10-21T12:57:35Z
lastmod: 2024-06-17T17:52:12Z
draft: true
---

Reference Documents:

[Fall2023\_DW\_BDS\_A3\_Joining Techniques.pdf](assets/Fall2023_DW_BDS_A3_Joining%20Techniques-20231021130333-b2u4wtt.pdf)

[Joins\_PracticeProblems\_Sol.pdf](assets/Joins_PracticeProblems_Sol-20231021130350-b8z8i28.pdf)

## Assumptions

* Redundant calculations are written for ease of access

Let Table 1 and Table 2 that needs to be joined

Size of Table 1 = r<sub>1</sub> = 70K Rows\
Size of Table 2 = r<sub>2</sub> = 70K Rows

Block Size = B = 10 KB = 10,240 B\
Record Size for both tables = R = 128 B

Available Memory = K = 200 Blocks

Indexing Column Record Size = I<sub>s</sub> = 16 B

### Calculation Factors

Block Factor of Table 1 / Table 2 = bfr<sub>1</sub> = bfr<sub>2</sub> = $\frac{B}{R}$ = $\frac{10240}{128}$ = 80 rows\
Block Factor of Index Table = Ifr = $\frac{B}{I_s}$ = $\frac{10,240}{16}$ = 640 rows

Number of Blocks in Table 1 = B<sub>1</sub> = $\frac{r_1}{bfr_1}$ = $\frac{70K}{80}$ = 875\
Number of Blocks in Table 2 = B<sub>2</sub> = $\frac{r_2}{bfr_2}$ = $\frac{70K}{80}$ = 875\
Number of Blocks in Index Table = $\frac{r2}{ifr}$ = $\frac{70K}{640}$= 110

***

## I/O Cost

### 1 : 1 Mapping

One row of table\_1 joins with at most one row of table\_2

‍

#### Insufficient Memory

##### Naive Nested Loop Join

Accessing Table 1 + No. of Qualifying Rows from Table 1 x Blocks of Table 2

875 + 70,000 x 875

##### Block Nested Loop Join

Accessing Table 1 + No. of Qualified Blocks from Table 1 x Blocks of Table 2

875 + 875 x 875

##### Index Nested Loop Join

Accessing Table 1 + No. of Qualifying Rows from Table 1 x (Index Access Cost + Base Table Cost)

875 + 70,000 x (1 + 1)

##### Clustered Index Nested Loop Join

Accessing Table 1 + No. of Qualifying Rows from Table 1 x (Index Access Cost + Base Table Cost)

875 + 70,000 x (1 + 1)

##### (Sort) Merge Join

Sort Table 1 + Sort Table 2 + Merge

(875 x $log{\frac{875}{200}}$) + (875 x $log{\frac{875}{200}}$) + (875 + 875)

##### Hash Join

Partition Table 1 + Partition Table 2 + Hashing

(875 x $log{\frac{875}{200}}$) + (875 x $log{\frac{875}{200}}$) + (875 + 875)

‍

#### Sufficient Memory for both Relations

##### Naive Nested Loop Join

Accessing Table 1 + Accessing Table 2

875 + 875

##### Block Nested Loop Join

Accessing Table 1 + Accessing Table 2

875 + 875

##### Index Nested Loop Join

Accessing Table 1 + Accessing Table 2 + (No. of Qualifying Rows x Index Access Cost)

875 + 875 + (70,000 x 1)

##### Clustered Index Nested Loop Join

Accessing Table 1 + Accessing Table 2 + (No. of Qualifying Rows x Index Access Cost)

875 + 875 + (70,000 x 1)

##### (Sort) Merge Join

Accessing Table 1 + Accessing Table 2

875 + 875

##### Hash Join

(Best Case of Hash Join)

Hashing Cost (Sum of both table block sizes)

875 + 1,750

***

## Modifying Assumptions

Size of Table 2 = r<sub>2</sub> = 140K Rows

Number of Blocks in Table 2 = B<sub>2</sub> = $\frac{r_2}{bfr_2}$ = $\frac{140K}{80}$ = 1,750

### 1 : N Mapping

​`1`​ row of table\_1 joins with `12`​ rows of table\_2

‍

#### Insufficient Memory

##### Naive Nested Loop Join

Accessing Table 1 + No. of Qualifying Rows from Table 1 x Blocks of Table 2

875 + 70,000 x 1,750

##### Block Nested Loop Join

Accessing Table 1 + No. of Qualified Blocks from Table 1 x Blocks of Table 2

875 + 875 x 1,750

##### Index Nested Loop Join

Accessing Table 1 + No. of Qualifying Rows from Table 1 x (Index Access Cost + Base Table Cost)

875 + 70,000 x (1 + 12)

##### Clustered Index Nested Loop Join

Accessing Table 1 + No. of Qualifying Rows from Table 1 x (Index Access Cost + Base Table Cost)

875 + 70,000 x (1 + 1)

##### (Sort) Merge Join

Sort Table 1 + Sort Table 2 + Merge

(875 x $log{\frac{875}{200}}$) + (1,750 x $log{\frac{1750}{200}}$) + (875 + 1,750)

##### Hash Join

Partition Table 1 + Partition Table 2 + Hashing

(875 x $log{\frac{875}{200}}$) + (1,750 x $log{\frac{875}{200}}$) + (875 + 1,750)

‍

#### Sufficient Memory for both Relation

##### Naive Nested Loop Join

Accessing Table 1 + Accessing Table 2

875 + 1750

##### Block Nested Loop Join

Accessing Table 1 + Accessing Table 2

875 + 1750

##### Index Nested Loop Join

Accessing Table 1 + Accessing Table 2 + (No. of Qualifying Rows x Index Access Cost)

875 + 1750 + (70,000 x 1)

##### Clustered Index Nested Loop Join

Accessing Table 1 + Accessing Table 2 + (No. of Qualifying Rows x Index Access Cost)

875 + 1750 + (70,000 x 1)

##### (Sort) Merge Join

Accessing Table 1 + Accessing Table 2

875 + 1750

##### Hash Join

(Best Case of Hash Join)

Hashing Cost (Sum of both table block sizes)

875 + 1,750
