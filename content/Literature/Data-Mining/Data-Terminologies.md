---
title: Data Terminologies
date: 2024-01-28T15:06:29Z
lastmod: 2024-05-27T15:23:33Z
---

## Data

> Collection of raw facts and figures

Basically everything we can consume and process on.

## Attribute

> An attribute is a property or characteristic of an object

Dimensions or *Columns* which define a data instance

### Example

* Color
* Model
* Gender

#### Nominal

* Categorical
* ID numbers, eye colour, zip codes

#### Ordinal

* Categorical
* Rankings (e.g., taste of potato chips on a scale from 1-10), grades, height as {tall, medium, short}

#### Interval

* Numerical
* Has an arbitrary zero point

  * This zero point does not represent the absence of the attribute but it represents some actual meaning
* Differences between values are meaningful but not necessarily their ratios
* Calendar dates, temperatures in Celsius or Fahrenheit.

Thus, Fahrenheit and Celsius temperature scales differ in terms of where their zero value is and the size of a unit (degree). This is the reason their conversions involves addition / subtraction of 32.

#### Ratio

* Numerical
* Has a true zero point

  * This zero point refers to the absence of the attribute
* Difference between values as well as ratio is meaningful
* Temperature in Kelvin, length, counts, elapsed time (e.g., time to run a race)

Measured in units such that each unit can be converted to another just by dividing or multiplying

Take for example, length can be measured in meters or feet and thus conversions can easily be done done my dividing or multiplying

The key differences between interval and ratio scales can be summarized as follows:

* **Zero Point**: Interval scales have an arbitrary zero point, whereas ratio scales have a meaningful zero point.
* **Negative Values**: Interval scales can include negative values, while ratio scales typically do not have negative values because you cannot have less than nothing of the measured attribute.
* **Mathematical Operations**: Ratio scales allow for a wider range of mathematical operations, including the calculation of ratios.

Learn to classify these in: [Attribute Classification](https://www2.cs.uh.edu/~ceick/UDM/UDM/Stat202/solution1.html)

## Data Object

> The collection of attributes is called an object

Can also be referred to as ***An Instance***

## DataSet

> Collection of data objects and their attributes

## Induction

> The process of training the model

## Deduction

> The process of mapping the input variable to target variable using the pre-trained model
