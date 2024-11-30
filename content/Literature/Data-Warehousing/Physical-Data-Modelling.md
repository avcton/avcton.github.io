---
title: Physical Data Modelling
date: 2023-10-10T18:57:37Z
lastmod: 2023-12-25T19:00:25Z
---

## Partitioning Techniques

[Partitioning means deliberate splitting of a table and its index data into manageable parts. The DBMS supports and provides the mechanism for partitioning. When you define the table, you can define the partitions as well. Each partition of a table is treated as a separate object. As the volume increases in one partition, you can split that partition further. The partitions are spread across multiple disks to gain optimum performance. Each partition in a table may have distinct physical attributes, but all partitions of the table have the same logical attributes.](assets/Data%20Warehousing%20Fundamentals%20for%20IT%20Professionals%202nd%20edition-20230914150509-6drb56f.pdf#page=515)

### Vertical Partitioning

[In vertical partitioning, you separate out the partitions by grouping selected columns together. Each partitioned table contains the same number of rows as the original table. Usually, wide dimension tables are candidates for vertical partitioning.](assets/Data%20Warehousing%20Fundamentals%20for%20IT%20Professionals%202nd%20edition-20230914150509-6drb56f.pdf#page=515)

### Horizontal Partitioning

[In horizontal partitioning, you divide the table by grouping selected rows together](assets/Data%20Warehousing%20Fundamentals%20for%20IT%20Professionals%202nd%20edition-20230914150509-6drb56f.pdf#page=515)

## Pros

* A query needs to access only the necessary partitions. Applications can be given the choice to have partition transparency or they may explicitly request an individual partition. <span class="text-highlight">Queries run faster when accessing smaller amounts of data</span>.
* An entire partition may be taken off-line for maintenance. You can <span class="text-highlight">separately schedule maintenance of partitions</span>. Partitions promote concurrent maintenance operations.
* Index building is <span class="text-highlight">faster</span>.
* Loading data into the data warehouse is <span class="text-highlight">easy and manageable</span>.
* <span class="text-highlight">Data corruption affects only a single partition</span>. Backup and recovery on a single partition reduces downtime.
* The input–output load gets balanced by <span class="text-highlight">mapping different partitions to the various disk drives</span>

‍

## Materialised Views

> A materialised view is a database object that contains the result of a precomputed query. Unlike regular (virtual) views, which are defined by a query but do not store the actual data, materialised views store the data resulting from the execution of a query. This precomputed or materialised data is periodically refreshed to reflect changes in the underlying data.
>
> More advanced form of ((20230911175655-ia0heej “Pre-Join Denormalisation”)) and ((20230911175705-ano618i ‘Pre-Aggregation’))

Materialised before run-time, thus Permanent Storage is required

Access is given on logical structure but behind the scenes Physical Design / Structure is used to satisfy the query by the query optimiser

Any activity that can be avoided at runtime contributes to the overall efficiency.

Materialised Views help us just with that

### What do they do better

* Transparency

  * Users and Applications should not be aware of change in architecture
* Auto Data Consistency

  * Maintenance automatically done by the DBMS

    * Maintenance efficiency is improved
    * DBMS can also defer (delay) MV updating based on the peak time
* Provides DBA & DW Architect with Freedom and Flexibility
* You can avoid a lot of computing at runtime

### Traditional Views

> AKA Virtual Tables
>
> A window that projects the state of a database relation / table

* Created at Runtime
* Requires storage to store in runtime, No Permanent Storage

#### Purpose

Purpose is to restrict data access from user groups

## Joining Techniques

## Indexing Techniques
