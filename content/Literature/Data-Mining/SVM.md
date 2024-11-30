---
title: SVM
date: 2023-11-26T19:33:57Z
lastmod: 2024-06-20T13:19:04Z
---

Support Vector Machines

* AKA Maximal Margin Classifier
* Support Vectors are the examples / nodes on the graph that are on the edge in the class group, meaning they are at the border and no same class instance will occur after them

  * Closer to the hyperplane
* Find hyperplane that maximizes the distance / margin from the support vectors of each class label

  * This hyperplane will act as our final decision boundary
* Higher Dimension Problems

  * We transform the data into higher dimensional space to make it linearly separable

## Mathematical Intuition

#### Equation of Hyperplane

$$
w\cdot x+b = 0
$$

Points that are on the hyperplane satisfy this equation

$$
w\cdot x+b = 1
$$

Points that are above the hyperplane, AKA belonging to +ve class satisfy this equation

$$
w\cdot x+b = -1
$$

Points that are below the hyperplane, AKA belonging to -ve class satisfy this equation

#### Distance between two Support Vectors / Edge Points

$$
\frac{2}{||W||}
$$

where $||W||$ is the magnitude of the Weight Vector

#### Distance of a point from the Hyperplane

$$
\partial = \frac{y_i * h(x_i)}{||W||}
$$

where $y_i$ is the actual label value, $||W||$ the weight vector magnitude and $h(x_i)$ is the value of hyperplane equation for point x

##### For a point lying in Origin

$$
\partial = \frac{y_i * b }{||W||}
$$

where $b$ is the value of intercept in $h(x_i)$ since $W \times X + b$ with $X = 0$ will give us $b$

#### Canonical Hyperplane

$$
s \times y * h(x) = 1
$$

we need to find $s$ for points that are Support Vectors thus for them this eq. will always give $1$

$y * h(x)$ is the absolute distance with any normalisation since we are not dividing by $||W||$\
Our goal is to make this absolute distance as $1$ between Hyperplane and the Support Vectors

$$
s = \frac{1}{y * h(x)}
$$

We then multiply s with our default hyperplane equation $h(x)$. Thus now points that will be support vector will have the distance from the Hyperplane as one

## Resources

* [SVM - Notes.pdf](assets/SVM%20-%20Notes-20240620131807-mrz5i5j.pdf)
