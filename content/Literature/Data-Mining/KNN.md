---
title: KNN
date: 2024-02-12T13:30:07Z
lastmod: 2024-02-12T13:52:13Z
---

K Nearest Neighbour

* Classifier

  Voting is done, based on the majority classes of nodes within a region to determine the prediction class

  * Piecewise Linear Decision Boundary
  * ​`K`​ is the number of nodes / data points within a neighbour of a data point

    * These K nodes are used to classify the test data point are are similar to it
    * More the value of K, the more simple the model will be

      * It won’t be able to learn much
    * Less the value of K, the more complex the model will be

      * It will start to memorise examples
* Regressor

  Average or Weighted Average is taken of the continuous class labels of the nodes within the region to compute the prediction class

  * Can be applied on continuous values
  * There exists a <span class="text-highlight">Piecewise constant</span> that determines the range of each label
  * The label of majority class within a region / radius is assigned to the data point
