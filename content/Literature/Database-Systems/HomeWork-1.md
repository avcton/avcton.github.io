---
title: HomeWork 1
date: 2023-10-14T16:28:41Z
lastmod: 2024-06-21T20:53:45Z
---

## Q # 1

```sql
CREATE TABLE DEPARTMENT(
	ID numeric(7),
	NAME varchar(25),
);
```

## Q # 2

```sql
INSERT INTO DEPARTMENT
SELECT ID, NAME
FROM DEPT;
```

## Q # 3

```sql
CREATE TABLE EMPLOYEE(
	ID numeric(7),
	LAST_NAME varchar(25),
	FIRST_NAME varchar(25),
	DEPT_ID numeric(7),
);
```

## Q # 4

```sql
CREATE TABLE MY_EMPLOYEE(
	ID numeric(4) NOT NULL,
	LAST_NAME varchar(25),
	FIRST_NAME varchar(25),
	USERID varchar(8),
	SALARY numeric(9, 2)
);

-- Describe
DESCRIBE MY_EMPLOYEE

-- For SQL Server
EXEC sp_help 'dbo.MY_EMPLOYEE'
```

## Q # 5

```sql
INSERT INTO MY_EMPLOYEE
VALUES(1, 'Patel', 'Ralph', 'rpatel', 795);
```

## Q # 6

```sql
INSERT INTO MY_EMPLOYEE(ID, LAST_NAME, FIRST_NAME, USERID, SALARY)
VALUES(2, 'Dancs', 'Betty', 'bdancs', 860);
```

## Q # 7

```sql
SELECT * FROM MY_EMPLOYEE;
```

## Q # 8

```sql
UPDATE MY_EMPLOYEE
SET LAST_NAME = 'Hammad'
WHERE LAST_NAME = 'Dancs';
```

## Q # 9

```sql
UPDATE MY_EMPLOYEE
SET SALARY = 3000
WHERE FIRST_NAME LIKE '%t%' OR LAST_NAME LIKE '%t%' AND SALARY > 500 AND SALARY < 2000;
```

## Q # 10

```sql
DELETE FROM MY_EMPLOYEE
WHERE SALARY > 5000;
```

## Q # 11

```sql
CREATE TABLE MYDEPT1_L215695(
	Department_ID numeric(3) PRIMARY KEY,
	NAME varchar(25),
	Location varchar(15),
);

CREATE TABLE MYEMP1_L215695(
	ID numeric(7),
	NAME varchar(25),
	DEPT_ID numeric(3),
	FOREIGN KEY(DEPT_ID) REFERENCES MYDEPT1_L215695(Department_ID),
);
```

## Q # 12

```sql
ALTER TABLE MYEMP1_L215695
ALTER COLUMN NAME varchar(max);

SELECT * FROM MYEMP1_L215695;
```

## Q # 13

```sql
ALTER TABLE MYEMP1_L215695
ALTER COLUMN ID numeric(12);

SELECT * FROM MYEMP1_L215695;
```

## Q # 14

```sql
INSERT INTO MYDEPT1_L215695
SELECT Department_ID, NAME, Location
FROM DEPT;
```

## Q # 15

```sql
INSERT INTO MYEMP1_L215695
VALUES('Your ID', 'Your Name', 100);

-- ERROR: Will Not Insert
-- Reason 1: ID has a numeric datatype but we are inserting a string
-- Reason 2: 100 does not exist in the Parent Table of this Foreign Key Attribute
```

## Q # 16

```sql
-- Rename using stored procedure in SQL Server
EXEC sp_rename 'MYEMP1_L215695', 'EMP1_L215695';
EXEC sp_rename 'MYDEPT1_L215695', 'DEPT1_L215695';
```

## Q # 17

```sql
ALTER TABLE EMP1_L215695
DROP COLUMN NAME;

-- Describe
DESCRIBE EMP1_L215695

-- For SQL Server
EXEC sp_help 'dbo.EMP1_L215695'
```

## Q # 18

```sql
DROP TABLE EMP1_L215695;

-- Describe
DESCRIBE EMP1_L215695

-- For SQL Server
EXEC sp_help 'dbo.EMP1_L215695'
```
