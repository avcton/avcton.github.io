---
title: Logistic Regression
date: 2023-10-11T10:11:13Z
lastmod: 2024-06-20T09:17:59Z
---

> The foundation of neural networks
>
> Important analytic tool in natural and social sciences
>
> Baseline supervised machine learning tool for classification

## Training

We learn weights `w`​ and `b`​ using stochastic gradient descent and cross-entropy loss

The count of weights is equal to the number of our features

Hence, we calculate:

$$
z = w_1x_1 + w_2x_2 + w_3x_3 \space ... \space w_nx_n + b
$$

where $w_i$ are the weights while **$b$** \*\* \*\* is the bias value

This value is then passed through the sigmoid function to map it between 0 and 1

## Testing

Given a test example x we compute p(y|x) using learned weights w and b, and return whichever label (y = 1 or y = 0) is higher probability

## Sigmoid / Logistic Function

> We use a sigmoid function if we have binary classes.
>
> This is because the sigmoid function maps any value between 0 & 1. Thus we can have 0 and 1 as our binary classes in that regard

$$
\frac{1}{1+e^{-x}}
$$

## SoftMax Function

> We use soft-max function if we have more than two classes.

‍

## Decision Boundary

> The decision boundary is the line that separates the area where y=0 and where y=1. it is created by our hypothesis function.

\`The way our logistic function g behaves is that when its input is greater than or equal to zero, its output is greater than or equal to 0.5:

g(z) ≥ 0.5 when z ≥ 0

## Learning Components

### Loss Function

**Cross - Entropy Loss**

### Optimisation Algorithm

**Stochastic Gradient Descent**
