---
title: Assignment 1
date: 2024-02-10T12:23:00Z
lastmod: 2024-06-21T15:24:22Z
---

Reference Document: [DataMining Assignment1.pdf](assets/DataMining%20Assignment1-20240210123817-i34ay9c.pdf)

## Question 1: Calculate Entropy

### Formula

$$
-\sum_{i=0}^{c-1}p_i(t) \times log_2({pi(t)})
$$

### (a) P(x = True) = 0.5; P(x = False) = 0.5

$$
-\left(P(\text{x = True})\times \log_2{P(\text{x = True})} \right)-\left(P(\text{x = False})\times \log_2{P(\text{x = False})} \right)
$$

$$
-(0.5\times \log_2{0.5})-(0.5\times \log_2{0.5}) = 1
$$

### (b) P(x = True) = 1; P(x = False) = 0

$$
-\left(P(\text{x = True})\times \log_2{P(\text{x = True})} \right)-\left(P(\text{x = False})\times \log_2{P(\text{x = False})} \right)
$$

$$
-(1\times \log_2{1})-(0) = 0
$$

### (c) P(x = True) = 0.2; P(x = False) = 0.8

$$
-\left(P(\text{x = True})\times \log_2{P(\text{x = True})} \right)-\left(P(\text{x = False})\times \log_2{P(\text{x = False})} \right)
$$

$$
-(0.2\times \log_2{0.2})-(0.8\times \log_2{0.8}) = 0.72
$$

## Question 2

