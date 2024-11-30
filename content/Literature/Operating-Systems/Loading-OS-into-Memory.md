---
title: Loading OS into Memory
date: 2024-01-27T14:33:17Z
lastmod: 2024-01-27T14:34:21Z
---

In the context of loading the operating system into RAM, ROM is involved during the initial stages of the boot process. Here’s a simplified overview:

1. **BIOS/UEFI Firmware (ROM-based):**  When a computer starts up, it typically begins executing code from a special type of ROM called BIOS (Basic Input/Output System) or UEFI (Unified Extensible Firmware Interface). This firmware is stored in ROM and contains low-level instructions for initialising hardware and initiating the boot process.
2. **Bootloader:**  The BIOS/UEFI firmware locates and executes a bootloader. The bootloader is a small program stored in a specific location on the storage device (often the boot sector of a hard drive or a partition). The bootloader’s job is to load the initial part of the operating system into RAM.
3. **Operating System Kernel Loading:**  The bootloader hands over control to the operating system’s kernel, which is typically loaded into RAM. The kernel takes charge of the system’s resources and processes.

ROM is crucial in the early stages of the boot process for storing firmware (BIOS/UEFI) and fetching bootloader code, once the operating system is loaded into RAM, it operates from there. RAM (Random Access Memory) is volatile memory that loses its contents when the power is turned off, but it provides fast and temporary storage for actively running programs, including the operating system kernel.
