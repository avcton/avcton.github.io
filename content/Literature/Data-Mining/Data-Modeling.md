---
title: Data Modeling
date: 2024-01-29T13:13:19Z
lastmod: 2024-06-20T09:02:37Z
---

## Supervised Algorithms

> Algorithms that do need actual or target variables in order to train them and perform a prediction

### Classification

> Supervised learning algorithms that predicts a target qualitative variable given the input variables

#### Base Classifiers

> Base classifiers are the individual learning algorithms or models that constitute the building blocks of an ensemble classifier.
>
> These are the basic models that are trained on the dataset to make predictions.

* Logistic Regression
* Decision Tree Induction
* Rule-based Methods
* Nearest Neighbour
* Naive Bayes and Bayesian Belief Networks
* Support Vector Machines
* Neural Networks
* Deep Neural Networks

#### Ensemble Classifiers

#### Evaluation

* ERR

  * Empirical Error Rate
  * Tells us how well the model is performing
  * $$
    \frac{1}{m} \sum_{i}y^{(i)} \ne \hat{y}(x^{(i)})
    $$
* Confusion Matrix

  * Core Metrics

    * True Positive
    * True Negative
    * False Postive
    * False Negative
  * Derived Metrics

    * Recall

      AKA Sensitivity, True Positive Rate (TPR)

      * How many positives out of actual positives are correctly predicted by the classifier
      * Insists that no positive class should be missed
      * $$
        \frac{TP}{TP + FN}
        $$
      * Used when you need to capture as much as points as positive

        * Example

          When diagnosing patients with heart disease, try to detect as much as you can to separate them from healthy patients
    * Precision

      AKA Positive Predictive Value

      * How many positives out of predicted positives are correctly predicted by the classifier
      * Implies that only consider that classes as positive that are predicted to be positive
      * $$
        \frac{TP}{TP + FP}
        $$
      * Used when declaring positive is critical to the problem space

        * Example

          When diagnosing patients with heart disease, only detect those patients who actually have the heart disease
    * Tradeoff between Precision and Recall

      * There’s a trade-off between precision and recall, i.e., one comes at the cost of another. Trying to increase precision lowers recall and vice-versa
      * With precision, we try to make sure that what we are classifying as the positive class is a positive class sample indeed, which in turn reduces recall. With recall, we are trying not to miss out on any positive class samples, which allows many false positives to creep in, thus reducing precision
      * Example

        * What if our classifier predicts everything as positive?
        * This way, Recall will be $1.0$ since every actual positive instance will be indeed predicted as positive by the classifier. But Precision here will be relatively low, since most of the classes predicted as positive would not be in fact positive
    * Specificity

      AKA True Negative Rate (TNR)
    * FPR

      * Fraction of negative examples predicted as a positive
      * $$
        \frac{FP}{FP+TN}
        $$
      * $$
        1 - \text{Specificity}
        $$
    * FNR

      * Fraction of positive examples predicted as a negative
      * $$
        \frac{FN}{FN + TP}
        $$
    * F1 Score

      * Combination through Harmonic Mean of Precision and Recall
    * ROC Curve

      * Receiver Operator Characteristic Curve
      * Visualised Curve between Sensitivity and Specificity
      * Can be used to determine the balance between Sensitivity and Specificity

#### Cost Functions

* 0-1 Loss Function
* Cross Entropy Loss (CE)

  * $$
    CE = -\sum_{x}^{classes}p(x)\log{q(x)}
    $$

    where $q(x)$ is the predicted probability of class $x$ while $p(x)$ is the actual value
  * [Why Cross Entropy at all?](https://www.youtube.com/watch?reload=9\&v=6ArSys5qHAU "YouTube")
  * Weighted Cross Entropy

### Regression

> Supervised learning algorithms that predicts a target continuous variable given the input variables

* Linear Regression

#### Cost Functions

* MSE

  * Mean Squared Error
* MAE

  * Mean Absolute Error

## Unsupervised Algorithms

> Algorithms that do not need any kind of actual or target variables in order to train them

## Errors

* Generalization Errors

  * Expected Errors
  * Example can occur due to poor sampling or data distribution
* Underfitting

  * Not training the model for enough epochs or iterations for it to learn the patterns in the data
  * Poor Training Data Performance
  * Poor Testing Data Performance
* Overfitting

  * Providing less information to the model given that variance is also less, will cause the model to perform poorly
  * Caused By

    * Presence of Noise
  * Good Training Data Performance
  * Poor Testing Data Performance
  * Solution

    * Increase Data Size in term of variance

## Techniques

### Learning Algorithms

* Gradient Descent

### K Cross Validation

Partition the data into equal `K`​ parts and iterate over those parts in such a way that one part is used to test and rest of the parts are used to train the data. In the end we take those partitions for training which gave us the minimum possible error

1. Split the Data into Train, Test and Validation Sets
2. Use Training Set to train the data
3. Use Validation Set to validate the learning done through Training Set
4. Use Test Sets to test the final result and note down error values
5. Repeat from Step 1, `K`​ times using different splits each time and choose those splits which give the least possible error

### Bias and Variance

* #### Bias

  * The amount that a model’s prediction differs from the target value
  * It is increased to make the model simpler and less complex
  * Higher Bias

    * Too much positive assumptions on the capability of data

      The relation between X and Y was actually too complex
    * Relates to Underfitting
  * Lower Bias

    * There exists too much variance in the model AKA too complex
  * Inductive Bias

    * The bias that is added initially to generalise the result / prediction
* #### Variance

  * Opposite of Bias
  * Models with higher variance pays a lot of attention to the training data, thus generalisation is reduced
* We need a sweet spot between Bias and Variance

### Ensemble Techniques

> Meta-algorithms that combine the predictions of multiple base classifiers to make a final prediction
>
> The goal is to create a more powerful and robust model by aggregating the outputs of individual models. By combining the strengths of different models or correcting their weaknesses, these classifiers often outperform individual models and are widely used.

Simple ensembles and stacked ensembles refer to different approaches to combining model predictions, while bagging and boosting are specific techniques used to create ensembles with improved performance through variance reduction and bias correction, respectively

* #### Approaches

  * ##### Simple

    * For Classifiers

      * Accept the majority vote from the predictions
    * For Regressors

      * Take Weighted Average among the predictions
    * Upweight the classifier that provides the most accurate predictions
  * ##### Stacked

    * Train a predictor of predictors

      Train a model which actually predicts that which model’s prediction from a set of models should be used given the data
    * Individual Predictors are treated as features
* #### Techniques

  * ##### Bagging

    Multiple instances of the same base classifier are <span class="text-highlight">trained on different subsets</span> of the training data.

    * Primary rule is that each classifier is given a different subset of data
    * The final prediction is often made by averaging or voting on the predictions of individual classifiers
    * Random Forest is a popular example of a bagging ensemble algorithm, which uses an ensemble of decision trees.
  * ##### Boosting

    Base classifiers are trained sequentially, and <span class="text-highlight">each subsequent model focuses on correcting the errors made by the previous ones</span>. The final prediction is a weighted combination of the individual classifier predictions

    * ###### Gradient Boosting

      * Boosting done through Regressors
      * Algortihm

        * Use a simple Regression Model
        * After the fitting of Previous model, the data is passed forward to the next model with weights of those data points increased which were not predicted correctly by the previous model
        * Overall prediction is given by the weighted sum of predictions
