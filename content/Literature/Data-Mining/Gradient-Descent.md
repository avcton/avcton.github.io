---
title: Gradient Descent
date: 2024-03-04T13:42:02Z
lastmod: 2024-03-20T14:09:52Z
---

> Optimisation algorithm that is used to get the least value of a function

$$
W_{new} = W_{old} - \eta\frac{\partial Loss(y, \hat{y})}{\partial W_{old}}
$$

* Cost / Loss cannot be calculated directly if the Loss function doesn’t consume $W_{old}$

  We utilise chain rule to deal with that in such cases

  * $$
    \frac{\partial Loss(y, \hat{y})}{\partial W_{old}} = \frac{c}{\partial \hat{y}} \cdot \frac{\partial \hat{y}}{X} \cdot \frac{X}{\partial W_{old}}
    $$

## Variants

### Newton’s Method

* ‍

### Stochastic Gradient Descent

* Estimate the gradient on the Sub-sampled data points instead of all the whole data points
* Can be efficient if the size of data is very large
* Faster than normal Gradient Descent
