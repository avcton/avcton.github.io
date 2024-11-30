---
title: Assignment 4
date: 2024-05-06T19:54:40Z
lastmod: 2024-05-14T19:08:41Z
---

## Q.

**Write a single page summary of the uploaded research paper “The Google File System”**

[The Google File System.pdf](assets/The%20Google%20File%20System-20240506195502-u9u4ujg.pdf)

### Introduction

The Google File System (GFS) is a scalable distributed file system designed and implemented by Google to meet their data processing needs. It share many goals with previous distributed file systems, which include performance, scalability, reliability, and availability. Also, it is designed by taking into account the key observations of Google’s application workloads, thus aiming to deliver high performance to numerous clients.

### Architecture

GFS operates in a cluster which is accessed by multiple clients and consists of a single master server and multiple chunkservers. Key design choices include using a single master for simplicity and in-memory metadata for fast operation, as well as decoupling data and control flows for efficient use of the network.

The master manages the file namespace, access control, file-to-chunk mapping, and chunk location information. It also handles some system-wide activities like chunk lease management, garbage collection and is also responsible to send heartbeat messages to each chunkserver, issuing instructions and gathering the status.

The chunkservers on the other hand, store fixed-size 64MB chunk replicas on local disks and handle read/write requests from clients based on chunk handles and byte ranges.

Then we have the clients which interact with the master for metadata operations, but communicate directly with chunkservers for data transfer, minimising the master’s involvement so that it can focus on management activities.

### Design Observations

The following observations form up from the above proposed architecture design:

Firstly, failures are common due to the use of numerous inexpensive hardware components. Therefore, fault tolerance, error detection, and automatic recovery are essential. Secondly, GFS handles very large files, often multi-gigabyte in size. Therefore, traditional small file management were inefficient for Google’s needs. Thirdly, files are mostly appended rather than overwritten. This pattern leads to optimisations in appending data. Lastly, the file system and its applications are designed together, resulting in a simplified consistency model and the introduction of operations like atomic append.

### Fault Tolerence

The GFS is designed to handle frequent component failures through two main strategies: Fast Recovery and Chunk Replication. In Fast Recovery, both the master and chunkservers can restore their state and start up quickly. While in case of Chunk Replication, each chunk is replicated on multiple chunkservers, with the default being three replicas. The master monitors chunk replication and automatically creates new replicas as needed. These replicas can the be used for recovery purposes. Additionally, chunkservers use checksumming to detect data corruption, and the master replicates its critical metadata for reliability.

### Performance

GFS has been widely deployed within Google, with the largest clusters providing hundreds of terabytes of storage across thousands of disks on over a thousand machines. Measurements from these production clusters demonstrate the ability to sustain high read rates (up to 600 MB/s) and write rates (up to 100 MB/s) across hundreds of clients.

### Conclusion

The Google File System is a scalable, fault-tolerant distributed file system designed to meet the needs of Google’s large-scale, data-intensive applications. By focusing on the realities of component failures, large file sizes, and append-oriented workloads, GFS provides high performance and reliability on commodity hardware. This system has become an essential part of Google’s storage infrastructure, supporting both service delivery and research projects with vast data requirements.
