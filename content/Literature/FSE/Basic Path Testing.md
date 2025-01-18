---
date: 2023-03-02
date_modified: 2025-01-18
highlight: Literature/FSE
publish: true
---

> Source Code > Flow Graph > V(G)
> (Cyclomatic Complexity > Set of Linearly Independent paths)
>
> The technique is to divide the code into nodes.
> The sequential statement are assigned a single node.
>
> Each Condition has a separate node if logical operators (`&&` and `||` etc) are used in case of a for loop / if else
> In this way, a node tree is constructed representing a flow of program.

## Predicate Node

> Any node which has more than one outgoing node

![[../../attachments/image-20250117203419353.png|image-20250117203419353.png]]

![[../../attachments/Basic Path Testing_Drawing 2023-05-03_1.svg|Basic Path Testing_Drawing 2023-05-03_1.svg]]

![[../../attachments/image-20250117203419364.png|image-20250117203419364.png]]

![[../../attachments/Basic Path Testing_Drawing 2023-05-03_2.svg|Basic Path Testing_Drawing 2023-05-03_2.svg]]

## Cyclomatic Complexity

> V(G)
> Determines how complex the code / function is.
> If we are to test all bunch of code, we should go for regions with more cyclomatic complexity

- = E - N + 2 -> Edges - Nodes + 2
- = P + 1 -> Predicate Node + 1
- = R -> Regions

All formulas should give us a same final answer except case of some specific cases (switch cases)

In case of our example:

- = 11 - 9 + 2 = 4
- 3 + 1 = 4
- 4

## Paths

> Determine the paths
> Be default the first path is linearly independent
> 100% Test Coverage
> We need to maintain a history of paths
> Set of Basis Path

In case of our example:

| S#  | Paths                  | History Check |
| --- | ---------------------- | ------------- |
| 1   | 1->2->5->6->7->9       |               |
| 2   | 1->2->5->6->7->8->7->9 | 7->8->7       |
| 3   | 1->2->3->5->6->7->9    | 2->3->5       |
| 4   | 1->2->3->4->6->7->9    | 3->4, 4->6    |

***Line Coverage < Branch Coverage < Path Coverage***

## Examples

![[../../attachments/image-20250117203419373.png|image-20250117203419373.png]]

![[../../attachments/image-20250117203419387.png|image-20250117203419387.png]]
