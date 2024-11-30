---
title: Association Rule Mining
date: 2024-01-28T15:03:38Z
lastmod: 2024-03-06T14:01:58Z
---

> We associate the confidence (probability) of one item-set with another

Association rule mining is a data mining technique used to discover interesting relationships, or associations, among variables in large datasets. It is primarily used in market basket analysis, where the goal is to identify patterns of items frequently purchased together. Association rule mining helps businesses understand the purchasing behaviour of their customers and can be used for various purposes such as product placement, cross-selling, and recommendation systems.

The basic idea behind association rule mining is to find patterns that describe the co-occurrence of items in transactions. These patterns are typically expressed as “if-then” rules, where the antecedent (left-hand side) represents the condition or set of items, and the consequent (right-hand side) represents the item(s) that are likely to be associated with the antecedent.

The most commonly used metrics for evaluating association rules are:

## Metrics

### Item-set

> Collection of one or more items

### **Support Count**

> The support count of an item-set is the total count of that item-set

### **Support**

> Its the actual probability achieved by diving Support Count by total number of transactions

The support of an item-set (or combination of items) is the proportion of transactions in the dataset in which the item-set appears. High support indicates that the item-set is frequently occurring.

### **Confidence**

> The probability / percentage of support relationships we are interested in finding out

Confidence measures the reliability of the association rule. It is the proportion of transactions containing the antecedent where the consequent also appears. High confidence suggests that the consequent is likely to appear when the antecedent is present.

### **Lift**

Lift measures how much more likely the consequent is to appear in transactions containing the antecedent, compared to its overall frequency in the dataset. Lift greater than 1 indicates that the antecedent and consequent are positively correlated.

### Transaction Width

> The number of items occurring in the entirety of a transaction

## Large Transactional Computations

Association rule mining algorithms, such as Apriori and FP-Growth, are commonly used to efficiently discover association rules from <span class="text-highlight">large transactional databases</span>. These algorithms employ different strategies to generate candidate item-sets and prune the search space to improve efficiency.

## Applications

Overall, association rule mining is a valuable technique for uncovering hidden patterns in data and gaining insights into relationships between variables, particularly in domains such as retail, marketing, and e-commerce.
