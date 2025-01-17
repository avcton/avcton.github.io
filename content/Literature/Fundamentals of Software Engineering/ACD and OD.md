---
title: ACD and OD
date: 2023-05-10
date_modified: 2025-01-17
tags:
  - acd
  - diagram
  - uml
highlight: Literature/Fundamentals of Software Engineering
publish: true
---

> **Analysis Class Diagrams**
> Class based model
> - Node are classes and they have different relationships with each other
> - High-level view of the system's structure
>
> **Object Diagrams**
> Object based model
> - Created by instantiating the classes and objects that are defined in the analysis class diagram
> - Concrete view of the system's structure at a specific point in time

## Syntax

| Element        | Analysis Class Diagram                                                                                                                                             | Object Diagram                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Class / Object | A rectangle with the class name at the top and the class attributes and methods below                                                                              | A rectangle with the object name at the top with a colon and class name in trailing and the object attributes and values below           |
| Association    | A line connecting two classes with an optional arrowhead indicating the direction of the relationship                                                              | A line connecting two objects with an optional arrowhead indicating the direction of the relationship                                    |
| Multiplicity   | A notation indicating how many objects participate in the association, represented as a range of values or a fixed value                                           | Same as in analysis class diagrams                                                                                                       |
| Inheritance    | A line with an open arrowhead connecting a subclass to a superclass, indicating that the subclass inherits the attributes and operations of the superclass         | Same as in analysis class diagrams                                                                                                       |
| Aggregation    | A line connecting a composite class (the whole) to its component classes (the parts), with a diamond at the composite class end                                    | A line connecting a composite object (the whole) to its component objects (the parts), with a diamond at the composite object end        |
| Composition    | A line connecting a composite class (the whole) to its component classes (the parts), with a filled diamond at the composite class end                             | A line connecting a composite object (the whole) to its component objects (the parts), with a filled diamond at the composite object end |

| Shapes                          | Purpose                          |
| ------------------------------- | -------------------------------- |
| 1..$x$                          | Multiplicity Range from 1 to $x$ |
| 1..*                            | 1 or many                        |
| /{attribute} OR /{relationship} | Derived Attribute / Relationship |

## Syntactical Rules

- A class name should be a singular noun
	- `Student` not `Students`
- A class name has many compartments
	- The first one is for class name only. (Mandatory)
	- Second one would be the attributes
	- Third one would be the methods
- Class name should follow upper camel case
	- Example would be `UndergradStudent`
- Features of a class include attributes and method combined
- Relationship context name is written in italics, starts with capital letter
- Name of objects of classes should be underlined with class name in trailing after colon
- Object can be connected with `line` and the italic relationship context is labeled on it
	- The italic relationship should be underlined when connecting objects
- The constant value that will be same for all object will be underlined in the class box
- Constraints on attributes can be specified near class boxes
- Comments can be specified about an attribute in a folded card connected by a dashed line to that specific attribute

## Association

- Self
- Binary
- Ternary
- Qualified

## Multiplicity

- Defining the range constraints on the ends of a associative relationship.
- The constraint is read from left to right or right to left taking into account the relationship and the class names

## Ternary Association

> A diamond symbol connecting more than two classes
> The relationship name will be follow the same syntax, italics and capital letter.
> The multiplicity will be allotted keeping in view the context relating all of the classes
> Association class can also be linked the to the same diamond.

- Fake Ternary Association
	- Not consists of all `many` multiplicity
- General Ternary Association
	- Consists of all `many` multiplicity

## Constraints

> Used when associating or defining multiplicity

- {ordered}
	- Order is important / Duplicates not allowed
- {sequence}
	- Order is important / Duplicates are allowed
- { }
	- Order not important / Duplicates not allowed
- {bag}
	- Order is not important / Duplicates are allowed
	- Multi Set

## Inheritance

> Same as the UML Structure
> A hollow triangle is used to connect the parent class to child class with triangle on the side of the parent class.

## Abstract Class

> Italic Class Name
> Cannot be instantiated

> [!tip]
> Generally all super classes should be abstract

## Association Class

> Verb class name ( exception from other classes )
> Combines the two classes in such a way that methods that include involvement of both classes can be placed in a new associated class

## Children Constraints

> A dashed line is drawn between the inheritance relationship and constraints are written on top of that line

- {overlapping, incomplete}
- {overlapping, complete}
- {disjoint, incomplete}
- {disjoint, complete}

## Aggregation

> Makes use of object of other classes
> Drawn with a hollow diamond symbol with the the diamond on the side of the class using the object
> - Multiplicity Factor is Many on the acting class end

## Composition

> Instantiates the object of other classes within itself
> Drawn with a filled diamond symbol with the the diamond on the the side of the class using the object
> - Coincident Lifetime
> - Multiplicity Factor is at-most 1 on the acting class end

![[../../attachments/analysis-class-diagram.pdf|analysis-class-diagram.pdf]]
