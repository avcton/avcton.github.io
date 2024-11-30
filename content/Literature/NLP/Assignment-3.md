---
title: Assignment 3
date: 2024-03-29T21:00:10Z
lastmod: 2024-03-30T12:52:00Z
---

**Reference Document:**  [Written Assignment NLP DS.pdf](assets/Written%20Assignment%20NLP%20DS-20240329210025-n0pxoic.pdf)

## Task 1

* Architecture

  * Input = 1 x 8
  * Hidden = 8 x 4
  * Output = 4 x 8

- ### One Hot Encoded Vectors

  * the

    * \[1 0 0 0 0 0 0 0]
  * students

    * \[0 1 0 0 0 0 0 0]
  * opened

    * \[0 0 1 0 0 0 0 0]
  * their

    * \[0 0 0 1 0 0 0 0]
  * laptops

    * \[0 0 0 0 1 0 0 0]
  * books

    * \[0 0 0 0 0 1 0 0]
  * exams

    * \[0 0 0 0 0 0 1 0]
  * minds

    * \[0 0 0 0 0 0 0 1]

1. ### Embeddings for Target Words

   * the

     * \[3 2 3 4]
   * students

     * \[0 3 1 4]
   * opened

     * \[3 2 0 2]
   * their

     * \[1 3 0 2]
   * laptops

     * \[2 2 0 0]
   * books

     * \[4 2 4 2]
   * exams

     * \[2 2 4 3]
   * minds

     * \[4 2 4 2]
2. ### Embeddings for Context Words

   * the

     * \[1 0 1 4]
   * students

     * \[1 1 1 1]
   * opened

     * \[2 0 2 2]
   * their

     * \[0 1 2 1]
   * laptops

     * \[1 4 0 1]
   * books

     * \[4 0 4 4]
   * exams

     * \[0 1 3 3]
   * minds

     * \[1 2 3 0]
3. ### Average Embeddings

   * the

     * \[2 1 2 4]
   * students

     * \[0.5 2 1 2.5]
   * opened

     * \[2.5 1 1 2]
   * their

     * \[0.5 2 1 1.5]
   * laptops

     * \[1.5 3 0 0.5]
   * books

     * \[4 1 4 3]
   * exams

     * \[1 1.5 3.5 3]
   * minds

     * \[2.5 2.5 3.5 1]

‍

## Task 2

