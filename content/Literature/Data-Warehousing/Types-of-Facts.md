---
title: Types of Facts
date: 2023-09-30T14:28:38Z
lastmod: 2023-12-24T19:35:30Z
---

## Additive Facts

> Additive facts are the simplest and most common type of facts in dimensional modelling. They are facts that can be summed up across any dimension without losing meaning or accuracy.

Additive facts are easy to work with, because you can use simple SQL queries to perform calculations and analysis on them.

### Example

For example, the number of units sold, the amount of revenue, or the <span class="text-highlight">cost of goods sold</span> are additive facts. You can aggregate them by product, by customer, by date, or by any combination of dimensions, and the result will still make sense.

## Semi-Additive Facts

> Semi-additive facts are facts that can be summed up across some dimensions, but not across others.

### Example

For example, <span class="text-highlight">the balance of a bank account</span>, the inventory level of a product, or the headcount of an organisation are semi-additive facts. You can aggregate them by account, by product, or by department, but not by date. The balance of a bank account on a given date is not the sum of the balances on previous dates. The inventory level of a product on a given date is not the sum of the inventory levels on previous dates. The headcount of an organisation on a given date is not the sum of the head-counts on previous dates. Semi-additive facts require more careful handling, because you need to use specific SQL functions or logic to perform calculations and analysis on them. For example, you can use the <span class="text-highlight">MAX, MIN, or AVG functions to get the highest, lowest, or average value of a semi additive fact</span> over a period of time.

## Non-Additive Facts

> Non-additive facts are facts that cannot be summed up across any dimension. They are usually ratios, percentages, or rates that are derived from other facts.

### Example

For example, the profit margin, the conversion rate, or the customer satisfaction score are non-additive facts. You cannot aggregate them by any dimension, because the result will not be meaningful or accurate. The profit margin of a product is not the sum of the profit margins of its components. The conversion rate of a campaign is not the sum of the conversion rates of its channels. The customer satisfaction score of a service is not the sum of the customer satisfaction scores of its features. Non-additive facts require the most attention, because you need to store them separately from other facts, and use special SQL expressions or calculations to perform analysis on them. For example, you can use the CASE statement or the DIVIDE function to compute non-additive facts from other facts.
