---
title: 3NF
date: 2023-10-14T16:29:02Z
lastmod: 2023-10-14T16:29:02Z
---

## Conditions

> * Relations has to be in 2NF
> * No transitive dependencies on the primary key

A relation is in 3NF if **at least one of the following condition holds** in every non-trivial function dependency X –> Y

1. X is a super key.
2. Y is a prime attribute (each element of Y is part of some candidate key).

## Violation Example

| **Student ID** | Student Name | Course Name | Course Professor | Professor Office Number |
| -------------- | ------------ | ----------- | ---------------- | ----------------------- |
| 1001           | Alice Smith  | Math 101    | Dr. Brown        | 204                     |
| 1002           | Bob Johnson  | History 201 | Dr. Johnson      | 301                     |
| 1003           | Jane Doe     | English 101 | Dr. Green        | 203                     |
| 1004           | John Smith   | Math 101    | Dr. Brown        | 204                     |

`Professor Office Number` is fully dependent on `Course Professor`, which is a non-prime attribute, thus `Professor Office Number` is transitively depending on the primary key `Student ID` through `Course Professor` as it is dependent on the primary key. This this a violation of 3NF.