* ### Target Embeddings

  * Time Step =  **“the”**

    * $$
      f = W_f \cdot I_t + b_f
      $$

      $$
      \begin{bmatrix}
          2 & 2 & 2 & 6 & 0 & 6 & 4 & 6 \\
          4 & 1 & 1 & 0 & 2 & 0 & 3 & 5 \\
          1 & 2 & 1 & 3 & 4 & 5 & 1 & 6 \\
          2 & 2 & 2 & 4 & 1 & 1 & 5 & 2 \\
          \end{bmatrix} \cdot

      \begin{bmatrix}
          0 \\
          0 \\
          0 \\
          0 \\
          3 \\
          2 \\
          3 \\
          4 \\
          \end{bmatrix} +

      \begin{bmatrix}
          0 \\
          2 \\
          1 \\
          0 \\
          \end{bmatrix}
      $$

      $$
      f = \text{sigmoid} \left(\begin{bmatrix}
          48 \\
          37 \\
          50 \\
          28 \\
          \end{bmatrix} \right) = \begin{bmatrix}
          1 \\
          1 \\
          1 \\
          1 \\
          \end{bmatrix}
      $$
    * $$
      i = W_i \cdot I_t + b_i
      $$

      $$
      \begin{bmatrix}
          6 & 5 & 5 & 0 & 1 & 5 & 0 & 1 \\
          3 & 2 & 2 & 6 & 2 & 1 & 5 & 6 \\
          3 & 2 & 1 & 3 & 0 & 2 & 3 & 2 \\
          4 & 4 & 1 & 5 & 4 & 1 & 4 & 0 \\
          \end{bmatrix} \cdot

      \begin{bmatrix}
          0 \\
          0 \\
          0 \\
          0 \\
          3 \\
          2 \\
          3 \\
          4 \\
          \end{bmatrix} +

      \begin{bmatrix}
          0 \\
          0 \\
          1 \\
          6 \\
          \end{bmatrix}
      $$

      $$
      i = \text{sigmoid} \left(\begin{bmatrix}
          17 \\
          47 \\
          22 \\
          32 \\
          \end{bmatrix} \right) = \begin{bmatrix}
          1 \\
          1 \\
          1 \\
          1 \\
          \end{bmatrix}
      $$
    * $$
      \tilde{C} = W_c \cdot I_t + b_c
      $$

      $$
      \tilde{C} = \text{tanh} \left(\begin{bmatrix}
          35 \\
          41 \\
          35 \\
          53 \\
          \end{bmatrix} \right) = \begin{bmatrix}
          1 \\
          1 \\
          1 \\
          1 \\
          \end{bmatrix}
      $$
    * $$
      C = f * C + i * \tilde{C}
      $$

      $$
      C = \begin{bmatrix}
          0 \\
          0 \\
          0 \\
          0 \\
          \end{bmatrix} +  \begin{bmatrix}
          1 \\
          1 \\
          1 \\
          1 \\
          \end{bmatrix} = \begin{bmatrix}
          1 \\
          1 \\
          1 \\
          1 \\
          \end{bmatrix}
      $$
    * $$
      o = W_o \cdot I_t + b_o
      $$

      $$
      \begin{bmatrix}
          5 & 4 & 3 & 5 & 1 & 3 & 2 & 4 \\
          4 & 2 & 2 & 1 & 5 & 0 & 1 & 2 \\
          3 & 0 & 4 & 0 & 2 & 1 & 1 & 5 \\
          4 & 1 & 5 & 3 & 5 & 3 & 3 & 6 \\
          \end{bmatrix} \cdot

      \begin{bmatrix}
          6 \\
          4 \\
          0 \\
          8 \\
          \end{bmatrix}
      $$

      $$
      o = \text{sigmoid} \left(\begin{bmatrix}
          37 \\
          30 \\
          31 \\
          62 \\
          \end{bmatrix} \right) = \begin{bmatrix}
          1 \\
          1 \\
          1 \\
          1 \\
          \end{bmatrix}
      $$
    * $$
      h_t = o * tanh(C)
      $$

      $$
      h_t = \begin{bmatrix}
          1 \\
          1 \\
          1 \\
          1 \\
          \end{bmatrix} * tanh {\left( \begin{bmatrix}
          1 \\
          1 \\
          1 \\
          1 \\
          \end{bmatrix} \right)}
      $$

      $$
      h_t = \begin{bmatrix}
          1 \\
          1 \\
          1 \\
          1 \\
          \end{bmatrix} * \left( \begin{bmatrix}
          0.76 \\
          0.76 \\
          0.76 \\
          0.76 \\
          \end{bmatrix} \right)
      $$

      $$
      h_t = \begin{bmatrix}
          0.76 \\
          0.76 \\
          0.76 \\
          0.76 \\
          \end{bmatrix}
      $$
  * Time Step =  **“students”**

    * $$
      f = W_f \cdot I_t + b_f
      $$

      $$
      \begin{bmatrix}
          2 & 2 & 2 & 6 & 0 & 6 & 4 & 6 \\
          4 & 1 & 1 & 0 & 2 & 0 & 3 & 5 \\
          1 & 2 & 1 & 3 & 4 & 5 & 1 & 6 \\
          2 & 2 & 2 & 4 & 1 & 1 & 5 & 2 \\
          \end{bmatrix} \cdot

      \begin{bmatrix}
          0.76 \\
          0.76 \\
          0.76 \\
          0.76 \\
          0 \\
          3 \\
          1 \\
          4 \\
          \end{bmatrix} +

      \begin{bmatrix}
          0 \\
          2 \\
          1 \\
          0 \\
          \end{bmatrix}
      $$

      $$
      f = \text{sigmoid} \left(\begin{bmatrix}
          55.12 \\
          29.56 \\
          46.32 \\
          23.6 \\
          \end{bmatrix} \right) = \begin{bmatrix}
          1 \\
          1 \\
          1 \\
          1 \\
          \end{bmatrix}
      $$
