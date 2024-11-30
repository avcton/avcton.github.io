---
title: Apriori Algorithm
date: 2024-01-28T14:33:53Z
lastmod: 2024-03-06T13:55:27Z
---

> The Apriori algorithm is particularly designed for mining frequent item-sets and generating association rules which could be of interest

* <span class="text-highlight">Proposed by Rakesh Agrawal and Ramakrishnan Srikant in 1994</span>
* The algorithm works by iteratively discovering frequent item-sets in a dataset and then generating association rules based on those frequent item-sets
* The frequent item-set is determined by comparing the determined frequency of each item and item-set with the provided support value

## Frequent item-set

A frequent item-set is a set of items that frequently appear together in the dataset. The algorithm uses a level-wise search strategy to discover these frequent item-sets and then derives association rules based on these frequent item-sets.
