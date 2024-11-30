---
title: Machine Translation
date: 2024-04-15T14:52:16Z
lastmod: 2024-04-17T15:14:51Z
---

> Cross translation of human languages
>
> Example could be translating English to French or Vice Versa

## Statistical Machine Translation (SMT)

Machine translation using hand picked mappings

* Used throughout in 1990s - 2010s
* Pre-mapping of words and sentences are done by humans

  These mappings are used to translate a given word or sentence in one language to another
* The Rosetta Stone was such a medium for translation

  * The **Rosetta Stone** is a large stone tablet (ca. 196 BCE) that was discovered in Egypt in 1799.

    It is important because **it allowed researchers to translate ancient Egyptian hieroglyphic writing for the first time**.
* Challenges

  * Multiple mappings exists for different words such as:

    * One to One
    * One to Many
    * Many to One
    * Many to Many
  * Lots of Feature Engineering needed to be done in-order to produce the mappings

## Neural Machine Translation (NMT)

Machine Translation using Neural Networks

* The Neural Network architecture is called sequence-to-sequence (seq2seq)
* The Encoder is given the source language and Decoder generates the translated or required language
