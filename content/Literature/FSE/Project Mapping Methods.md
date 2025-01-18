---
date: 2022-02-22
date_modified: 2025-01-18
tags:
  - cpm
  - duration
  - projectmap
highlight: Literature/FSE
publish: true
---

## Critical Path Method

> Person Unit
> : Determines the time taken by one person to complete a task

![[../../attachments/Project Mapping Methods_Drawing 2023-02-02.svg|Project Mapping Methods_Drawing 2023-02-02.svg]]

### Units of Effort

- **Person Days**
- **Person Months**
- **Person Weeks**

### Minimum Duration of a Project

- The minimum possible duration at the end of the structure
	- i.e. `e: 27`

### Critical Task / Path

- A project has *at-least* one critical path.
- It may have more than one critical path.
- The pre-req of a critical task is also a critical task
- We start mapping out the critical path from the trail `(end)` of the diagram.

> [!insight]
> **Tasks that cannot be delayed without affecting the project finish date** are the critical tasks.

> [!important]
> By definition, if a task has two pre-required tasks, then the one with the max time is the critical task

### Non-Critical Tasks

- We can afford some delays in these.

### Paths

| Path Sorted in descending order w.r.t   | Duration |
| --------------------------------------- | -------- |
| **S -> RE -> A&D(B) -> I(A) -> T -> F** | **27**   |
| S -> RE -> A&D(B) -> I(B) -> T -> F     | 25       |
| S -> RE -> A&D(A) -> I(A) -> T -> F     | 24       |
| S -> RE -> A&D(C) -> I(B) -> T -> F     | 20       |

*Bold one is the critical path*

### Lags

- We determine the lag using these paths to get the optimal path.
- Sort out the paths according to duration in descending order .
- Compare every new path with the critical path (take the difference).
- For new nodes in the compared path, put the difference as lag time.
	- Starting from top to bottom in the sorted list.

> [!link]
> https://pmstudycircle.com/critical-path-method-cpm-in-project-management/
