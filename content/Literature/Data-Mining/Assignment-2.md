---
title: Assignment 2
date: 2024-03-22T21:21:36Z
lastmod: 2024-03-25T11:45:34Z
---

Reference Document: [HW2 Data Mining.pdf](assets/HW2%20Data%20Mining-20240322212158-mq63x83.pdf)

[Association Analysis: Basic Concepts and Algorithms](https://people.inf.elte.hu/kiss/14dwhdm/solution2.pdf)

[CS273 Midterm Exam - Introduction to Machine Learning](https://canvas.eee.uci.edu/files/1016911/download?download_frd=1)

[Frequent, Closed , Maximal Itemsets - YouTube](https://www.youtube.com/watch?v=nSpajfE5Ujc "Frequent, Closed , Maximal Itemsets - YouTube")

[FIM7: The Apriori Hash Tree for Fast Subset Computation - YouTube](https://www.youtube.com/watch?v=oiN3RPWvd4o "FIM7: The Apriori Hash Tree for Fast Subset Computation - YouTube")

[Hash Tree Method to Count Support in Apriori Algorithm | Insert | subset(Ck, t) function - YouTube](https://www.youtube.com/watch?v=WJE2CPUwyqM "Hash Tree Method to Count Support in Apriori Algorithm | Insert | subset(Ck, t) function - YouTube")

## Q1

1. **Write down the expression for the MSE on our training set**

   $$
   \text{MSE} = \frac{1}{m} \times \sum_{i = 0} (y_i - \hat{y}_i)^2
   $$

   $$
   \text{MSE} = \frac{1}{m} \times \sum_{i = 0} \left(y_i - a-\text{exp}(x_1 + b) \right)^2
   $$
2. **Write down the gradient of the MSE**

   $$
   \text{Gradient} = \Delta J = [\frac{\partial \text{MSE}}{\partial a} \space \frac{\partial \text{MSE}}{\partial b}]
   $$

   $$
   \frac{\partial \text{MSE}}{\partial a} = \frac{1}{m} \times \sum_{i = 0} 2 \left(y_i - a-\text{exp}(x_1 + b) \right) \cdot (0 - 1 - 0)
   $$

   $$
   \frac{\partial \text{MSE}}{\partial a} = -\frac{2}{m} \times \sum_{i = 0}  \left(y_i - a-\text{exp}(x_1 + b) \right)
   $$

   $$
   \frac{\partial \text{MSE}}{\partial b} = \frac{1}{m} \times \sum_{i = 0} 2 \left(y_i - a-\text{exp}(x_1 + b)\right) \cdot (0 - 0 - exp(x_1 + b) \cdot (0 + 1))
   $$

   $$
   \frac{\partial \text{MSE}}{\partial b} = - \frac{2}{m} \times \sum_{i = 0} \left(y_i - a-\text{exp}(x_1 + b)\right) \cdot exp(x_1 + b)
   $$
3. **Give pseudocode for a (batch) gradient descent function theta = train(X,Y), including all necessary elements for it to work**

   $\theta$ = \[a , b]\
   alpha = 0.01\
   stoping condition = 0.0001

   while (True) {\
   $\theta$ = $\theta_{old}$ - alpha $\times$ $\Delta J$\
   if abs($\theta_{old}$ - $\theta$) < stoping condition {\
   break\
   }\
   $\theta_{old}$ = $\theta$\
   }

## Q2

[Transaction Table](assets/HW2%20Data%20Mining-20240322212158-mq63x83.pdf#page=2)\
​![](assets/HW2%20Data%20Mining-P2-20240322212551-20240322212552-9751t62.png)​

**Compute the support for item-sets {e}, {b, d}, and {b, d, e} by treating each transaction ID as a market basket**

Support(${e}$) = $\frac{\text{Baskets with item e}}{\text{Total Baskets}}$ = $\frac{8}{10}$ = $0.8$

Support(${b, d}$) = $\frac{\text{Baskets with item b and d}}{\text{Total Baskets}}$ = $\frac{2}{10}$ = $0.2$

Support(${b, d, e}$) = $\frac{\text{Baskets with item b, d and e}}{\text{Total Baskets}}$ = $\frac{2}{10}$ = $0.2$

## Q3

[Hash Tree](assets/HW2%20Data%20Mining-20240322212158-mq63x83.pdf#page=2)\
​![](assets/HW2%20Data%20Mining-P2-20240322212627-20240322212627-0wyjq8n.png)​

**Given a transaction that contains items {1, 3, 4, 5, 8}, which of the hash tree leaf nodes will be visited when finding the candidates of the transaction?**

The leaf nodes that will be visited using the hash tree are **L1, L3, L5, L9, and L11**.

| Exploration Item | Leaf Nodes Stumbled Upon |
| ---------------- | ------------------------ |
| 1                | L1, L3, L5               |
| 3                | L9, L11                  |
| 4                | L3                       |
| 5                | -                        |
| 8                | -                        |

## Q4

**Given the lattice structure shown in the following figure and the transactions given in table label each node with the following letter(s):**

* M if the node is a maximal frequent item-set
* C if it is a closed frequent item-set
* N if it is frequent but neither maximal nor closed
* I if it is infrequent

Assume that the support threshold is equal to 30%.

[Transaction Table](assets/HW2%20Data%20Mining-20240322212158-mq63x83.pdf#page=3)\
​![](assets/HW2%20Data%20Mining-P3-20240322212912-20240322212912-d5wisrl.png)​

[Lattice Structure](assets/HW2%20Data%20Mining-20240322212158-mq63x83.pdf#page=3)\
​![](assets/HW2%20Data%20Mining-P3-20240322212851-20240322212852-k6ck56a.png)​

| 1 Item-set | Support |
| :--------: | :-----: |
|     {a}    |   5/10  |
|     {b}    |   7/10  |
|     {c}    |   5/10  |
|     {d}    |   9/10  |
|     {e}    |   6/10  |

| 2 Item-set | Support |
| :--------: | :-----: |
|   {a, b}   |   3/10  |
|   {a, d}   |   4/10  |
|   {a, e}   |   4/10  |
|   {b, c}   |   3/10  |
|   {b, d}   |   6/10  |
|   {b, e}   |   4/10  |
|   {c, d}   |   4/10  |
|   {d, e}   |   6/10  |

| 3 Item-set | Support |
| :--------: | :-----: |
|  {a, d, e} |   4/10  |
|  {b, d, e} |   3/10  |

| 4 Item-set | Support |
| :--------: | :-----: |
|      -     |    -    |

​![CleanShot 2024-03-23 at 14.59.41@2x](assets/CleanShot%202024-03-23%20at%2014.59.41@2x-20240323152838-cafvzhk.png)​
