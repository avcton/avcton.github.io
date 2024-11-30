---
title: BCNF
date: 2023-10-14T16:28:58Z
lastmod: 2024-06-21T20:55:19+05:00
---

> Boyce Cod Normal Form also known as 3 1/2 form
> BCNF says that redundancy can exists even if there are no transitive dependencies

## Conditions

> * Relation has to be in 3NF
> * For every functional dependency, LHS is a super key.

## Violation Example

| **Course** | Instructor | Department  |
| ---------- | ---------- | ----------- |
| CS101      | Smith      | Computer    |
| CS102      | Johnson    | Mathematics |
| CS103      | Smith      | Computer    |

If we assume that the relation is in 3NF.
We have the following dependencies:

* Course → Instructor
* Course → Department
* Instructor → Department

There is a non-trivial functional dependency “Instructor → Department” because each instructor belongs to a specific department. However, “Instructor” is not a super key of R because there are two different instructors
