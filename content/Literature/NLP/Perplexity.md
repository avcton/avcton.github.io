---
title: Perplexity
date: 2024-02-06T18:08:55Z
lastmod: 2024-06-15T19:26:22Z
---

> Perplexity is an intrinsic measure used to evaluate the performance of a language model in natural language processing (NLP). It quantifies how well a language model predicts a sample or a sequence of words.

Lower perplexity values indicate better performance, meaning the model provides more accurate predictions.

The perplexity of a language model is calculated based on the probability assigned by the model to a given sequence of words. It measures how surprised or uncertain the model is when predicting the next word in a sequence. A lower perplexity value indicates that the model is less surprised or uncertain, meaning it provides more confident and accurate predictions.

## Formula

$$
\text{Perplexity} = \left( \frac{1}{P(w_1, w_2, ..., w_N)} \right)^{\frac{1}{N}}
$$

Where:

* ( $P(w_1, w_2, ..., w_N)$ ) is the probability assigned by the language model to the sequence of words $( w_1, w_2, ..., w_N )$
* $( N )$ is the total number of words in the sequence.

### With Log Probabilities

The above formula when considering log probabilities to avoid under underflow changes into:

$$
\text{Perplexity}(W) = \exp\left(-\frac{1}{N}\sum_{i=1}^{N} \log P(w_i)\right)
$$

[Exponent of mean of log likelihood of all the words in an input sequence.](https://arc.net/l/quote/mkdiusox "Quote from “Perplexity of Language Models. Perplexity is an evaluation metric that… | by Priyanka | Medium”")

$exp()$ can be used to convert the log effect back into the probability range of $0$ - $1$

In practice, the perplexity of a language model is often calculated on a test dataset or validation dataset. The model is trained on a training dataset, and its performance is evaluated by measuring the perplexity on unseen data. Lower perplexity values indicate better performance and higher accuracy of the language model in predicting sequences of words.

### Perplexity of Entire Corpus

* If we want to know the perplexity of the whole corpus **𝐶** that contains **𝑚** sentences and **𝑁** words, we want to find out how well the model can predict all the sentences together.
* [How to find the perplexity of a corpus](https://stats.stackexchange.com/a/143638 "text mining - How to find the perplexity of a corpus - Cross Validated")
