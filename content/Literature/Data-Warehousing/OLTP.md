---
title: OLTP
date: 2023-09-11T17:57:50Z
lastmod: 2023-10-12T15:29:04Z
---

> Online Transaction Processing Systems\
> Operational Systems

> Operational systems, also known as transactional systems or transaction processing systems (TPS), are designed to facilitate and manage day-to-day operational activities within an organisation. These systems are primarily responsible for processing and recording transactions and events in real-time. Operational systems are typically used by operational staff and are focused on supporting core business functions.

## OLTP VS Decision Support Systems (DSS)

​![CleanShot 2023-10-20 at 18.25.02@2x](assets/CleanShot%202023-10-20%20at%2018.25.02@2x-20231020182641-0tkamg1.png)​

<span class="text-highlight">OLTP Databases use a Paged Based File System while on the other hand various DSS systems use a Hash Based File System</span>

## Misc

**Can \*\* OLAP​ \*\* Techniques be applied and configured on OLTP systems?**

​​The Answer is Yes. But that introduces complexity to OLTP systems.\
Also the resource allocated to that system might not be sufficient and may bottleneck.

**What is the average result set join of OLTP systems?**

They have a relatively small result set for queries
