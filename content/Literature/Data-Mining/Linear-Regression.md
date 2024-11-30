---
title: Linear Regression
date: 2024-03-04T13:12:22Z
lastmod: 2024-06-20T08:33:00Z
---

> Supervised learning algorithm that formulates a linear line in order to predict the target variable

## Baseline Equation

$$
r = \theta_0 + \theta_1 x_1 + \theta_2 x_2 + ....
$$

## Training

* Bias denoted with $\theta_0$ and Weights denoted with $\theta_i$ are trained and used to formulate the line equation
* The weights and bias are ***learned*** through the Gradient Descent Algorithm

## Non Linear Relationships

* If we come across relationships that are not linear such as $x^2$ or $x^3$, we convert those relations into linear features such as creating a new dimension for $x^2$ while keeping $x$
