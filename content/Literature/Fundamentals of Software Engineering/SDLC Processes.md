---
title: SDLC Processes
date: 2023-05-10
date_modified: 2025-01-17
tags:
  - processes
  - sdlc
highlight: Literature/Fundamentals of Software Engineering
publish: true
---

## What is it?

> An approach for developing software
> [[./Definitions#^2b782c|Definition]]

## Categories

- Traditional
- Agile

![[../../attachments/SDLC Processes_Drawing 2023-02-07.svg|SDLC Processes_Drawing 2023-02-07.svg]]

## 5 Generic Framework Activities

^5418ec

- Communication
- Planning
- Modelling
	- [[./Analysis|Analysis]]
	- [[./Design|Design]]
- Construction
	- [[./Implementation|Implementation / Programming / Coding]]
	- [[./Testing|Testing]]
- [[./Deployment|Deployment]]
	- Feedback
	- Maintenance

### Traditional Processes / Process Models

#### Non Evolutionary

##### Incremental

> The software is broken down into small increments.
> Multiple development cycles take place
> Software requirements are divided or broken down into multiple stand-alone modules / increments in the SDLC

![[../../attachments/image-20250117203419889.png|400]]

##### Waterfall AKA Linear Sequential Model

> Breakdown of a project into linear sequential tasks
> Each task is given forward as a series of waterfall
> Each task depends on the previous tasks
> We get the complete application in the end in one go

---

#### Evolutionary

##### IKIWISI

> I Know It When I See IT

##### Prototyping

> A Prototype is a toy implementation of the actual system.
> Before carrying out the development of actual software, a working prototype of the system is made.
> That would be the incomplete version of software program.
> Model in which prototype is built, tested, and reworked until an acceptable prototype is achieved

##### Spiral

> Meta-label Process
> Risk-driven software development process model
>  During the early iterations, the additional release may be a paper model or prototype. During later iterations, more and more complete versions of the engineered system are produced.

----

#### Processes Workflow

![[../../attachments/SDLC Processes_Drawing 2023-02-11.svg|SDLC Processes_Drawing 2023-02-11.svg]]

---

### Agile Processes / Models

#### Agile Manifesto

| **Clause**                 | **Domain**                  |
| -------------------------- | --------------------------- |
| Individuals & Interactions | Process & Tools             |
| Working Software           | Comprehensive Documentation |
| Customer Collaboration     | Contract Negotiation        |
| Responding the Change      | Following a Plan            |

- Customer Satisfaction
- Welcoming Change
- Frequent Delivery
- Together
- Face to face communication
- Design Excellence
- Sustainable Development
- Self-Organizing Teams
- KIS *(Keep it simple)*
- Reflection

---

#### XP

> eXtreme Programming
> Uses the [[SDLC Processes#^5418ec|5 Framework Activities]]

![[../../attachments/image-20250117203420004.png|450]]

##### Key Principles

- Pair Programming
- Planning Game
- Continuous Process
- Coding Standards
- Sustainable Pace
- Test Driven Development

> [!hint]
> https://www.cprime.com/resources/blog/key-xp-practices/

---

#### SCRUM

> The most popular agile method as of today.
> A Sprint is same as an iteration.
> A Sprint takes about 30 days.

##### Scrum Master

> Project Manager

##### Product Owner

> Requirements Engineer
> Manages the Product Backlog

##### Product Backlog

> Prioritized Requirements
> Running todo list
> Features, requirements, enhancements, and fixes that acts as the input for the Sprint Backlog

##### Sprint Backlog

> Priorities you will be taking in the sprint
> Items, [user stories](https://www.atlassian.com/agile/project-management/user-stories), or bug fixes, selected by the development team for implementation in the current sprint cycle

##### Sprint Plan

> The plan to be followed

##### Time Boxing

> Fixing of duration

##### User Stories

> An informal, general explanation of a software feature written from the perspective of the end user. Its purpose is to articulate how a software feature will provide value to the customer.

![[../../attachments/image-20250117203420016.png|image-20250117203420016.png]]

##### SCRUM Ceremonies

1. Organize the Backlog
2. Sprint Planning
3. Sprint
4. Daily Scrum / Standup
	1. What did I do yesterday?
	2. What do I plan to do today?
	3. Are there any obstacles?
5. Sprint Review
6. Sprint Retrospective

----

### $W^5 HH$

> What When Where Why Who
> How
> How Much
