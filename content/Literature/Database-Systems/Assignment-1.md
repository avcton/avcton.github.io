---
title: Assignment 1
date: 2023-10-14T16:24:46Z
lastmod: 2024-06-21T20:54:31Z
---

## Q # 1

Publisher (PublisherID, PublisherName, Address)
Author (AuthorID, AuthorName, Gender, BirthDate, Country)
Book (ISBN, AuthorID, PublisherID, PublishDate, BookTitle)

### Table Creation

```sql
CREATE TABLE Publisher(
	PublisherID int,
	PublisherName varchar(20),
	Address varchar(max),
	CONSTRAINT PK_Publisher PRIMARY KEY(PublisherID),
);

CREATE TABLE Author(
	AuthorID int,
	AuthorName varchar(20),
	Gender varchar(10),
	BirthDate Date,
	Country varchar(20),
	CONSTRAINT PK_Author PRIMARY KEY(AuthorID),
);

CREATE TABLE Book(
	ISBN numeric(13),
	AuthorID int,
	PublisherID int,
	PublishDate Date,
	BookTitle varchar(max),
	CONSTRAINT PK_Book PRIMARY KEY(ISBN),
	CONSTRAINT FK_BookAuthor FOREIGN KEY(AuthorID)
	REFERENCES Author(AuthorID),
	CONSTRAINT FK_BookPublisher FOREIGN KEY(PublisherID)
	REFERENCES Publisher(PublisherID),
);
```

### Table Insertion

```sql
INSERT INTO Publisher
VALUES
	(01, 'Classy Books', '80 Strand, London WC2R 0RL, United Kingdom'),
	(02, 'Rocky Books', '456 Elm Ave, Narnia'),
	(03, 'Awesome Books', 'Some Middle Earth'),
	(04, 'Standy Books', 'Pine Street'),
	(05, 'Catchy Books', 'Ketchup Street, Burger Land, Shami');

INSERT INTO Author
VALUES
	(01, 'J.K. Rowling', 'Female', '1965-07-31', 'UK'),
	(02, 'Gary Keller', 'Male', '1957-03-23', 'US'),
	(03, 'Noob Writer', 'Male', '2003-08-12', 'PAK'),
	(04, 'Cool Writer', 'Male', '2001-03-24', 'COOL'),
	(05, 'Invalid Writer', 'Male', '1998-03-23', 'NZ');

INSERT INTO Book
Values
	(9780747532743, 01, 01, '1997-06-26', 'Harry Potter'),
	(9780316084127, 05, 01, '2007-03-27', 'City of Noobs'),
	(9780439023528, 03, 02, '2008-09-14', 'City of Freaks'),
	(9780525478812, 04, 04, '2012-01-10', 'The Fault in Our Brains'),
	(9781416949176, 02, 02, '2007-08-02', 'The Light We Seek');
```

## Q # 2

### Constraints

- Account type will either be ‘Current’ or ‘Savings’.
- Customer will have one account only, thus `CustomerID` is unique.

## Q # 3

Relation: **R**

| `A` | `B` | `C` | `D` |
| --- | --- | --- | --- |
| a4  | b1  | c2  | d1  |
| a2  | b2  | c1  | d1  |
| a2  | b2  | c4  | d2  |
| a1  | b4  | c3  | d1  |

### Super Keys

- {A, B, C, D}
- {A, C, D}
- {A, B, D}
- {B, C, D}
- {A, B, C}
- {A, D}
- {B, D}
- {A, C}
- {B, C}
- {C, D}
- {C}

### Minimal Super Keys / Candidate Keys

> [!criteria]
> Super Key whose proper subsets do not belong to another super key.

- {C}
- {B, D}
- {A, D}

## Q # 4

### 1. INSERT Operation

**(a)**

```sql
INSERT INTO Product VALUES (null, 'Chicken Nuggets', 120, 100);
```

> [!fail]
> Entity Integrity Violation
> **Reason** : The Primary Key `ProductID` cannot be specified as null. A Primary Key has to be non null and unique.

**(b)**

```sql
INSERT INTO Production VALUES (1,'1-2001', 300, '01-Feb-2021', '01-Feb-2022');
```

> [!success] > **Changes** :
>
> - This new record will be inserted into the relation.

**(c)**

```sql
INSERT INTO Production VALUES (1, null, 300, '01-Feb-2021', '01-Feb-2022');
```

> [!fail]
> Entity Integrity Violation
> **Reason** : A Primary key by its property cannot be null even if it is composite.

**(d)**

```sql
INSERT INTO Customer VALUES (1,'Packages', 'DHA', '042-31234567');
```

> [!fail]
> Entity Integrity Violation
> **Reason** : The Primary key has to be unique but the given value is already present.

