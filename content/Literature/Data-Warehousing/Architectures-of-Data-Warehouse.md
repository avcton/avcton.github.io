---
title: Architectures of Data Warehouse
date: 2023-09-11T17:57:32Z
lastmod: 2023-12-24T19:56:54Z
---

[Data Warehouse Architectural Types](assets/Data%20Warehousing%20Fundamentals%20for%20IT%20Professionals%202nd%20edition-20230914150509-6drb56f.pdf#page=64)\
​![](assets/Data%20Warehousing%20Fundamentals%20for%20IT%20Professionals%202nd%20edition-P64-20230929231710-20230929231710-kl1owt6.png)​

## Centralised Architecture

* All data is stored in a central data warehouse. ETL processes extract, transform, and load data from various sources into the central repository.

## Independent Data Marts Architecture

* Standalone data marts designed for specific business units or departments. Each data mart contains a subset of data from the central data warehouse or source systems, tailored to the needs of a specific user group or department.

## Federated Architecture

* Data remains in separate sources, and the data warehouse acts as a virtual layer that integrates and provides a unified view of the data. Queries are distributed to the appropriate sources, and the results are combined form a consolidated response.
* [In this architectural type, there is no one overall data warehouse](assets/Data%20Warehousing%20Fundamentals%20for%20IT%20Professionals%202nd%20edition-20230914150509-6drb56f.pdf#page=64)

## Hub-and-Spoke Architecture

* A central data warehouse (hub) is connected to multiple data marts (spokes). Data is loaded into the central warehouse and selectively distributed to the data marts based on their specific requirements.

## Data Mart Bus Architecture

* Several independent data marts are created, each focused on a specific subject area or business function. The data marts are connected through a common bus architecture, providing integration and consistency across them.
