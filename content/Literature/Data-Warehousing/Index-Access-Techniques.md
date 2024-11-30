---
title: Index Access Techniques
date: 2023-10-27T18:57:37Z
lastmod: 2023-10-27T21:16:18Z
---

<span class="text-highlight">Traditional indexing is good for OLTP style queries, but is not so great for traditional DSS queries.</span>

* Selectivity of indices are critical in determining their usefulness

## Full Table Scan

> We visit each and every block in the table to find our desired records

### I/O Cost

$$
Total \space Number \space of \space Blocks
$$

## Single Index Access

> Access index entry stored in the index table based on the column value specified in the query
>
> Use RID(s) from the fetched index entry to locate row(s) with specified column value

* Accessing via an index helps only when the selectivity of the indexed column is very high
* Number of rows selected by an index should not be more than the number of blocks in the table to justify indexed access

### I/O Cost

$$
Index \space Access \space Cost \space interms \space of \space Blocks
$$

## Combining Multiple Indexes

> Combine multiple indexes to get the selectivity required for efficient indexed access

This is because Indexed access on a single column is rarely useful in a traditional data warehouse environment.

This technique is useful when no one index is selective enough to produce an efficient access path, but multiple indexes taken together can provide the needed selectivity

### I/O Cost

$$
Addition \space of \space all \space Indexes \space Access \space Cost \space interms \space of \space Blocks
$$

the next index cost is calculated from the result set of the previous index access
