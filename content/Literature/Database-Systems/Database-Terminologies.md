---
title: Database Terminologies
date: 2023-10-14T16:25:47Z
lastmod: 2023-10-27T17:38:57Z
---

## Data

> Collection of facts and figures that can be recorded and have implicit meaning.

> Name, age, address of people.

## Database

> A database is a collection of related or connected data that has an implicit meaning.
> Collection of logically related data stored in an efficient and compact manner.

* It can be generated manually or can be computerised.

> Students record data in a university.

## DBMS

* Data Base Management System

> An application program or system that allows us to create, read, update or delete a database.

## Meta-Data

> The description and definition of a database stored by DBMS in a category or dictionary.

> The number of columns or fields in a relation or the total number of relations.

### Constructing a DB

> The process of storing data in a database

### Manipulating a DB

> The retrieval and updating of a database to reflect changes in the mini-world.

‍

## I/Os

> The cost of reading from the disk to memory
>
> or
>
> The cost of writing from the memory to disk

## Query

> Used to retrieve data from a database.

## Transaction

> Used to read or write data into the database.

## Database System

> The database and the DBMS together constitute a database system.

## Database Administrator

> Administrates and supervises the database

Responsible for following:

1. Authorizing access to the database.
2. Coordinating and monitoring its use.
3. Keeping a check on software and hardware resources.
4. Efficiency of operations.

## Database Designers

> Responsible for defining the structure in which the data will be presented and stored in the database.
> The must communicate with the end users to map out their requirements.

## Advantages of Database

* Centralised storage of data  *(No Redundancy)*
* Unauthorised access is denied
* Backup and recovery features
* Integrity constraints
* Multiple views / interfaces
* Flexibility to change data structures
* Persistent storage for program objects

## Data Model

> It is the logical structure of a database which tells us the operations which could be performed and the integrity constraints to be applied.
> Data Structure that a database uses to store data.

* Constructs are used to define the database structures

> Hierarchical Model, Network Model, Relational Model and many more.

### Data Model Operations

> These are the operations performed on the data model.

* Basic Model Operations
  * Insert, Delete, Update, Delete
* User-Defined Operations
  * Calculate CGPA, Calculate Annual Tax

### Data Model Categories

* Conceptual - High Level, semantics
  * General
  * Entity-based
* Physical - Low Level, internal
  * Details on how data is stored etc.

## Database Schema

> The description of a database. Includes structure, data types and the constraints.
> Called Intension

[Difference between Data Model and Database Schema](https://stackoverflow.com/a/27815052)

## Database State

> The actual data stored in a database at a particular moment.
> AKA instance, occurrence, snapshot
> Called Extension

## Three Schema Architecture

1. Internal Scheme - Internal Level
   1. Describes physical storage structure
   2. Uses a physical data model
2. Conceptual Schema - Conceptual Level
   1. Describes structure for a community of users
   2. Uses conceptual data model or implementation data model
3. External Schema - External Level
   1. Describes various user views
   2. Usually uses the same model as conceptual schema

* Mapping among schemas are needed to process requests.

***

## Data Independence

* ### Logical Data Independence

  * Capacity to change the conceptual schema without having to change the external schema.
* ### Physical Data Independence

  * Capacity to change the internal schema without having to change the conceptual schema.

> Change in internal schema when file structure is reorganised or new indexes are created to improve performance.

> When a schema at a lower level is changed only the mappings between this schema and higher level schemas are changed. The higher level schemas themselves are unchanged.
>
> Hence, the application programs need not to be changed.

## Database Languages

### DDL

* Data Definition Language
* Used by DBA and Database Designers to specify the conceptual schema.
* Can also be used to define external and internal schema in some DBMS.
* In some DBMS, external and internal schema are defined by SDL and VDL

### DML

* Data Manipulation Language
* Used to perform data update and retrieval operations
* Can be embedded into a general programming language.
* ### Types

  * High Level / Non - Procedural Language

    * Specify what data to retrieve
    * Example would be `SQL`​
  * Low Level / Non - Procedural Language

    * Specify how to retrieve data

### SDL

* Storage Definition Language
* Used to define the internal schema

### VDL

* View Definition Language
* Used to define the external schema

## Database Adapters

> A database connector is a software that connects an application to any database. A database adapter is an implementation of a database connector. The connector is more at the conceptual level, while the adapter is at the implementation level, though they refer to the same thing

* Open Database Connectivity (ODBC)

* Java Database Connectivity (JDBC)

## DBMS Architectures

* ### Centralised Architecture

  * Everything resides at a single system such as
    * DBMS, Hardware, Application Program and User Interface