[Sample Data](assets/DataMining%20Assignment1-20240210123817-i34ay9c.pdf#page=1)\
​![](assets/DataMining%20Assignment1-P1-20240210123927-20240210123928-w4apqj0.png)​

### (a)

Calculate the Entropy of each feature

$$
-\sum_{i=0}^{c-1}p_i(t) \times log_2({pi(t)})
$$

#### Pointed

**Probabilities:**

No = 6/8\
Yes = 2/8

Entropy = $- 6/8 \times\log 6/8 -2/8 \times\log 2/8$

Entropy = $0.81$

#### Threaded

**Probabilities:**

No = 2/8\
Yes = 6/8

Entropy = $- 6/8 \times\log 6/8 -2/8 \times\log 2/8$​

Entropy = $0.81$

#### Width

**Probabilities:**

Slim = 2/8\
Medium = 3/8\
Fat = 3/8

Entropy = $- 2/8 \times\log 2/8 -3/8 \times\log 3/8 -3/8 \times\log 3/8$​

Entropy = $1.56$ (Greater than 1 because classes = 3)

### (b)

Calculate the Gini Index of each feature

$$
1-\sum_{i=0}^{c-1} p_i(t)^2
$$

#### Pointed

**Probabilities:**

No = 6/8\
Yes = 2/8

Gini = $1 - (\frac{6}{8})^2 - (\frac{2}{8})^2$

Gini = $0.38$

#### Threaded

**Probabilities:**

No = 2/8\
Yes = 6/8

Gini = $1 - (\frac{6}{8})^2 - (\frac{2}{8})^2$

Gini = $0.38$

#### Width

**Probabilities:**

Slim = 2/8\
Medium = 3/8\
Fat = 3/8

Gini = $1 - (\frac{2}{8})^2 - (\frac{3}{8})^2 - (\frac{3}{8})^2$

Gini = $0.66$

### (c)

Calculate the Information Gain of each feature and then report the best feature to split the examples\
using the information gain metric

$$
Gain = P - M
$$

#### Parent / Original Entropy

**Probabilities:**

Nail = 4/8\
Bolt = 4/8

Original Entropy = $-4/8 \times \log(4/8) -4/8 \times \log(4/8)$

Original Entropy = P = $1$

#### Child / Split Entropies

|      | Pointed<br /> |     |
| ---- | :-----------: | :-: |
|      |      Yes      |  No |
| Nail |       1       |  3  |
| Bolt |       1       |  3  |

E(Pointed = Yes) = $-P(Nail)\times \log_2{P(Nail)} -P(Bolt)\times \log_2{P(Bolt)}$

E(Pointed = Yes) = $-1/2\times \log_2{1/2} -1/2\times \log_2{1/2}$

E(Pointed = Yes) = $1$

E(Pointed = No) = $-P(Nail)\times \log_2{P(Nail)} -P(Bolt)\times \log_2{P(Bolt)}$

E(Pointed = No) = $-3/6\times \log_2{3/6} -3/6\times \log_2{3/6}$

E(Pointed = No) = $1$

**Weighted Average** = $\frac{2}{8} \times \text{E(Pointed = Yes)} + \frac{6}{8} \times \text{E(Pointed = No)}$

**Weighted Average** = M = $\frac{2}{8} \times 1 + \frac{6}{8} \times 1 = 1$

**Gain** = $\text{P}-\text{M}$

**Gain** = $1 - 1 = 0$​

|      | Threaded |    |
| ---- | -------- | -- |
|      | Yes      | No |
| Nail | 3        | 1  |
| Bolt | 3        | 1  |

E(Threaded = Yes) = $-P(Nail)\times \log_2{P(Nail)} -P(Bolt)\times \log_2{P(Bolt)}$

E(Threaded = Yes) = $-3/6\times \log_2{3/6} -3/6\times \log_2{3/6}$

E(Threaded = Yes) = $1$

E(Threaded = No) = $-P(Nail)\times \log_2{P(Nail)} -P(Bolt)\times \log_2{P(Bolt)}$

E(Threaded = No) = $-1/2\times \log_2{1/2} -1/2\times \log_2{1/2}$

E(Threaded = No) = $1$

**Weighted Average** = $\frac{6}{8} \times \text{E(Threaded = Yes)} + \frac{2}{8} \times \text{E(Threaded = No)}$

**Weighted Average** = M = $\frac{6}{8} \times 1 + \frac{2}{8} \times 1 = 1$

**Gain** = $\text{P}-\text{M}$

**Gain** = $1 - 1 = 0$

|      | Width<br /> |        |     |
| ---- | ----------- | ------ | --- |
|      | Slim        | Medium | Fat |
| Nail | 2           | 1      | 1   |
| Bolt | 0           | 2      | 2   |

E(Width = Slim) = $-P(Nail)\times \log_2{P(Nail)} -P(Bolt)\times \log_2{P(Bolt)}$

E(Width = Slim) = $-2/2\times \log_2{2/2} -0/2\times \log_2{0/2}$

E(Width = Slim) = 0

E(Width = Medium) = $-P(Nail)\times \log_2{P(Nail)} -P(Bolt)\times \log_2{P(Bolt)}$

E(Width = Medium) = $-1/3\times \log_2{1/3} -2/3\times \log_2{2/3}$

E(Width = Medium) = 0.92

E(Width = Fat) = $-P(Nail)\times \log_2{P(Nail)} -P(Bolt)\times \log_2{P(Bolt)}$

E(Width = Fat) = $-1/3\times \log_2{1/3} -2/3\times \log_2{2/3}$

E(Width = Fat) = 0.92

**Weighted Average** = $\frac{2}{8} \times \text{E(Width = Slim)} + \frac{3}{8} \times \text{E(Width = Medium)} + \frac{3}{8} \times \text{E(Width = Fat)}$

**Weighted Average** = M = $\frac{2}{8} \times 0 + \frac{3}{8} \times 0.92 + \frac{3}{8} \times 0.92 = 0.69$

**Gain** = $\text{P}-\text{M}$

**Gain** = $1 - 0.69 = 0.31$

The best feature to split the examples is “Width” since it has the highest gain using a multi-way split.

### (d)

Calculate the gain ratio for each feature and then report the best feature to split the examples using\
the gain ratio metric.

$$
Gain\space Ratio =  \frac{Gain_{Split}}{Split\space Info}
$$

$$
Split\space Info = - \sum_{i=1}^{k}\frac{n_i}{n}log_2{\frac{n_i}{n}}
$$

where $n_i$ is the no. of records in child node

|      | Pointed<br /> |     |
| ---- | :-----------: | :-: |
|      |      Yes      |  No |
| Nail |       1       |  3  |
| Bolt |       1       |  3  |

**Split Info** = $-\frac{2}{8} \times \log_2{\frac{2}{8}} -\frac{6}{8} \times \log_2{\frac{6}{8}}$​

**Split Info** = $0.81$​

**Gain Ratio** = $\frac{0}{0.81} = 0$

|      | Threaded |    |
| ---- | -------- | -- |
|      | Yes      | No |
| Nail | 3        | 1  |
| Bolt | 3        | 1  |

**Split Info** = $-\frac{6}{8} \times \log_2{\frac{6}{8}} -\frac{2}{8} \times \log_2{\frac{2}{8}}$​

**Split Info** = $0.81$​

**Gain Ratio** = $\frac{0}{0.81} = 0$

|      | Width<br /> |        |     |
| ---- | ----------- | ------ | --- |
|      | Slim        | Medium | Fat |
| Nail | 2           | 1      | 1   |
| Bolt | 0           | 2      | 2   |

**Split Info** = $-\frac{2}{8} \times \log_2{\frac{2}{8}} -\frac{3}{8} \times \log_2{\frac{3}{8}} -\frac{3}{8} \times \log_2{\frac{3}{8}}$​

**Split Info** = $1.56$​

**Gain Ratio** = $\frac{0.31}{1.56} = 0.199$

The best feature to split the examples is still “Width” since it has the highest gain ratio out of all.

## Question 3

[Sample Data](assets/DataMining%20Assignment1-20240210123817-i34ay9c.pdf#page=2)\
​![](assets/DataMining%20Assignment1-P2-20240210135433-20240210135433-qvgb2fu.png)​

### (a) P(A = t)

$= 0.03+0.12+0.17+0.18$

$= 0.5$

### (b) P(B = f)

$= 0.17+0.18+0.24+0.11$

$= 0.7$

### (c) P(C = t)

$= 0.03+0.17+0.03+0.24$

$= 0.47$

### (d) P(B = t | C = t)

$= \frac{0.03+0.03}{0.03+0.17+0.03+0.24}$

$= 0.13$

### (e) P(A = f | C = t)

$= \frac{0.03+0.24}{0.03+0.17+0.03+0.24}$

$= 0.57$

### (f) P(A = t | C = f)

$= \frac{0.12+0.18}{0.12+0.18+0.12+0.11}$

$= 0.58$

### (g) P(A = f, C = t)

$= 0.03+0.24$

$= 0.27$

### (h) P(A = t, C = t)

$= 0.03+0.17$

$= 0.2$

### (h) P(A = t, B = f)

$= 0.17+0.18$

$= 0.35$
