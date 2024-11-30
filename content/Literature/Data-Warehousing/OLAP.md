---
title: OLAP
date: 2023-09-11T17:56:45Z
lastmod: 2023-12-24T18:22:13Z
---

> Online Analytical Processing\
> A framework for decision support / Operational Systems

> OLAP enables fast, flexible **multidimensional data analysis** for business intelligence (BI) and decision support applications that use data warehouses

> Information is conceptually viewed as <span class="text-highlight">"cubes"</span> for simplifying the way in which users access, view and analyse data

Counter to OLTP

## Facts / Measures

> Quantitative values are known as “facts” or “measures.”
>
> E.g., sales \$, units sold, etc.

## Dimensions

> Descriptive categories are known as “dimensions.”\
> e.g., geography, time, product, scenario (budget or actual), etc.
>
> OLAP provides us a way to conduct *Multilevel Dimension Analysis*\
> This works in correspondence with Facts and Measures
>
> More on ((20230914145049-dv1kb93 ‘Logical Data Model’))

* Dimensions have set of levels
  * The lowest level is called the *Grain Level*
    * The Grain Level should be an appropriate unit as this limits our scope of analysis to that specific lowest level

| Dimensions | Levels                                      |
| :--------: | ------------------------------------------- |
|    Time    | Day, Week, Month, Quarter, Year             |
|    Store   | Store, City, District, Country, Region      |
|   Product  | Product, Sub-Category, Category, Department |

*The grain level of these dimension will be Day, Store, Product*

### Drill-down

The drill-down operation converts less-detailed data into more-detailed data through one of two methods—<span class="text-highlight">moving down in the concept hierarchy</span> or adding a new dimension to the cube. For example, if you view sales data for an organisation’s calendar or fiscal quarter, you can drill-down to see sales for each month, moving down in the concept hierarchy of the “time” dimension.

### Roll up

Roll up is the opposite of the drill-down function—it aggregates data on an OLAP cube by <span class="text-highlight">moving up in the concept hierarchy</span> or by reducing the number of dimensions. For example, you could move up in the concept hierarchy of the “location” dimension by viewing each country’s data, rather than each city.

## OLAP FASMI Test

> Features that should be in an OLAP System

### Fast

> Queries should be fairly constant in speed
> Most of them should be delivered in 5 or less seconds

### Analysis

> Should be able to perform basic numerical and statistical analysis

### Shared

> Implements the security requirements necessary for sharing potentially confidential data across a large user population

### Multi-dimensional

> Core characteristic of OLAP

### Information

> Accesses all the data and information necessary and relevant for the application, wherever it may reside and not limited by volume

## Physical Implementation Techniques

The techniques you will be utilising will vary according to your needs.

### MOLAP

> <span class="text-highlight">Multidimensional Structure</span> of Data for Analysis
>
> Typically outperform relational database technology because all answers are <span class="text-highlight">pre-computed</span> into cubes (and overhead for accessing cubes is very low)

* First Preference
* It might not work if the size of the data is extremely large
  * i.e - A Large Cube

### ROLAP

> Relational Structure of Data for Analysis
>
> Relational OLAP often makes heavy use of summary tables to provide near instantaneous access for multi-dimensional queries

* A choice if <span class="text-highlight">large amount of data</span> is to stored

MOLAP, by design, stores pre-aggregated data in a multidimensional structure, leading to faster query response times and a more predictable user experience while on the other hand, ROLAP may perform computation on the fly or rely on aggregated tables etc but they may not offer the same level of optimisation and performance consistency as MOLAP systems

### HOLAP

> Hybrid Structure of Data for Analysis
> Example would be MS SQL Server

* Can be utilised if advantages of both ROLAP and MOLAP are required

### DOLAP

> Desktop Oriented Structure for Data Analysis
> Mostly for Remote Desktop Purposes

* Download all the warehouse into local devices to utilise it
* Requires Storage and CPU competent machine

## Misc

**What is the average result set join of OLAP systems?**

They have a large result set for queries, as they are specifically built for answering most of the types of queries
