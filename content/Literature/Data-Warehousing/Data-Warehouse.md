---
title: Data Warehouse
date: 2023-09-11T17:55:49Z
lastmod: 2024-03-28T09:52:03Z
---

## Operational Systems

> Operational systems, also known as transactional systems or transaction processing systems (TPS), are designed to facilitate and manage day-to-day operational activities within an organisation. These systems are primarily responsible for processing and recording transactions and events in real-time. Operational systems are typically used by operational staff and are focused on supporting core business functions.

## Informational Systems

Informational systems, also known as management information systems (MIS), decision support systems (DSS), or business intelligence (BI) systems, are designed to provide information and support decision-making at different levels of management within an organisation. These systems collect, analyse, and present data and information in a structured and meaningful way. Informational systems are typically used by managers and executives to gain insights, monitor performance, and make informed decisions.

## What is Data Warehouse?

> Denormalised and read-only version of a Database
>
> It is a complete **repository of corporate data extracted from transactional systems** that is intended for analytical rather than transactional purposes.\
> In Information Systems we have a concept such as a <span class="text-highlight">SSOT</span>\
> A data warehouse is very much like that single source of data truth

Single source of truth: Serves as the centralised data repository containing the most accurate and up-to-date data.

### Features

* Integrated and total view of the enterprise
* Makes the enterprise current and historical data available for decision making
* Helps in Business Intelligence

<iframe sandbox="allow-forms allow-presentation allow-same-origin allow-scripts allow-modals" src="https://www.youtube.com/embed/AHR_7jFCMeY?feature=oembed" data-src="" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 756px; height: 423px;"></iframe>

### Characteristics

A data warehouse has following characteristics:

* Subject-Oriented
* Integrated
* Time-variant
* Non-volatile

### Construction / Evolution

AKA High Level Implementation

1. Identify key business requirements
2. Identify key data sources and volumes
3. Identify phased deliverables with quantifiable business benefits
4. Software/hardware selection
5. Data warehouse construction

   1. Data extraction and cleansing / ETL | ELT Processing
   2. Logical and physical design
   3. Software integration
6. Make Productional
7. Go to step one for next deliverable

* Structure gets expensive from this point forward
* But it also adds to the <span class="text-highlight">power</span> of our warehouse infrastructure and capabilities

### Process of Loading Data

1. Data source
   1. We capture data at this point
2. Data staging
   1. We transform the data in here to the form in which it can be stored in the warehouse
3. Data storage
   1. We store data in here to the warehouse
4. Information and delivery
   1. We convert our data to information and deliver it to the users
5. Management and control
   1. We manage our warehouse

#### ETL | ELT Processing

The process of extracting data into the warehouse from operational systems, also called Acquisition.

For more details, look into [[ETL-Processing]].

#### Things to Consider

* Top-down approach or bottom-up approach?
  * First we construct data warehouse or the data marts?
    * Former is Top-down approach while Later is bottom-up approach
* Enterprise-wide or departmental?
* What first – one data warehouse or multiple data marts?
* Build pilot or go with a full-fledged implementation
* Dependent or independent data marts

### Dimensions

* Dimensions allow us to perform multidimensional data analysis
* Every dimension must have levels
  * Levels further have attributes
  * The lowest level is called the *Grain Level*
* Further done in [[OLAP]]

> [!info]
> A Data warehouse may consist of a [[Data-Mart]]
