---
title: Data Modelling
date: 2023-09-11T17:56:04Z
lastmod: 2023-12-25T13:13:27Z
---

> A process used to define and organise data in a systematic way. It involves creating abstract representations of the structure and relationships within a database or information system.

## Categories

1. Logical Data Modeling
2. Physical Data Modelling

Logical database design, which focuses on defining the <span class="text-highlight">structure of the database and the relationships</span> between tables. Once the logical design is established, it can be implemented in a physical database, and physical design considerations (such as <span class="text-highlight">indexing, partitioning, and storage structures</span>) can be addressed to optimise performance

## Emerging Functions in SQL

> Emerging Functions allows us to use 1 Query to get the results of 3 Queries Combined
>
> Thus it allows us to read the Base Table only once

* Aggregation is done in Parallel

  * This is done by creating copies of the lowest level and thus in this way all aggregates are computed in parallel

### Types

#### Grouping Sets

> Allows us to specify explicit combinations of dimensions we require

#### Roll Up

> Allows us to specify just the dimensions we want to Roll Up from bottom to top combinations

#### Cube

> Allows us to specify all the dimensions we want and return all possible combinations

### Syntax for SQL

```sql
GROUP BY GroupingSet((Store, Product, Year), (Product, Year))
GROUP BY RollUp(Store, Product)
GROUP BY Cube(Store, Product, Year)
```
