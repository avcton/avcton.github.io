---
title: Keys
date: 2023-10-14T16:28:02Z
lastmod: 2024-01-09T17:47:15Z
---

> An attribute or group of attributes which uniquely identifies a relation or a table.

## Types of Keys

### Primary Key

* An attribute or set of attributes that uniquely identifies a record or a set of records in a relation.
* A relation can have only one primary key.
* Primary key cannot be null.
* Each value in the primary key has to be unique.
* Minimal Super Key

### Super Key

* Uniquely identifies each record in a table.
* Max super keys in a relation - $2^n - 1$

  * Where n is the number of attributes

### Candidate Key

* Super key whose proper subset is not a super key.
* It is a minimal super key.
* Attributes that can be used as primary key.

### Secondary Key

* Some records are required to be accessed by a field other than the primary key, in this case we use alternate key.

### Composite Key

* Consists of two or more fields
* Can be used as primary key

### Sort / Control Key

* Fields that dictate the sequence of the record.

| Sr # | Name   |
| ---- | ------ |
| 1    | Ahmad  |
| 2    | Ali    |
| 3    | Asghar |

### Foreign Key

* The primary key of one table is foreign key in another table.
* The relation with the foreign key is called the child table.
* The relation whose key is referred as foreign key in the child table is the parent table
* That key has to be the primary key in the parent table and refers to that table in the child table.

[Difference between Primary Keys and Secondary Keys](https://unstop.com/blog/difference-between-primary-key-and-candidate-key)
