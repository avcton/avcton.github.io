---
description: My SSG's custom single/bulk note-exporting script for Obsidian.
date: 2024-12-25
date_modified: 2025-03-08
highlight: Projects
publish: true
untrack_tasks: true
---

> A Node.js utility for exporting linked notes and attachments from an Obsidian vault. This script resolves and copies notes, images, and other attachments to a specified output directory, preserving file relationships while minimizing duplication.

> [!tip] Project Source
> This project is open-source and you can find it [here](https://github.com/avcton/obsidian-exporter).

For note exporting purposes, so I can publish them to my [portfolio](https://avcton.github.io/) and [blog](https://avcton.github.io/Garden), I have been working on building a simple script, that takes a note or folder from your Obsidian vault and exports all of it's linked content (attachments as well as outgoing links) in a well defined format. This allows only the required content and assets to be taken from the vault rather than other private stuff. Obsidian do have raw markdown files which we can use directly in this case but assets and linked notes are not structured to use in that case: one would have to manually find and take out referenced attachments and linked notes from the entire vault. Also, I don't want unnecessary assets to be taken from my Obsidian vault just for publishing a simple markdown note. So the idea is to keep exported files as they are and only get the linked attachments such as videos, images or just anything, along with the mentioned or linked note(s) by carefully navigating through the vault.

> [!info]
> No community plugin fulfill the above requirements, the moment this script is written. There do are some of them which share somewhat of this vision but most of them don't export `.pdf` and other file formats, attached to the exported note or others simply lack in exporting an entire folder from the vault.

Features/Things been integrated so far:

- [x] Export a single note
- [x] Export an entire folder
- [x] Resolve attachment Wikilinks through a global attachments folder and then entire vault
- [x] Resolve outgoing Wikilinks to other notes through searching in entire vault
- [x] Export all *to be exported notes* to root folder without preserving their directory structure
- [x] Export attachments for all *to be exported notes* to the `attachments` folder
- [x] Export all linked notes to `references` folder
- [x] Export attachments for all linked notes to `attachments` folder
- [x] Export nested linked notes directly in `references` folder, flattening the folder structure
- [x] Make sure that standard markdown links are also processed along with Wikilinks
- [x] Handle URLs correctly so they are not processed as attachments or linked notes
- [x] Handle relative and absolute paths in Wiki and Markdown links
- [x] Handle Excalidraw embeds to use corresponding PNGs as their replacement
- [x] Deal with duplicate file names by content hashing
- [ ] Don't export an empty `references` folder if no notes are linked to any exported note
- [ ] If linked note is already in a subfolder, export linked note to it instead of `references`

## Usage

Follow the steps under this heading to try the script for yourself:

### Prerequisites

- Node.js (v16 or later)
- An existing Obsidian vault
- Global attachments directory within vault (can also work without this but not tested)
- Optional: Excalidraw plugin setup to export/save pngs with corresponding drawings

### Setup

1. Clone this repository.
2. Update the `VAULT_DIR` constant in `obsidian-exporter.js` to point to your Obsidian vault.

### Run the Script

```bash
node obsidian-exporter.js <input-markdown-file/folder> <output-directory>
```

#### Example

For exporting a single file::

```bash
node obsidian-exporter.js "/Users/avcton/Vault/Note.md" "/Users/avcton/Exported"
```

For exporting an entire folder:

```bash
node obsidian-exporter.js "/Users/avcton/Vault/Projects" "/Users/avcton/Exported"
```

## How It Works

1. Parses the specified Markdown file for links to other notes and attachments.
2. Resolves paths using Obsidian's link resolution logic.
3. Copies linked files to the output directory, organizing attachments and notes.
4. Ensures unique filenames for conflicting files by appending SHA-256 hashes to filenames.

---

> [!summary] Archival Notice
> This script helped me out for a long long time, however a much similar but advanced Obsidian community plugin known as [Enveloppe](https://github.com/Enveloppe/obsidian-enveloppe) soon emerged as a great alternative for me. I have been using that since then and there felt no need for me to manage this script anymore. I do will get back to it if [Enveloppe](https://github.com/Enveloppe/obsidian-enveloppe) is broken or no more around.
