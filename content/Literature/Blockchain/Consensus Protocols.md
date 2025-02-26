---
date: 2025-02-07
date_modified: 2025-02-25
highlight: Literature/Blockchain
publish: true
---

> Consensus protocols are established to layout rules and conditions that are to be followed in a network. These protocols are fundamentally part of distributed systems and Blockchain imports this concept as is.

Consensus protocols are the behind the scene algorithms of Blockchain that operate automatically. Every rule or procedure related to the operations of Blockchain (more in [[./Architecture of Blockchain|Architecture of Blockchain]]) are defined within them. Even attacking pattern and recovery actions are addressed within here.

## Types of Consensus Protocol

There are essentially many types of Consensus Protocols based on the classification and architecture of Blockchain. The two most popular of them are:

### Proof of Work

People (miners) compete to solve puzzles, and the first one who does win, gets to add the block to the Blockchain and earn a reward. This method is very secure but requires a lot of electricity and computing power.

**Example: Bitcoin**

### Proof of Stake

Instead of solving puzzles, people (validators) are chosen based on how many coins they own and are willing to "lock up"/state as a deposit. The more they stake, the higher their chances of being selected to append the block in the Blockchain. This method is more energy-efficient and faster and requires less computation power as compared to [[Consensus Protocols#Proof of Work|Proof of Work]].

**Example: Ethereum 2.0**

## Challenges

Following are the challenges that are addressed in Consensus Protocols:

### Attacking Challenges

The consensus algorithm lay out the steps and sequence of actions that should be taken to recover from an internal or external attack. It needs to keep the pipeline of the system consistent.

> [!info]
> Computation related attacks though are more concerned in [[Consensus Protocols#Proof of Work|Proof of Work]]

Following are that challenges under this heading:

#### 51% Attack

If *51%* of computation power belongs to a single individual, then it is quite likely for that individual to keep winning the mining competition.

In an effort to counter this attack, some Blockchain protocols enforce the restriction on ASICs machines specifically that their computation power shouldn't exceed a specific value. Thus, putting a cap on overpowering of machines.

#### Byzantine Fault Tolerance

If our system has 1/3 or less traitors, then our system has to be in safe mode. However, if this limit exceeds than the system can be corrupted and compromised.
Therefore, the ==tolerance factor for traitors is 33%==. It's the job of the protocol to maintain this factor and keep the tolerance rate under 33%. This is done through explicit checking and kicking out miner who are proved to be traitors.

### Competing Chains

There are conditions when multiple users might solve the puzzles at the same time and submit their solution to be verified accordingly. In such cases, there needs to be a procedure to decide which miner would be the winner.

There are two solutions to this problem:

#### Solve through Latencies

The widely accepted and most used solution is to compare latencies of the miners and the one having less latency is declared as the winner and only his block is appended to Block-Chain.

#### Compare Majority Local Copies

Another solution would be to compare copies present in the network. The majority copies in the network that have the submitted puzzled block, is accepted into the network and rest of the solutions in less local copies are discarded.

> [!question] What if there are equal percentages of copies?
> In such cases, the next block # is competed and when solved, its local chain is carried forward. Meaning the next competed block when would be appended, it would be attached to one of the answers of the previously computed block. That chain will then be carried forward. **So, the longest chain is always carried forward.**
