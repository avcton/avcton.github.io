---
title: Slowly Changing Dimensions
date: 2023-09-24T16:58:03Z
lastmod: 2023-09-24T17:03:19Z
---

> The dimensions that are ought to change with time.
>
> Changes in dimension of a Dimensional Data Model should be reflected in all transactions

## Example

[Consider the customer demographics dimension table. What happens when a customer’s status changes from rental home to own home? The corresponding row in that dimension table must be changed. Next, look at the payment method dimension table. When finance type changes for one of the payment methods, this change must be reflected in the payment method dimension table.](assets/Data%20Warehousing%20Fundamentals%20for%20IT%20Professionals%202nd%20edition-20230914150509-6drb56f.pdf#page=281)

## Techniques

[Data warehousing practitioners have come up with different techniques for applying the changes. They have also given names to these three types of dimension table changes. Yes, your guess in right. The given names are type 1 changes, type 2 changes, and type 3 changes](assets/Data%20Warehousing%20Fundamentals%20for%20IT%20Professionals%202nd%20edition-20230914150509-6drb56f.pdf#page=281)

### Type 1

[Type 1 Change](assets/Data%20Warehousing%20Fundamentals%20for%20IT%20Professionals%202nd%20edition-20230914150509-6drb56f.pdf#page=283)\
​![](assets/Data%20Warehousing%20Fundamentals%20for%20IT%20Professionals%202nd%20edition-P283-20230924171103-20230924171103-aenru8q.png)​

#### Principles

* Usually, the changes relate to correction of errors in source systems.

* Sometimes the change in the source system has no significance.

* The old value in the source system needs to be discarded.

* The change in the source system need not be preserved in the data warehouse

#### Technique

* Overwrite the attribute value in the dimension table row with the new value.

* The old value of the attribute is not preserved.

* No other changes are made in the dimension table row.

* The key of this dimension table or any other key values are not affected.

* This type is easiest to implement

### Type 2

[Type 2 Change](assets/Data%20Warehousing%20Fundamentals%20for%20IT%20Professionals%202nd%20edition-20230914150509-6drb56f.pdf#page=284)\
​![](assets/Data%20Warehousing%20Fundamentals%20for%20IT%20Professionals%202nd%20edition-P284-20230924171142-20230924171143-oxrb64d.png)​

#### Principles

* They usually relate to true changes in source systems.
* There is a need to preserve history in the data warehouse.
* This type of change partitions the history in the data warehouse.
* Every change for the same attribute must be preserved.

#### Technique

* Add a new dimension table row with the new value of the changed attribute.
* An effective date field may be included in the dimension table.
* There are no changes to the original row in the dimension table.
* The key of the original row is not affected.
* The new row is inserted with a new surrogate key

### Type 3

[Type 3 Change](assets/Data%20Warehousing%20Fundamentals%20for%20IT%20Professionals%202nd%20edition-20230914150509-6drb56f.pdf#page=285)\
​![](assets/Data%20Warehousing%20Fundamentals%20for%20IT%20Professionals%202nd%20edition-P285-20230924171236-20230924171236-o3x65s6.png)​

#### Principles

* They usually relate to “soft” or tentative changes in the source systems.
* They are used to compare performances across the transition.
* They provide the ability to track forward and backward

#### Technique

* Add an “old” field in the dimension table for the affected attribute.
* Push down the existing value of the attribute from the “current” field to the “old” field.
* Keep the new value of the attribute in the “current” field.
* Also, you may add a “current” effective date field for the attribute.
* The key of the row is not affected.
* No new dimension row is needed.
* The existing queries will seamlessly switch to the “current” value.
* Any queries that need to use the “old” value must be revised accordingly.
* The technique works best for one “soft” change at a time.
* If there is a succession of changes, more sophisticated techniques must be devised
