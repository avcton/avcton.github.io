---
title: BERT
date: 2024-05-13T19:45:03Z
lastmod: 2024-05-26T10:50:52Z
---

> Bidirectional Encoder Representations from Transformers
>
> Based on transformers, a deep learning model in which every output element is connected to every input element, and the weightings between them are dynamically calculated based upon their connection.

* Pre-training of Deep Bidirectional Transformers for language understanding
* Performance depends on how big we want BERT to be:

  * **BERT Base**

    12 Encoders and 110M Parameters
  * **BERT Large**

    24 Encoders and 340M Parameters
* Major application in Feature Engineering and creating Dynamic / Contextual Embeddings

  **Dynamic Embeddings:**  Embeddings differ with respect to the context surrounding the word
* Trains model in both directions, forward and backwards. Thanks to Self Attention

  This allows BERT to truly capture the *Bi-directional* semantics of the language and understand it better, a level to which even LSTM and BiLSTM were not able to interpret
* [BERT explained: Training, Inference, BERT vs GPT/LLamA, Fine tuning, \[CLS\] token](https://www.youtube.com/watch?v=90mGPxR2GgY)

<iframe sandbox="allow-forms allow-presentation allow-same-origin allow-scripts allow-modals" src="https://www.youtube.com/embed/xI0HHN5XKDo" data-src="" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 747px; height: 417px;"></iframe>