**(e)**

```sql
INSERT INTO Order VALUES (5, 10, 1, '09-Feb-2021');
```

> [!failure]
> Referential Integrity Violation
> **Reason** : The provided `CustomerID` does not exist in the parent table of this foreign key field.

### 2. DELETE Operation with CASCADE

**(a)**

```sql
DELETE FROM Product WHERE ProductID=2;
```

> [!success] > **Changes** :
>
> - Second record will be deleted from the `Product` relation.
> - Last record in `Production` relation will also be deleted because of CASCADE option.

**(b)**

```sql
DELETE FROM Customer WHERE CustomerID=1;
```

> [!success] > **Changes** :
>
> - First record will be deleted from the `Customer` relation.
> - First record in `Order` relation will also be deleted because of CASCADE option.

**(c)**

```sql
DELETE FROM Production WHERE BatchID='1-1002';
```

> [!success] > **Changes** :
>
> - Second and third record will be deleted from the `Production` relation.

**(d)**

```sql
DELETE FROM Order WHERE CustomerID=1 OR ProductID=1;
```

> [!success] > **Changes** :
>
> - All the records in the table will be deleted as they satisfy the requirements.

**(e)**

```sql
DELETE FROM Order WHERE OrderNo=4;
```

> [!fail]
> No Changes will be made to the relation as no record will satisfy the criteria.

### 3. DELETE Operation with SET NULL

**(a)**

```sql
DELETE FROM Product WHERE ProductID=2;
```

> [!fail]
> Referential Integrity Violation
> **Reason** : The `ProductID` attribute is a foreign key and a composite primary key in `Production` table. As by entity integrity constraint, a primary key cannot be null thus using `SET NULL` option we will have an error and the operation won't be executed.

**(b)**

```sql
DELETE FROM Customer WHERE CustomerID=1;
```

> [!success] > **Changes** :
>
> - The first record of `Customer` relation will be deleted
> - The `CustomerID` in `Order` relation with value `1` will be set null.

**(c)**

```sql
DELETE FROM Production WHERE BatchID='1-1002';
```

> [!success] > **Changes** :
>
> - The second and third record will be deleted from the relation.

**(d)**

```sql
DELETE FROM Order WHERE CustomerID=1 OR ProductID=1;
```

> [!success] > **Changes** :
>
> - All the records from the `Order` relation will be discarded.

**(e)**

```sql
DELETE FROM Order WHERE OrderNo=4;
```

> [!failure]
> No Changes because the identifier is not present in the relation.

### 4. Delete Operation - with NO ACTION

**(a)**

```sql
DELETE FROM Product WHERE ProductID=2;
```

> [!failure]
> Referential Integrity Violation
> **Reason** : As `ProductID` is being used as Foreign Key in `Production` relation, we will not be allowed to delete the entry in the Parent table until there are no references to that record in any of the child tables.

**(b)**

```sql
DELETE FROM Customer WHERE CustomerID=1;
```

> [!failure]
> Referential Integrity Violation
> **Reason** : `CustomerID` is being used as a Foreign Key in `Order` relation, thus we will not be allowed to delete that.

**(c)**

```sql
DELETE FROM Production WHERE BatchID='1-1002';
```

> [!success] > **Changes** :
>
> - The second and third record will be deleted from the `Production` relation.

**(d)**

> [!success] > **Changes** :
>
> - All the entries from the `Order` relation will be deleted.

**(e)**

```sql
DELETE FROM Order WHERE OrderNo=4;
```

> [!success]
> No Changes will be made because the record is not present in the relation.

### 5. UPDATE Operation - with CASCADE

**(a)**

```sql
UPDATE Order SET CustomerID=10 WHERE CustomerId=2;
```

> [!failure]
> Referential Integrity Violation
> `CustomerID` is being used as Foreign Key referencing the `Customer` relation. We will not be allowed to insert or update values that are not present in the referencing attribute.

**(b)**

```sql
UPDATE Product SET ProductID=21 WHERE ProductID=3;
```

> [!success] > **Changes** :
>
> - The specified `ProductID` in `Product` relation will be updated.
> - The foreign keys referring to this `ProductID` such as in `Production` and `Order` table will be updated with this new value if they happen refer it.

**(c)**

```sql
UPDATE Order SET OrderDate= null WHERE ProductID=1;
```

> [!success] > **Change** :
>
> - The `OrderDate` in second and third records will be updated to `null`.

**(d)**

```sql
UPDATE Production SET CustomerID=1 WHERE BatchID='1-1002';
```

> [!failure]
> SQL Error
> **Reason** : The `Production` relation does not have an attribute `CustomerID`.

