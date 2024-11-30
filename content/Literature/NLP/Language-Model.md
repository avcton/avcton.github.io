---
title: Language Model
date: 2023-10-15T19:22:13Z
lastmod: 2024-03-17T11:04:10Z
---

> A language model learns to predict the probability of a sequence of words.
>
> Task of predicting what word comes next given the previous word or context.

## Statistical Language Models

> These models use traditional statistical techniques like N-grams, Hidden Markov Models (HMM) and certain linguistic rules to learn the <span class="text-highlight">probability distribution</span> of words

Applications can be:

* Machine Translation

  * P(<span class="text-highlight">high</span> winds tonight) > P(<span class="text-highlight">large</span> winds tonight)
* Spell Correction

  * P(about fifteen <span class="text-highlight">minutes</span> from) > P(about fifteen <span class="text-highlight">minuets</span> from)
* Speech Recognition

  * P(<span class="text-highlight">I saw a</span> van) >> P(<span class="text-highlight">eyes awe of </span>an)
* Summarisation, Queries and much more

### Naive Bayes

### N-Grams

We need to compute and store various probabilities when dealing with statistical language models, also the unseen words and smoothing problems needs to be addressed

## Neural Language Models

> They use the architectures of various Neural Networks to model a predictive language model

### Logistic Regression

* [Basically, logistic regression is a feed-forward neural network without a hidden layer, where the output layer directly connects with the input layer. In other words, logistic regression is a single neuron that maps the input to the output layer.](https://www.oreilly.com/library/view/r-deep-learning/9781788478403/0c4ae722-74b3-422b-a67d-4b21e4aa1c96.xhtml#:~:text=Basically%2C%20logistic%20regression%20is%20a,input%20to%20the%20output%20layer.)

* It works with linear combinations and the sigmoid activation function but modern language problems are not linearly mappable thus It might not be able learn complex patterns within the linguistic context

### Standard Neural Language Model

* Words in embedded form are given as input

* The dot product of input embedding are then taken with the learned weights

* The final word is given as output

* Positional Information is not catered in this model, that is a word occurring before a particular word will not be tended, thus a sequence or context is not consumed

### Recurrent Neural Language Model

* RNNs leverage information from prior inputs to influence the current input and output

* The more the sequence size, RNN starts to forget the previous context thus making learning of long data sequences difficult, this is also known as Vanishing Gradient Problem
