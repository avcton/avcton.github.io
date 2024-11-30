---
title: Transactions
date: 2023-10-14T16:28:45Z
lastmod: 2024-06-21T20:55:19+05:00
---

> Sequence of steps
> Batches of statements interacting with the database

## Concurrency Control Problems

> When two transactions that access the same database items have operations interleaved (one after another), these problems may kick in

### Lost Update

> Two simultaneous transactions:
> T1 Reads
> T2 Reads
> T1 Updates X
> T2 Updates X (based on its previous read)
> (\*T1s Update is lost \*)

### Temporary Update / Dirty Read

> Two simultaneous transactions:
> T1 Updates X
> T2 Reads X
> T1 Fails (Value of X needs to be reset)
> (*T2 Reads incorrect value of X*)

### Incorrect Summary

> Two simultaneous transactions:
> T2 is generating a report or some sort of summary
> T1 Updates X
> T2 Reads X
> T2 Reads Y
> T1 Updates Y (Later after the read by T2)
> (*T2 has the incorrect value of Y - one supposed to be but not actually updated by T1 - therefore an incorrect summary / report*)

### Unrepeatable Read

> Two simultaneous transactions:
> T2 Reads X
> T1 Updates X
> T2 Reads X (Again)
> (*incorrect read this time - not repeatable*)

## Lifecycle of a transaction

## System Log

> A log maintaining the operations, states and effect of a transaction
> Backed up periodically
> Highly less likely to be fail or lost
> Logs into the buffer
> If buffers is full, appends to the log file in the disk

## ACID Properties

| Letter | Full Form               | Domain                    |
| ------ | ----------------------- | ------------------------- |
| A      | Atomicity               | Perform entire or not all |
| C      | Consistency             | Consistent DB interaction |
| I      | Isolation               | Assumption to be isolated |
| D      | Durability / Permanency | Changes persist in DB     |

## Levels of Isolation

| Level   | Domain                     |
| ------- | -------------------------- |
| Level 0 | No Dirty Reads Overwriting |
| Level 1 | No Lost Updates            |
| Level 2 | Level 1 + No Dirty Reads   |
| Level 3 | Level 2 + Repeatable Reads |
