---
title: Byte Pair Encoding
date: 2024-02-06T16:04:26Z
lastmod: 2024-02-17T21:30:42Z
---

> Byte Pair Encoding (BPE) is a data compression technique and also a subword tokenisation algorithm used primarily in natural language processing (NLP) and machine learning.
>
> It works by iteratively merging the most frequent pair of consecutive bytes (or characters) to create a new byte (or character).

* [Basics of Tokenisation and Stemming + Looking into SubWord Tokenisation](https://cs.usm.maine.edu/~behrooz.mansouri/courses/Slides_NLP_23/Natural%20Language%20Processing%20--%20Session%204%20-%20Tokenization%20and%20Stemming.pdf)

## Algorithm

Let the initial vocabulary be the set of all individual characters = {A, B, C, D,…, a, b, c, d…}

Repeat:

1. Choose the two symbols that are most frequently adjacent in the training corpus (say ‘A’, ‘B’)
2. Add a new merged symbol ‘AB’ to the vocabulary
3. Replace every adjacent ‘A’ ‘B’ in the corpus with ‘AB’
4. Repeat Until Step 1 until `k`​ merges have been done

## Pros

BPE has several advantages:

* **Variable-Length Encoding**: BPE allows for variable-length encoding, which means that tokens can represent different lengths of text, capturing both common sequences and rare words efficiently.
* **Data Compression**: By merging frequent pairs, BPE can compress the vocabulary size, which is especially useful in scenarios where memory or storage space is limited.
* **Subword Representations**: BPE generates subword units, enabling the model to handle out-of-vocabulary words and improving generalisation.

BPE has been widely adopted in various NLP tasks and is used in popular models like GPT (Generative Pre-trained Transformer) and BERT (Bidirectional Encoder Representations from Transformers).

## Example

<iframe sandbox="allow-forms allow-presentation allow-same-origin allow-scripts allow-modals" src="https://www.youtube.com/embed/i0D5GbudU6c" data-src="" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 744px; height: 435px;"></iframe>
