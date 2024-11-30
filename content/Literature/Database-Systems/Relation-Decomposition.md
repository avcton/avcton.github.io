---
title: Relation Decomposition
date: 2023-10-14T16:28:56Z
lastmod: 2024-01-09T17:41:01Z
---

## Lossless Decomposition

> If the information is not lost from the relation that is decomposed, then the decomposition will be lossless.
> The lossless decomposition guarantees that the join of relations will result in the same relation as it was decomposed.

### Example

Consider the following table:

**EMPLOYEE\_DEPARTMENT table**

| EMP\_ID | EMP\_NAME | EMP\_AGE | EMP\_CITY | DEPT\_ID | DEPT\_NAME |
| ------- | --------- | -------- | --------- | -------- | ---------- |
| 22      | Denim     | 28       | Mumbai    | 827      | Sales      |
| 33      | Alina     | 25       | Delhi     | 438      | Marketing  |
| 46      | Stephan   | 30       | Bangalore | 869      | Finance    |
| 52      | Katherine | 36       | Mumbai    | 575      | Production |
| 60      | Jack      | 40       | Noida     | 678      | Testing    |

It can be decomposed into:

**EMPLOYEE table:**

| EMP\_ID | EMP\_NAME | EMP\_AGE | EMP\_CITY |
| ------- | --------- | -------- | --------- |
| 22      | Denim     | 28       | Mumbai    |
| 33      | Alina     | 25       | Delhi     |
| 46      | Stephan   | 30       | Bangalore |
| 52      | Katherine | 36       | Mumbai    |
| 60      | Jack      | 40       | Noida     |

**DEPARTMENT table:**

| DEPT\_ID | EMP\_ID | DEPT\_NAME |
| -------- | ------- | ---------- |
| 827      | 22      | Sales      |
| 438      | 33      | Marketing  |
| 869      | 46      | Finance    |
| 575      | 52      | Production |
| 678      | 60      | Testing    |

Thus, the join on these relations on `EMP_ID` will generate the same relation as the decomposed one.

[Determine Decomposition Is Lossless Or Lossy](https://tinyurl.com/22l66q5g)

## Dependency Preserving

> In the dependency preservation, at least one decomposed table must satisfy every dependency.
> If a relation R is decomposed into relation R1 and R2, then the dependencies of R either must be a part of R1 or R2 or must be derivable from the combination of functional dependencies of R1 and R2.

### Example

> For example, suppose there is a relation R (A, B, C, D) with functional dependency set (A<span>&rarr;</span>BC). The relational R is decomposed into R1(ABC) and R2(AD) which is dependency preserving because FD A<span>&rarr;</span>BC is a part of relation R1(ABC).
