---
title: 2NF
date: 2023-10-14T16:29:08Z
lastmod: 2023-12-25T13:57:58Z
---

## Conditions

> * Relations has to be in 1st Normal Form
> * No partial dependencies on the (composite) primary key

## Violation Example

| **Order ID** | Customer ID | Customer Name | **Product ID** | Product Name | Product Price |
| ------------ | ----------- | ------------- | -------------- | ------------ | ------------- |
| 1            | 101         | John Smith    | 1001           | Widget       | \$10.00       |
| 2            | 101         | John Smith    | 1002           | Gadget       | \$20.00       |
| 3            | 102         | Jane Doe      | 1001           | Widget       | \$10.00       |
| 4            | 103         | Bob Johnson   | 1003           | Gizmo        | \$15.00       |

Both `Order ID` and `Product ID` are primary keys but `Product Name` and `Product Price` are fully dependent on `Product ID` which just part of a primary key. Thus this is a violation of 2NF.
