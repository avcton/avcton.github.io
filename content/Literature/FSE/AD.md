---
name: AD
date: 2023-05-10
date_modified: 2025-01-17
tags:
  - ad
  - diagram
highlight: Literature/FSE
publish: true
---

> Activity Diagrams
> Type of UML
> Just Like Flow charts

## Syntax

| Shape                   | Purpose                                     |
| ----------------------- | ------------------------------------------- |
| Filled Dot              | Start of AD                                 |
| Prolong Oval            | An Action (Starting with Verb)              |
| Arrow                   | Represents the direction                    |
| Diamond                 | Decision, choice, if / else                 |
| Double Horizontal Lines | For concurrent tasks                        |
| Sub Hierarchy           | Defines that an activity has a sub activity |
| Filled Dot encircled    | End of AD                      |

![[../../attachments/image-20250117203419191.jpg|image-20250117203419191.jpg]]

![[../../attachments/image-20250117203419311.jpg|image-20250117203419311.jpg]]

## Syntaxial Rules

- No two diamonds can be together
- The sub activity of an activity has to be drawn in another AD
- The arrows of the diamonds can be drawn from any side

## Swimlane Activity Diagram

> Consists of multiple activity flows within a single diagram
> The flow can shift from one to another
> Helps us to determine the involvements of multiple participants / actors

![[../../attachments/image-20250117203419325.jpg|image-20250117203419325.jpg]]
