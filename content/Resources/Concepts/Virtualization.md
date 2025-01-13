---
title: Virtualization
date: 2024-12-31
date_created: 2024-12-31
date_modified: 2025-01-13
highlight: Resources/Concepts
publish: true
---

> Virtualization is the process of creating virtual versions of physical resources, such as servers, storage devices, networks, or operating systems, using specialized software. It allows multiple virtual environments to run on a single physical hardware system, improving efficiency and flexibility.

## How it Works

Virtualization uses a **hypervisor** (or virtual machine monitor) to abstract hardware resources and allocate them to virtual machines (VMs). Each VM operates as if it were an independent computer, with its own operating system and applications, even though it shares the underlying hardware with other VMs.

## Types of Virtualization / Hypervisor

![[../../attachments/image-20241229225003464.jpg|image-20241229225003464.jpg]]

1. **Hardware-Based** (Type 1):
   - Uses a hypervisor to abstract physical hardware.
2. **Operating System-Based** (Type 2):
   - Multiple virtual environments share the same OS.
