---
title: DFD
date: 2025-01-17
date_modified: 2025-01-17
tags:
  - dfd
  - diagram
highlight: Literature/Fundamentals of Software Engineering
publish: true
---

> Data Flow Diagrams
> Flow based model
> Determines the flow of the program and its processes
> Level wise approach

## Syntax

| Shapes          | Purpose         |
| --------------- | --------------- |
| Rectangle       | External Entity |
| Circle / Bubble | Processes       |
| Parallel Lines  | Data Store      |
| Arrows          | Data Items      |

## Syntactical Rules

- The processes names should start with verb
- The variables can be provided with a single arrow as a list separated by commas

## Levels

> Levels can be dragged to any number starting from 0
> There should be continuity between levels
> Each level is an abstraction of the previous level. This means that it describes the processes involved in the previous level.

- The data items used in higher levels should include the items from the lower levels
	- The data items can be detailed but they should exist in an upper set context in the lower levels.
		- The Examples could be `Login Info` to `username, password`

### DFD Level 0

- Is the system itself
	- So the the label of the bubble doesn't have to start with a verb
- Consists of a single bubble
- No data stores

### Further Levels

- Follows the same ruling conventions as described above.

## Example

![[../../attachments/image-20250117203419505.png|image-20250117203419505.png]]

![[../../attachments/image-20250117203419545.jpg|image-20250117203419545.jpg]]
![[../../attachments/image-20250117203419565.jpg|image-20250117203419565.jpg]]
