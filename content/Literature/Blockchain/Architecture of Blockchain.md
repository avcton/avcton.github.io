---
date: 2025-01-31
date_modified: 2025-02-23
highlight: Literature/Blockchain
publish: true
---

## Peer-to-Peer Network

Blockchain establishes a distributed **peer-to-peer network** that allows multiple users to share the state of the Block-chain with each others. This strong topology helps in detecting forgery in the Block-chain by validating the chain with other sources' copy.

> [!tip] Anonymous Identities
> In the world of Blockchain, there is anonymity. Each participant or user is anonymous. This anonymity is established at the time of user signup.

- There's *local data* and there's *published* data or *public data*.
- Each node or user has a local copy or state of the Block-chain.

A change in local data by a user is only publicly accepted into the network if that change is evaluated to be correct. This acceptance criteria is determined by algorithms which take the local Block-chain state of each user on the network and then based on the majority accepted Block-chain state, accept valid changes into the network.
The collection of state of each user's local Block-chain data is also what's called a *Reflection*.

Of-course there can be corrupted people in the Blockchain network that can influence the acceptance criteria by changing their local copies or by manually accepting invalid changes. Blockchain maintains proper logs and have established algorithms to remove such corrupted people from the network if their percentage in the votes increase the majority threshold.

There are two network entities in the Blockchain peer-to-peer network:

### 1. End Users

These users accept and reject work of others, so basically they are validation agents.

### 2. Miners

Miners take part in network organized *competitions* and within them they perform tasks (stamp transactional data) and solve puzzles to get the right to solve those tasks. The winning candidate is then provided with the right to append a new block to the Block-chain and is ultimately provided with incentives as reward for their effort or work. Therefore, the blocks added to the Blockchain represent sensitive or transactional data that needs to be logged.

> [!info]
> Miners also have hierarchies, types and roles.
> During the time of registration, each Miner's computation power is recorded and the whole Blockchain protocol's computation power is measured through it. This average computation power is made public so a new Miner can warned about the minimum computation power required to compete in the network.
> This also helps out in figuring out the [[./Consensus Protocols#51% Attack|51% Attack]].

## Memory Pool

Miners acquire data to be put into the block, from a ==transactional pool AKA Mem Pool==. This transactional pool keeps filling and contain transactions that needs to be stamped or put into the Block-chain. It's a peer-to-peer resource, meaning that the transactional pool is distributedly stored in each user's machine and then made consistent using distributed algorithms, similar to a Block-chain. A miner at a time can only acquire a limited transaction data to be logged. No miner can acquire data that is already acquired by someone else.

### Transaction Tips

The users owning the transaction, may or may not give out tip(s). These tips are then ultimately consolidated in some way and contributed to mining rewards of the miners.

Some networks have mechanism to deal with biases if only high tipped transactions are picked up by the miners or if a low tipped transaction stays out too long in the transaction pool.

## Puzzle

For a puzzle to be solved by miners, the Blockchain algorithm publicly announces a *random hash* and the competitors or miners are supposed to find an ideal ==block== which would have the final or target hash lower than the publicly announced or puzzle's needed hash.

Avalanche effects comes into play here. Even if the underlying data is same, change in one single value can cause the entire hash to fluctuate. [[Architecture of Blockchain#Nonce|Nonce]] is needed in this regard.

> [!warning]
> Puzzles were the old technology and are no longer used in the world of modern Blockchain

## Block Structure

The very first block of a Block-**chain** is called as *"Genesis"*

Each block in the Block-chain consist of:
- Data
- Hash of the previous block
- Hash or the fingerprint of the current block

The data residing in the block as well as the hash of the previous block, residing in the current block is hashed to create and store the fingerprint/hash of the current block.

### Nonce

Nonce is a random value or number, *unsigned 32-bit Integer* having the range of values from **0** to **4 Billion**, that is added into the block to change its target hash value. It is specifically helpful in solving puzzles when the created block's target hash is required to be brought into the puzzle's required hash range.

The **first** miner who successfully finds an optimal nonce and curates a block which would have the required target hash, is then announced as the winner. The winner is not given incentive instantly but rather the block submitted by the winner is first validated through algorithms and reflections. [[Architecture of Blockchain#1. End Users|End users]] also play a part in this verification. If the block is successfully validated, only then is the block appended to the Block-chain and the winner is given incentives.

In the world of Blockchain, the hashing power represents the computation power of a miner, representing the random hashes and computations that can be done by one's hardware at a time. Hence, ==it is quite possible with someone having the required or higher computation power to try out all nonce values ranging from 0 to 4 Billion.==
Therefore, *the higher the hashing power, the higher the probability of solving the puzzle*.

### Timestamp

A timestamp is also appended to the block to track the time the block was created and submitted. Therefore, the timestamp also plays a role in changing of a hash value. The increment of the timestamp is by default in seconds but could be customized in modern Blockchain. This means that within the duration the timestamp is to be changed, the miner has to try out all 4 Billion nonce values to solve the puzzle.
The interesting part is, even if all nonce values are tried within that interval, it is still possible for puzzle to not be solved. Ultimately the miner may also have to replace underlying data and recompute all 4 Billion hashes within the same interval of timestamp. This is known as *changing block configurations*.

- The timestamp is in the Unix timestamp format.
- When the puzzle is solved, the timestamp contained within it is locked and is no longer incremented. Definitely, this is so that the computed hash would be correct and verifiable.
	- **Important for Mid**

## Mining Pools

Mining Pools allow multiple miners to form a group together and mine together. This has the advantage that weak miners (with weak computation power) are also able to participate in some extent.

The reward of the mined block could be distributed equally or according to some established customized and enforced agreement.

This definitely could lead to the [[./Consensus Protocols#51% Attack|51% Attack]], where a group of ASIC machine owners form a group together.
