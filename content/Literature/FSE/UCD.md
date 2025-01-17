---
name: UCD
date: 2023-05-10
date_modified: 2025-01-17
tags:
  - diagram
  - ucd
highlight: Literature/FSE
publish: true
---

> Use Case Diagrams
> Type of UML

![[../../attachments/Analysis and Design_Drawing 2023-02-21_1.svg|Analysis and Design_Drawing 2023-02-21_1.svg]]

- An actor has to interact directly with the system

## Syntax

- Human $\rightarrow$ Stickman
- Functional Requirements, Use Cases $\rightarrow$ Oval
- Service $\rightarrow$ Rectangle

## Use Case Inheritance / Generalization

![[../../attachments/Analysis and Design_Drawing 2023-02-21_2.svg|Analysis and Design_Drawing 2023-02-21_2.svg]]

`register courses` is the parent class
rest are the child classes
so, the other classes are inheriting the `register courses` use case

### Abstract Use Case

Parent use case is an abstract use case, this would be because the only methods to implement it would be through the child use cases
If this is not case then the parent use case can be concrete

## Syntaxial Rules

- Use Case names must start with verbs

## Keywords

- extend
- include

> [!link]
> https://creately.com/blog/diagrams/use-case-diagram-relationships/