**(e)**

```sql
UPDATE Production SET BatchNo= null WHERE UnitsProduced=6000;
```

> [!failure]
> Entity Integrity Violation
> **Reason** : `BatchNo` is part of a composite primary key in the `Production` relation. Therefore, It's value cannot be specified as `null`.

### 6. UPDATE Operation - with SET NULL

**(a)**

```sql
UPDATE Order SET CustomerID=10 WHERE CustomerId=2;
```

> [!failure]
> Referential Integrity Violation
> The `CustomerID` in `Customer` table does not have value `10` in any of the record, so the query will not be executed.

**(b)**

```sql
UPDATE Product SET ProductID=21 WHERE ProductID=3;
```

> [!failure]
> Entity Integrity Violation
> The `ProductID` as being used as Foreign Key in `Production` table, when updated will cause the `Production` table reference to be set as `null` but this will not be allowed as it is a part of a composite primary key.

**(c)**

```sql
UPDATE Order SET OrderDate= null WHERE ProductID=1;
```

> [!success] > **Changes** :
> The second and third record of `Order` table will be set `OrderDate` as `null`.

**(d)**

```sql
UPDATE Production SET CustomerID=1 WHERE BatchID='1-1002';
```

> [!failure]
> The given attribute `CustomerID` is not present in the `Production` relation.

**(e)**

```sql
UPDATE Production SET BatchNo= null WHERE UnitsProduced=6000;
```

> [!failure]
> Entity Integrity Violation
> As `BatchNo` is part of a composite primary key in the `Production` table, it cannot be updated to `null`.

### 7. UPDATE Operation - with NO ACTION

**(a)**

```sql
UPDATE Order SET CustomerID=10 WHERE CustomerId=2;
```

> [!failure]
> Referential Integrity Violation
> The value `10` is not present in the referencing column of Foreign Key attribute.

**(b)**

```sql
UPDATE Product SET ProductID=21 WHERE ProductID=3;
```

> [!failure]
> The value will not allowed to be updated because of `NO ACTION` option since this value is being referred by another relation.

**(c)**

```sql
UPDATE Order SET OrderDate= null WHERE ProductID=1;
```

> [!success] > **Changes** :
>
> - The second and third rows will have `OrderDate` set to `null`.

**(d)**

```sql
UPDATE Production SET CustomerID=1 WHERE BatchID=’1-1002’;
```

> [!failure]
> The provided attribute `CustomerID` is not present in the `Production` table.

**(e)**

```sql
UPDATE Production SET BatchNo= null WHERE UnitsProduced=6000;
```

> [!failure]
> Entity Integrity Violation
> `BatchNo` is part of a composite primary key, thus it cannot be put as `null`.

## Q # 5

### SQL Date Formats

| `Object Name` | `Format`            |
| ------------- | ------------------- |
| DATE          | YYYY-MM-DD          |
| YEAR          | YYYY / YY           |
| DATETIME      | YYYY-MM-DD HH:MI:SS |
| TIMESTAMP     | YYYY-MM-DD HH:MI:SS |

#### For SQL Server

In Addition to above, we also have these:

| `Object Name` | `Format`            |
| ------------- | ------------------- |
| time          | HH:MM:SS\[.nnnnnn]  |
| SMALLDATETIME | YYYY-MM-DD HH:MI:SS |

## Q # 6

### Composite Primary Key

> A Composite Primary Key is created by combining two or more attributes in such a way that when taken together, these attributes uniquely identify each record of the relation. They serve as a primary key and may or may not be unique when taken individually.

> [!example]
> Consider the following relation :

| `Name` | `Eye Color` | `Age` | `Cholesterol` |
| ------ | ----------- | ----- | ------------- |
| Ahmad  | Brown       | 19    | 144           |
| Saira  | Blue        | 19    | 184           |
| Amjad  | Black       | 20    | 144           |

The `Age` and `Cholesterol` attributes serve as a composite primary key.

### Composite Foreign Key

> A Composite Foreign Key can be created in a situation when we have a composite primary key in the parent table. In this case, we would need to address both of the primary key attributes as foreign key in the child table.

> [!example]
> Consider the following relations :

**Relation 1**

| `Account Type` | `Account Num` | `Account Description` |
| -------------- | ------------- | --------------------- |
| Savings        | 324325435435  | A Saving Account      |
| Salary         | 243242342342  | A Salary Account      |

**Relation 2**

| `Customer Name` | `Account Type` | `Account Num` |
| --------------- | -------------- | ------------- |
| Ahmad           | Salary         | 243242342342  |

`Account Type` and `Account Num` serve as composite primary key in `Relation 1` and thus composite foreign key in `Relation 2`.
