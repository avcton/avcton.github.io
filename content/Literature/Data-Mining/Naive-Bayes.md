---
title: Naive Bayes
date: 2023-12-02T14:26:19Z
lastmod: 2024-06-20T08:59:26Z
---

> [Naïve Bayes is a Bayes classifier which uses Bayes’ theorem with two simplifying assumptions: the independence between the attributes and position independence of attributes.](assets/Naive%20Bayes%20and%20N-Grams-20231202142909-mjkl0y0.pdf#page=10)

[Using Naive Bayes and N-Gram for Document Classification](assets/Naive%20Bayes%20and%20N-Grams-20231202142909-mjkl0y0.pdf)

## Bayesian Rule

$$
p(Y|X) = \frac{p(X|Y) \times p(Y)}{p(X)}
$$

## Assumption

Attribute variables are conditionally independent from each other given / provided the class / target variable

## Language Model

Naive Bayes is also used as a popular Language Model

The parameters are found during the training phase

### Algorithm

1. Calculate Prior from the documents given
2. Create a unified Vocabulary
3. Create a <span class="text-highlight">Mega Document</span> for each class which concatenates the documents / sentences of each instance of the class

### Smoothing

Apply Smoothing Techniques to deal with zero probabilities

### Unknown

Unknown words can simply be removed since they don’t contribute much to the performance

### Stop Words

Removing stop words don’t improve and contribute that much to the performance but still its a common practice to remove the top 10 most frequent words considering as stop words since they don’t really help in classification related tasks

### Example

​![CleanShot 2024-02-14 at 15.48.18@2x](assets/CleanShot%202024-02-14%20at%2015.48.18@2x-20240214154838-wgwmyee.png)​

## Pros

* Robust to Isolated Noise Points
* Robust to irrelevant attributes
* Can handle missing values by ignoring the instance (such as $P(X_i|C)$) during probability calculation

## Shortcomings

* If used as a Language Model:

  * Context is lost since we assume conditional independence
  * Positioning of words are neglected and thus semantics are lost

Redundant and correlated attributes will violate the class conditional assumption of Naive Bayes. We use other techniques such as Bayesian Belief Networks to overcome this.
