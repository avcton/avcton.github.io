---
date: 2025-02-07
date_modified: 2025-02-23
highlight: Literature/Blockchain
publish: true
---

> Consensus protocols are established to layout rules and conditions that are to be followed in a network. These protocols are fundamentally part of distributed systems and Blockchain imports this concept as is.

Consensus protocols are the behind the scene algorithms of Blockchain that operate automatically. Every rule or procedure related to the operations of Blockchain are defined within them. Even attacking pattern and recovery actions are addressed within here.

## Challenges

Following are the challenges that are addressed in such protocols:

### Attacking Challenges

The consensus algorithm lay out the steps and sequence of actions that should be taken to recover from an internal or external attack. It needs to keep the pipeline of the system consistent.

Following are that challenges under this heading:

#### 51% Attack

If *51%* of computation power belongs to a single individual, then it is quite likely for that individual to keep winning the mining competition.

In an effort to counter this attack, some Blockchain protocols enforce the restriction on ASICs machines specifically that their computation power shouldn't exceed a specific value. Thus, putting a cap on overpowering of machines.

#### Byzantine Fault Tolerance

If our system has 1/3 or less traitors, then our system has to be in safe mode. However, if this limit exceeds than the system can be corrupted and compromised.
Therefore, the ==tolerance factor for traitors is 33%==. It's the job of the protocol to maitain this factor and keep the tolerance rate under 33%. This is done through explicit checking and kicking out miner who are proved to be traitors.

### Competing Chains

There are conditions when multiple users might solve the puzzles at the same time and submit their solution to be verified accordingly. In such cases, there needs to be a procedure to decide which miner would be the winner.

There are two solutions to this problem:

#### Solve through Latencies

The widely accepted and most used solution is to compare latencies of the miners and the one having less latency is declared as the winner and only his block is appended to Block-Chain.

#### Compare Majority Local Copies

Another solution would be to compare copies present in the network. The majority copies in the network that have the submitted puzzled block, is accepted into the network and rest of the solutions in less local copies are discarded.

> [!question] What if there are equal percentages of copies?
> In such cases, the next block # is competed and when solved, its local chain is carried forward. Meaning the next competed block when would be appended, it would be attached to one of the answers of the previously computed block. That chain will then be carried forward. **So, the longest chain is always carried forward.**
