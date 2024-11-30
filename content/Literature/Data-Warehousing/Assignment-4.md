---
title: Assignment 4
date: 2023-10-27T17:16:26Z
lastmod: 2024-06-17T17:52:20Z
draft: true
---

Reference Documents:

[Fall2023\_DW\_BDS\_A4\_Indexing Techniques.pdf](assets/Fall2023_DW_BDS_A4_Indexing%20Techniques-20231027171706-am71ouk.pdf)

[Indexing\_PracticeProblem1\_Sol.pdf](assets/Indexing_PracticeProblem1_Sol-20231027171818-5pku8nb.pdf)

[Indexing\_PracticeProblem2\_Sol.pdf](assets/Indexing_PracticeProblem2_Sol-20231027171823-8eudo5c.pdf)

## Assumptions

### Car Table

| Car\_ID | Manufacturer | Model | Year | Colour | Price |
| ------- | ------------ | ----- | ---- | ------ | ----- |

### Metadata

Memory Size = K = 4 KB

Record Size = R = 128 B

Index Record Size = R<sub>i</sub> = 16 B

Block Size = B = 8 KB = 8,192 B

Record Count = r = 100K = 100, 000

Blocking Factor = bfr = $\frac{B}{R}$ = $\frac{8192}{128}$ = 64

Blocks in Base Table = b = $\frac{r}{bfr}$ = $\frac{100K}{64}$ = 1,563

Blocking Factor Index = bfr<sub>i</sub> = $\frac{B}{R_i}$ = $\frac{8192}{16}$ = 512

Blocks in Index Table = b<sub>i</sub> = $\frac{r}{bfr_i}$ = $\frac{100K}{512}$ = 196

## Queries

1. ```sql
    SELECT * 
    FROM Car
    WHERE Manufacturer = 'HONDA'
    AND (Colour = 'White' OR Colour = 'Black') AND Year > 2022
   ```
2. ```sql
    SELECT *
    FROM Car
    WHERE Manufacturer = 'HONDA'
    AND (Colour = 'White' OR Colour = 'Black') AND Year > 2000
   ```

### Selectivities

|          Criteria          | Selectivity |  Rows  |
| :------------------------: | :---------: | :----: |
| Manufacturer (Honda)<br /> |     20%     | 20,000 |
|   Colour (White + Black)   |  10% + 15%  | 35,000 |
|         Year > 2022        |      3%     |  3,000 |
|         Year > 2000        |     30%     | 30,000 |

## Query 1

\*\*Combined Selectivity \*\* = 20 % of (10 + 15)% of 3% of 100,000 = **150**

1. ### Full Table Scan

   We have to scan the entire table.

   **I/O Cost** = Base Table Blocks = 1563

   ‍
2. ### Single Indexing

   Choosing the highest selectivity column of `Year > 2022`​ for indexing.

   Qualifying Rows = 3% of 100,000 = 3,000

   Since 3,000 > 1563 (Blocks in Base Table), we will have to read the entire base table

   \*\*I/O Cost \*\* = Bast Table Access + Index Access\
   \= 1563 + $\frac{3000}{bfr_i}$ = 1563 + $\frac{3000}{512}$ = 1569

   ‍
3. ### Combining Multiple Indexes

   Combined Selectivity = 150

   We will read only 150 blocks from the base table since 150 < 1563 (Blocks in Base Table)

   Total Index Access Cost = Index 1 Access + Index 2 Access + Index 3 Access\
   \= $\frac{Index1\space ResultCount}{bfr_i} + \frac{Index2\space ResultCount}{bfr_i} + \frac{Index3\space ResultCount}{bfr_i}$\
   \= $\frac{20,000}{512} + \frac{35,000}{512} + \frac{3,000}{512}$\
   \= 40 + 69 + 6 = 115

   **I/O Cost** = Base Table Access + Total Index Access\
   \= 150 + 115 = 265

   ‍
4. ### Dynamic Bitmap Index

   Same as Combining Multiple Indexes.

   ‍
5. ### Static Bitmap Index

   Combined Selectivity = 150\
   Will select 150 blocks in base table

   Static Bitmap Size = $\frac{r}{B \times 8}$ = $\frac{100,000}{8192 \times 8}$ = 2 Blocks for each value indexed

   Index 1 = `Manufacturer`​ = 1 value = 2 Blocks\
   Index 2 = `Colour`​ = 2 values = 4 Blocks\
   Index 3 = `Year > 2022`​ = 1 value = 2 Blocks

   **I/O Cost** = Base Table Access + All Index Access Cost\
   \= 150 + (2 + 4 + 2) = 158

   ‍
