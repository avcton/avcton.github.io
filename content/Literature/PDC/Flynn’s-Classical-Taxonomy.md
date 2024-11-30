---
title: Flynn’s Classical Taxonomy
date: 2024-02-15T13:26:23Z
lastmod: 2024-02-19T21:44:03Z
---

[Flynn’s taxonomy distinguishes multi-processor computer architectures according to how they can be classified along the two independent dimensions of Instruction Stream and Data Stream. Each of these dimensions can have only one of two possible states: Single or Multiple](assets/Flynns%20Classical%20Taxonomy-20240215132756-grpjso4.pdf#page=1)

* [One of the more widely used classifications, in use since 1966](assets/Flynns%20Classical%20Taxonomy-20240215132756-grpjso4.pdf#page=1)

## Instruction stream

* Sequence of instructions from memory to control unit
* When flow of instructions from main memory to the CPU is established. This flow of instructions is called instruction stream

## Data stream

* Sequence of data from memory to control unit
* Flow of operands between processor and memory bidirectionally. This flow of operands is called data stream

## Stream Example

```python
x = 5
y = 5
print(x+y)
```

​`x`​​ & `y`​​ = Data Stream\
`print`​​ & `+`​​ = Instruction Stream

## Classifications

### SISD

* Single Instruction Stream Single Data Stream
* A serial (non-parallel) computer
* Single Instruction: Only one instruction stream is being acted on by the CPU during any one clock cycle
* Single Data: Only one data stream is being used as input during any one clock cycle
* Deterministic execution
* Oldest type of computer
* Examples

  * Older generation mainframes
  * Minicomputers
  * Workstations
  * Single processor/core PCs

### SIMD

* Single Instruction Stream Multiple Data Stream
* A type of parallel computer
* Single Instruction: All processing units execute the same instruction at any given clock cycle
* Multiple Data: Each processing unit can operate on a different data element
* Best suited for specialised problems characterised by a high degree of regularity, such as graphics/image processing
* Synchronous (lockstep) and deterministic execution

  * **Lockstep**

    All processors execute the same instruction at the same time (but on different data items); no synchronisation is required
* Two varieties: Processor Arrays and Vector Pipelines
* Most modern computers, particularly those with graphics processor units (GPUs) employ SIMD instructions and execution units

### MISD

* Multiple Instruction Stream Single Data Stream
* A type of parallel computer
* Multiple Instruction: Each processing unit operates on the data independently via separate instruction streams.
* Single Data: A single data stream is fed into multiple processing units.
* Few (if any) actual examples of this class of parallel computer have ever existed.
* Some conceivable uses might be:

  * Multiple frequency filters operating on a single signal stream
  * Multiple cryptography algorithms attempting to crack a single coded message

### MIMD

* Multiple Instruction Stream Multiple Data Stream
* A type of parallel computer
* Multiple Instruction: Every processor may be executing a different instruction stream
* Multiple Data: Every processor may be working with a different data stream
* Execution can be synchronous or asynchronous, deterministic or non-deterministic
* Currently, the most common type of parallel computer - most modern supercomputers fall into this category.
* Examples: most current supercomputers, networked parallel computer clusters and “grids”, multi-processor SMP computers, multi-core PCs.
* Many MIMD architectures also include SIMD execution sub-components

## Resources

* [Flynns Classical Taxonomy.pdf](assets/Flynns%20Classical%20Taxonomy-20240215132756-grpjso4.pdf)
