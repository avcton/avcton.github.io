---
name: SD
date: 2023-05-10
date_modified: 2025-01-17
highlight: Literature/Fundamentals of Software Engineering
publish: true
---

> State Diagram
> Determines the state of objects of an application
> For only objects of those classes who have important temporal behaviour

## Syntax

| Shape                           | Purpose                 |
| ------------------------------- | ----------------------- |
| Rounded Rectangle               | Contains State Name     |
| Arrow Lines                     | Connection btw states   |
| Rectangle                       | Boundary                |
| Pentagonal tag                  | Represents Class Name   |
| Brackets                        | Guard Statement         |
| Filled Dot                      | Entry Point             |
| Encircled Filled Dot            | Exit Point              |
| *event*/{ description }         | activities within state |
| Vertical line - another diagram | Concurrent states       |

## Syntactical Rules

- State names are adverb (very common to end with `ing`)
- Events cause transition from one state to another
- Event names are written on top of the arrow lines (lower camel case *italics*)
- There can be multiple exit points, like on multiple signal triggers
- Unlabelled transition is a completion transition (from end to start)
- Activities can be performed within the states such as `enter`, `do`, `exit`.
	- We can define common and constant tasks in these activities

> [!info]
> - States represent Intervals of time
> - Events represent Point in Time

## Types of Events

Following are the types of events:

### Signal Events

- Purpose : Change state
- Can be Guarded
	- Only change the state on that external signal if condition is satisfied
	- Example would be to change state to `FULL` when `currentSeats >= maxSeats`
	- The guard statement will be in Regular Font but signal name will be *italics*.

### Change Events

- keyword : *when (…)*

### Time Events

- Absolute
	- keyword : *when (…)*
- Relative
	- keyword : *after (…)*

## Types of SD

Following are the types of State Diagrams:

### One-Shot

- Distinct time for object to be created and destroyed (start and end)

### Continuous

- No start or end (continuous existence)

![[../../attachments/state-diagrams.pdf|state-diagrams.pdf]]

## Nested States

> State diagram within state diagram
> Can be used used to demonstrate sub abstract state within a state diagram
> It needs to have its explicit entry point if no arrow points to one of its state
> Convention: Rounded Rectangle same as a state

![[../../attachments/image-20250117203419822.png|400]]

## State Machine

> Further elaborates a state
> Can be used to define activities and sub states within a state
> Convention: `{StateName} : {MachineName}`

![[../../attachments/image-20250117203419843.png|image-20250117203419843.png]]

## Concurrent States

> Determine states that are triggered at the same time
> For Concurrent tasks
> Convention: {Vertical line connecting each state within a circular rectangle boundary}
> Each concurrent task should be separated by a horizontal dashed line

![[../../attachments/image-20250117203419865.png|image-20250117203419865.png]]
