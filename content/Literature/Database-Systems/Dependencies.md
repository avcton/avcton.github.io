---
title: Dependencies
date: 2023-10-14T16:28:42Z
lastmod: 2024-06-21T20:55:19+05:00
---

## Functional Dependency

A functional dependency exists between two attributes if the value of one attribute uniquely determines the value of another attribute in the same table.

For example, if we have a table of customer orders with attributes `order_id`, `customer_id`, and `order_date`, then `order_id` is functionally dependent on `customer_id` because each `customer_id` corresponds to a unique `order_id`. In other words, if we know the `customer_id`, we can determine the `order_id`.

We represent functional dependencies with an arrow (`->`). Using the previous example, we can write `customer_id -> order_id` to show that `order_id` is functionally dependent on `customer_id`.

### Trivial Functional Dependency

A trivial functional dependency is one where the dependent attribute is a subset of the determinant attribute.

For example, if we have a table of customer orders with attributes `order_id`, `customer_id`, and `order_date`, then `order_id -> order_id` is a trivial functional dependency because the determinant attribute `order_id` is also the dependent attribute.

### Non-Trivial Functional Dependency

A non-trivial functional dependency is one where the dependent attribute is not a subset of the determinant attribute.

For example, `customer_id -> order_id` is a non-trivial functional dependency because the determinant attribute `customer_id` is not the same as the dependent attribute `order_id`.

### Semi-Trivial Functional Dependency

A semi-trivial functional dependency is one where the dependent attribute is partially same as the determinant attribute.

For example, **A ∩ B ≠ Φ and A ⊄ B**  is a semi-trivial functional dependency.

## Non-functional Dependency

A non-functional dependency exists between two attributes if the value of one attribute does not uniquely determine the value of another attribute in the same table.

For example, if we have a table of customer orders with attributes `order_id`, `customer_id`, and `order_date`, then `order_date` is not functionally dependent on `customer_id` because multiple orders can have the same `order_date` even if they are placed by different customers. In other words, knowing the `customer_id` does not uniquely determine the `order_date`.

We represent non-functional dependencies with a double arrow (`<->`). Using the previous example, we can write `customer_id <-> order_date` to show that `order_date` is not functionally dependent on `customer_id`.

## Inference Rules

Inference rules are a set of rules that we can use to deduce new functional dependencies based on existing functional dependencies.

Here are some common inference rules:

1. **Reflexivity**: If B is a subset of A, then A <span>&rarr;</span> B.
2. **Augmentation**: If A <span>&rarr;</span> B, then A,C <span>&rarr;</span> B,C for any set of attributes C.
3. **Transitivity**: If A <span>&rarr;</span> B and B <span>&rarr;</span> C, then A <span>&rarr;</span> C.
4. **Pseudo-transitivity**: If A <span>&rarr;</span> B and C,B <span>&rarr;</span> D, then A,C <span>&rarr;</span> D.
5. **Union**: If A <span>&rarr;</span> B and A <span>&rarr;</span> C, then A <span>&rarr;</span> B,C.
6. **Decomposition**: If A <span>&rarr;</span> B,C, then A <span>&rarr;</span> B and A <span>&rarr;</span> C.
7. **Closure**: The closure of a set of attributes F, denoted as F+, is the set of all attributes that are functionally dependent on F.

These inference rules help us derive additional functional dependencies from the ones we already know.

Further used in Normal Forms
