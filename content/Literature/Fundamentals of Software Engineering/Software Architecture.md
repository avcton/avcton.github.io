---
title: Software Architecture
date: 2023-05-10
date_modified: 2025-01-17
highlight: Literature/Fundamentals of Software Engineering
publish: true
---

> AKA High Level Design (HDL)
> Top level overview / structure
> Does not cover Interior part of that structure

## Representation

Construction and presentation:

### Architecture Context Diagram

> - Same as a [[./UCD|UCD]]
> - Not [[./Analysis#^d3b9a0|UML]]
> - System Boundary and external actors etc.

> [!link]
> https://tinyurl.com/2docz447

### Architecture Styles

#### Data Centered

> Data Sharing
> Central source of information

#### Client Server

> A central server or component serves to other clients

#### Peer to Peer

> Any node can act as a server or a client

#### Data Flow

> More of like [[./DFD|DFD]]
> Special case: *Batch Sequential*

#### Layer Tiered

> Layer wise structure
> No bypassing but communication allowed
> Changing layers does not allows structure of others layer to be changed

#### Call and Return

> Calling is from top to down
> Returning is from bottom to top
> Decreased Abstraction from top to bottom

> [!insight]
> We use the structured design pattern to map out our [[./Analysis|Analysis]] phase diagram into a software architecture which could follow any architecture style.

### Structured Design

#### Transform Flow

- Over-all data flow is sequential and flows along a small number of straight line paths.

#### Transaction Flow

- A single data item triggers information flow along one of many paths.

> Overall we have the transform flow but within the action paths of the transform flow we have the transaction flow.

![[../../attachments/designing-systems.pdf|designing-systems.pdf]]
