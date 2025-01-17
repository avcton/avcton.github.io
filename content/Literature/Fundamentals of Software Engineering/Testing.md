---
title: Testing
date: 2023-05-10
date_modified: 2025-01-17
highlight: Literature/Fundamentals of Software Engineering
publish: true
---

> Focuses on implementation of code
> The intention is to write code that qualifies the requirements and break it up by finding bugs.
> The tester should be a third party resource
> Special Independent testing / Quality Assurance Departments
> Testing from the small to large

## Testing Strategies

> Gives a road map / plan
> What to do when to do, who to do etc.

### Unit Testing

Individual functions called as 'Units' of the systems are tested independently.

### Integration Testing

We combine modules together one by one and test them.

1. Stubs in **Top-Down Testing**:
	1. In top-down testing, the higher-level modules are tested first before the lower-level modules are available. Stubs are used to simulate the behavior of the lower-level modules that are not yet implemented. Stubs receive inputs from the higher-level modules and return pre-determined outputs. They are primarily used to provide the necessary responses to allow testing of the higher-level modules.
2. Drivers in **Bottom-Up Testing**:
	1. In bottom-up testing, the lower-level modules are tested first before the higher-level modules are available. Drivers are used to simulate the behavior of the higher-level modules that are not yet implemented. Drivers provide inputs to the lower-level modules and handle their outputs. They are primarily used to test the lower-level modules in isolation and verify their functionality.

### Validation Testing

- Verification

![[./Definitions#^268e20|Definitions > ^268e20]]

- Validation

![[./Definitions#^01c510|Definitions > ^01c510]]

### System Testing

Entire system is tested as in one organism.

## Testing Techniques

> Focus on how to do it

### White Box

> AKA Glass Box / Structural Testing
> We look at the code, loops, if else etc.
> Tests the processing logic
> Costs more, expensive

#### Basic Path Testing

Look more in [[./Basic Path Testing|Basic Path Testing]].

#### Loop Testing

> Start with the inner loop and then proceed to outer loops

#### Conditional Testing

> Based on evaluation of conditions

### Black Box

> AKA Functional Testing
> We look the software from outer boundaries
> Ignores the processing logic
> Large number of testing that can only be done using the blackbox testing

#### Equivalence Class Partitioning

> Inputs
> Partitioning into different equivalence classes (Valid or Invalid)
> Partitions are actually the buckets
> Pick and execute for only one equivalence class, the reason is that all of them should give the same answer

#### Boundary Value Analysis (BVA)

> The focus is specially on boundary
> Continuous variables have boundaries
> We focus specially on boundaries, as the most of the problems lie there

> [!quote]
> Bugs lurk in corners and congregate at boundaries

#### Example

Black box test of ticketing system using Boundary Value Analysis

Ticket price depends on:

Inputs:
- Vistor Status - M / OT
- Dady of Visit - WD / WED
- Time of Day - 1st shift / 2nd shift
- Age Bracket - Y / M / E

Hence, 24 possible combinations of input

The number of invalid equivalent classes will be the number of our invalid test cases

Test cases of boundary and non boundaries will be kept separate

We exhaust all the boundaries of all buckets of valid equivalence classes

> [!seealso]
> Differences between white box and black box?

### Grey Box

> Combination of the above two techniques

---

## Automated Testing

- Coverage Monitor
	- Code?
- Qualification Testing
	- Qualify codes if it follows certain conventions or not
- Blackbox Functional Testing Tools
	- Selenium, Usability testing
	- Regression Testing
		- Existing test cases which are checked whenever the code is changed
		- Result of changing the code
- Load Testing
- Test Case Management Tools
	- Tracks the entire lifecycle for bug

![[../../attachments/reproduction-of-bugs.webm|reproduction-of-bugs.webm]]

> [!insight]
> The biggest consumer of QA is **Testing** and the biggest consumer of testing is ??

> [!info]
> Testing never stops. It just tosses from one end to another.
