---
title: Normal Forms
date: 2023-10-14T16:29:18Z
lastmod: 2023-10-14T16:29:20Z
---

| Normal Form | Definition                                                                                                                                           | Dependency Rule                                                                                    |
| ----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| 1NF         | A relation is in 1NF if all the attribute values are atomic and each column contains only one value per record.                                      | All attribute values must be atomic (indivisible) and there must be no repeating groups.           |
| 2NF         | A relation is in 2NF if it is in 1NF and all non-prime attributes are dependent on the whole primary key, not just part of it.                       | The relation must be in 1NF and each non-key attribute must be dependent on the whole primary key. |
| 3NF         | A relation is in 3NF if it is in 2NF and all non-key attributes are independent of each other.                                                       | For a non trivial FD, if LHS is a superkey or RHS is a prime attribute                             |
| BCNF        | A relation schema R is in Boyce-Codd Normal Form (BCNF) if and only if for every non-trivial functional dependency X → Y in R, X is a superkey of R. | For BCNF, the table should be in 3NF, and for every FD, LHS is super key.                          |
