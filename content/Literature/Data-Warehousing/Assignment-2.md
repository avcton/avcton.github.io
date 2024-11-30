---
title: Assignment 2
date: 2023-09-21T14:51:00Z
lastmod: 2024-06-17T17:52:06Z
draft: true
---

**Resources**

[Fall2023\_DW\_BDS\_A2\_Dimensional Modeling.pdf](assets/Fall2023_DW_BDS_A2_Dimensional%20Modeling-20230921151937-rekl8sn.pdf)

[Dimensional Modelling - Sample Case Studies-sol.pdf](assets/Dimensional%20Modeling-%20Sample%20Case%20Studies-sol-20230923212802-wek2zpq.pdf)

## TU Hotels System

### Processes & Identity of the Fact Tables

Following are the major processes in the TU Hotels System:

* Cost
* Sales
* Revenue
* Customer

#### Fact Tables

**Base Fact Table**

| Time\_Key | Product\_Key | Store\_Key | Channel\_Key | Market Segment\_Key |
| :-------: | ------------ | ---------- | ------------ | ------------------- |

**Cafe Fact Table**

| Cafe\_Key | Time\_Key | Product\_Key | Store\_Key | Channel\_Key | Market Segment\_Key |
| :-------: | --------- | ------------ | ---------- | ------------ | ------------------- |

**Customer Fact Table**

| Customer\_Key | Time\_Key | Product\_Key | Store\_Key | Channel\_Key | Market Segment\_Key |
| :-----------: | --------- | ------------ | ---------- | ------------ | ------------------- |

**Segment Fact Table**

| Segment\_Key | Time\_Key | Market Segment\_Key |
| :----------: | --------- | ------------------- |

**Seasonal Fact Table**

| Season\_Key | Time\_Key | Product\_Key | Store\_Key | Channel\_Key | Market Segment\_Key |
| :---------: | --------- | ------------ | ---------- | ------------ | ------------------- |

### Grain Level of Each Fact Table

##### Base Fact Table

The grain level is by Day, by Product, by Store, by Channel, by Market Segment

##### Cafe Fact Table

The grain level is by Cafe, by Day, by Product, by Store, by Channel, by Market Segment

##### Customer Fact Table

The grain level is by Customer, by Day, by Product, by Store, by Channel, by Market Segment

##### Segment Fact Table

The grain level is by Segment, by Day, by Market Segment

##### Seasonal Fact Table

The grain level is by Season, by Year, by Product, by Store, by Channel, by Market Segment

### Dimensions of Each Fact Table

##### Base Fact Table

Time, Product, Store, Channel, Market Segment

##### Cafe Fact Table

Cafe, Time, Product, Store, Channel, Market Segment

##### Customer Fact Table

Customer, Time, Product, Store, Channel, Market Segment

##### Segment Fact Table

Segment, Time, Product, Store, Channel, Market Segment

##### Seasonal Fact Table

Season, Time, Product, Store, Channel, Market Segment

### Major & Pre-Calculated Facts

* Quantity Sold / Unit Size
* Profit Margin
* Cost
* Number of Orders
* Average Order Value
* Total Items Sold
* Segment Size
* Yearly Seasonal Sales
* Booking Count

### Dimension Attributes

##### Time

* Time\_Key
* Day
* Quarter\_Key

##### Product Family

* Family\_Key
* Name
* Alias

##### Quarter

* Quarter\_Key
* Quarter
* Year\_Key

##### Year

* Year\_Key
* Year

##### Store

* Store\_Key
* Address
* Size
* Type
* City
* State
* Country

##### Product

* Product\_Key
* Name
* Price
* Cost
* Family\_Key

##### Channel

* Channel\_Key
* Name
* Phone
* Email
* Social Media

##### Market Segment

* Name
* Behaviour
* Demographics

### Tracking Slowly Changing Dimensions (SCD)

We will implement a Type 2 SCD methodology in order to ensure complete tracking of Slowly Changing Dimensions (SCD) in both the Cafe and Hotel segments. This methodology guarantees the preservation of historical variations in dimension attributes, enabling thorough historical analysis and reporting capabilities.

### Historical Duration of the Data

The duration of the data should span about 5 to 8 Years. This is because it is our requirement to provide percent revenue change of present versus years-ago of timeframes.

### Urgency to Load Data into Warehouse

The urgency with which the data should be extracted and loaded from transactional systems into the warehouse should be daily. This is to ensure we have latest analysis to report and provide insights on.

***

## Dimensional Model

​![CleanShot 2023-09-26 at 03.09.50@2x](assets/CleanShot%202023-09-26%20at%2003.09.50@2x-20230926031008-f2ervsv.png)​
