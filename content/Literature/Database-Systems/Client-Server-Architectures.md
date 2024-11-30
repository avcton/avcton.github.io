---
title: Client Server Architectures
date: 2023-10-14T16:28:50Z
lastmod: 2024-06-21T20:51:09Z
---

## Two Tier Client Server Architecture

* Clients directly connect to the server without any intermediate layer in-between.
* Both client and server, must install appropriate adapter modules for ODBC or JDBC
* A client may connect to several DBMSs

## Three Tier Client Server Architecture

* Mostly used in web applications
* Intermediate Layer in-between Client and Server
  * Called `Web Server` / `Application Server`
  * Stores the web connectivity software (adapter)
  * Business Logic used to access the corresponding data from the database server
