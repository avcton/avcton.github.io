---
date: 2023-04-14
date_modified: 2025-01-18
highlight: Literature/FSE
publish: true
---

> Cohesion $\uparrow$
> Coupling $\downarrow$

## Higher Levels of Cohesion $\uparrow$

- Functional (Perfect Cohesion)
	- Highest level
- Layered
- Communicational (Informational)
	- The main class has access to all of the functions of that specific use case class

## Lower Levels of Cohesion $\downarrow$

- Procedural
	- Functions which execute one after the another are bunched together in the same class
	- Special Case : Sequential
		- Data is also passed from one function to another
- Temporal
	- Operation or functions which execute at a specific and same time will be bunched together into the same class
- Utility (Coincidental)
	- All the functions which belong to the same sort of heading are bunched together into the same class

> [!link]
> https://www.linkedin.com/pulse/types-cohesion-ahmed-adel/

## Coupling

^8f0ce9

In programming, coupling refers to the degree of direct knowledge that one element has of another. In other words, how often do changes in class A force related changes in class B². There are different types of coupling in programming such as data coupling, control coupling, stamp coupling, common coupling, content coupling, type-use coupling and routine call coupling¹²⁴.

| Coupling Type | Definition |
| --- | --- |
| Data Coupling | If the dependency between the modules is based on the fact that they communicate by passing only data, then the modules are said to be data coupled. In data coupling, the components are independent of each other and communicate through data. |
| Control Coupling | If one module controls the flow of another module by passing control information, then the modules are said to be control coupled. |
| Stamp Coupling | If two or more modules share a composite data structure and use only a part of it, then they are said to be stamp coupled. |
| Common Coupling | If two or more modules share a global data area or a large number of data items, then they are said to be common coupled. |
| Content Coupling | If one module modifies or relies on the internal workings of another module, then they are said to be content coupled. |
| Type-use Coupling | If one module uses another module's data type without using its functions or procedures, then they are said to be type-use coupled. |
| Routine Call Coupling | If one module calls another module's routines or procedures directly, then they are said to be routine call coupled  . |

![[../../attachments/functional-dependencies.pdf|functional-dependencies.pdf]]

> [!link]
> https://www.javatpoint.com/software-engineering-coupling-and-cohesion