6. ### Composite Index

   Assuming size of Composite Index = 16 B

   Assuming order of Composite Index = Manufacturer, Colour, Year\
   Each combination should be checked: Colour 1 and Colour 2

   20% of 10% of 3% of 100,000 = 60\
   ​$\frac{60}{bfr_i}$ + Base Table Access\
   ​$\frac{60}{512}$ + 60 = 1 + 60

   20% of 15% of 3% of 100,000 = 90\
   ​$\frac{90}{bfr_i}$ + Base Table Access\
   ​$\frac{90}{512}$ + 90 = 1 + 90

   **I/O Cost** = Total Base Table Access + Total Index Access\
   \= (60 + 90) + (1 + 1) = 152

   ‍
7. ### Clustered Index

   Assuming Clustered Index on `Year > 2022`​ = 3% of Rows = 3,000

   Since rows are stored in ordered form, we do not need to access each block separately in the base table

   **I/O Cost** = Base Table Access + Index Access\
   \= $\frac{3,000}{bfr}$ + $\frac{3,000}{bfr_i}$\
   \= $\frac{3,000}{64}$ + $\frac{3,000}{512}$\
   \= 47 + 6 = 53

## Query 2

\*\*Combined Selectivity \*\* = 20 % of (10 + 15)% of 30% of 100,000 = **1,500**

1. ### Full Table Scan

   We have to scan the entire table.

   **I/O Cost** = Base Table Blocks = 1563

   ‍
2. ### Single Indexing

   Choosing the highest selectivity column of `Manufacturer`​ for indexing.

   Qualifying Rows = 20% of 100,000 = 20,000

   Since 20,000 > 1563 (Blocks in Base Table), we will have to read the entire base table

   \*\*I/O Cost \*\* = Bast Table Access + Index Access\
   \= 1563 + $\frac{20,000}{bfr_i}$ = 1563 + $\frac{20,000}{512}$ = 1,603

   ‍
3. ### Combining Multiple Indexes

   Combined Selectivity = 1500

   We will read only 1500 blocks from the base table since 1500 < 1563 (Blocks in Base Table)

   Total Index Access Cost = Index 1 Access + Index 2 Access + Index 3 Access\
   \= $\frac{Index1\space ResultCount}{bfr_i} + \frac{Index2\space ResultCount}{bfr_i} + \frac{Index3\space ResultCount}{bfr_i}$\
   \= $\frac{20,000}{512} + \frac{35,000}{512} + \frac{30,000}{512}$\
   \= 40 + 69 + 59 = 168

   **I/O Cost** = Base Table Access + Total Index Access\
   \= 1500 + 168 = 1,668

   ‍
4. ### Dynamic Bitmap Index

   Same as Combining Multiple Indexes.

   ‍
5. ### Static Bitmap Index

   Combined Selectivity = 1500\
   Will select 1500 blocks in base table

   Static Bitmap Size = $\frac{r}{B \times 8}$ = $\frac{100,000}{8192 \times 8}$ = 2 Blocks for each value indexed

   Index 1 = `Manufacturer`​ = 1 value = 2 Blocks\
   Index 2 = `Colour`​ = 2 values = 4 Blocks\
   Index 3 = `Year > 2000`​ = 1 value = 2 Blocks

   **I/O Cost** = Base Table Access + All Index Access Cost\
   \= 1500 + (2 + 4 + 2) = 1,508

   ‍
6. ### Composite Index

   Assuming size of Composite Index = 16 B

   Assuming order of Composite Index = Manufacturer, Colour, Year\
   Each combination should be checked: Colour 1 and Colour 2

   20% of 10% of 30% of 100,000 = 600\
   $\frac{600}{bfr_i}$ + Base Table Access\
   $\frac{600}{512}$ + 600 = 2 + 600

   20% of 15% of 30% of 100,000 = 900\
   $\frac{900}{bfr_i}$ + Base Table Access\
   $\frac{900}{512}$ + 900 = 2 + 900

   **I/O Cost** = Total Base Table Access + Total Index Access\
   \= (600 + 900) + (2 + 2) = 1,504

   ‍
7. ### Clustered Index

   Assuming Clustered Index on `Manufacturer`​ = 20% of Rows = 20,000

   Since rows are stored in ordered form, we do not need to access each block separately in the base table

   **I/O Cost** = Base Table Access + Index Access\
   \= $\frac{20,000}{bfr}$ + $\frac{20,000}{bfr_i}$\
   \= $\frac{20,000}{64}$ + $\frac{20,000}{512}$\
   \= 313 + 40 = 353
