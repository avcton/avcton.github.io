---
title: N-Grams
date: 2023-10-15T19:11:46Z
lastmod: 2024-03-13T13:47:28Z
---

> An N-gram is a sequence of N tokens (or words).

Using these n-grams and the probabilities of the occurrences of certain words in certain sequences could improve the predictions of auto completion systems for example.

Similarly, we use can NLP and n-grams to train voice-based personal assistant bots. For example, using a 3-gram or trigram training model, a bot will be able to understand the difference between sentences such as “what’s the temperature?” and “set the temperature.”

[More on N-Grams and Probabilities](https://towardsdatascience.com/understanding-word-n-grams-and-n-gram-probability-in-natural-language-processing-9d9eef0fa058)

## Examples

**Consider a sentence: “I love reading blogs about data science on Towards Science”**

### 1-gram (Unigram)

“I”, “love”, “reading”, “blogs”, “about”, “data”, “science”, “on”, “Towards”, “Science”

### 2-gram (Bigram)

“I love”, “love reading”, or “Towards Science”

### 3-gram (Trigram)

“I love reading”, “about data science” or “on Towards Science”

## Smoothing

* [Basics of NLP](https://theflyingmantis.medium.com/basics-of-nlp-2-266748a40a3a "Basics of NLP — 2. I would recommend reading my previous… | by Abhinav Rai | Medium")

### Laplace Smoothing

* AKA <span class="text-highlight">Add One Smoothing</span>
* Method

  * Increment frequency of each word by 1
  * Normalise by adding vocabulary to frequency counts when dividing
* General Formula

  $$
  \frac{C(W|W_{i-1}) + 1}{C(W_{i-1})+V}
  $$
* Add K Smoothing

  * Extension to Add One Smoothing
  * Formula

    $$
    \frac{C(W|W_{i-1}) + K}{C(W_{i-1})+V\times K}
    $$

### Linear Interpolation

* Smooth according to the weights assigned to current and lower n-gram models
* Weights are learned through the held-out method

### Stupid Backoff

* Used in Web-Scale Models

  * For Retrieval Purposes
* Fall back to lower n-gram model probabilities when the current one doesn’t exist

### Good-Turing

* Relate unseen words to the probability of the words which are the rarest in our corpus
* Formula

  For Unknown Words:

  $$
  P* = \frac{N_1}{N}
  $$

  Where $N_1$ is lowest combined frequency count out of all classes

  For Known Words:

  $$
  C^* = \frac{(c+1)\times N_{c+1}}{N_c}
  $$

  $$
  P^* = \frac{C^*}{N}
  $$

  Where N = Total Class Instances, $N_i$ is the combined frequency count of the classes with $i$<sup>th</sup> frequency rank

## Cons

* No long term dependency
* Might limit the context when predicting next word
* Generating text might not be a good idea

  * n-gram models might overfit the data and start producing the same text as it sees in the training data and thus there won’t be any creativity
