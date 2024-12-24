import path from "path"
import fs from "fs/promises"

// Constants
const VAULT_DIR = "/Users/avcton/Mind Palace"
const ATTACHMENTS_DIR = path.join(VAULT_DIR, "_attachments")

// Helper function to log warnings
const logWarning = (message) => {
  console.warn(`[WARNING]: ${message}`)
}

// Helper function to copy files to the output directory
const copyFileToOutput = async (sourcePath, destinationPath) => {
  await fs.mkdir(path.dirname(destinationPath), { recursive: true })
  await fs.copyFile(sourcePath, destinationPath)
}

// Parse markdown file for Wikilinks and Markdown links
const parseMarkdownForLinks = async (filePath) => {
  const content = await fs.readFile(filePath, "utf8")
  const attachmentLinks = []
  const noteLinks = []

  // Match Wikilinks [[...]]
  const wikilinkRegex = /\[\[(.+?)\]\]/g
  let match
  while ((match = wikilinkRegex.exec(content)) !== null) {
    const link = match[1]
    if (link.includes(".")) {
      attachmentLinks.push(link)
    } else {
      noteLinks.push(link.split("#")[0]) // Extract note name without heading
    }
  }

  // Match standard Markdown attachment links ![](path)
  const markdownAttachmentRegex = /!\[.*?\]\((.+?)\)/g
  while ((match = markdownAttachmentRegex.exec(content)) !== null) {
    attachmentLinks.push(match[1])
  }

  // Match standard Markdown note links [note name](path/to/note.md)
  const markdownNoteRegex = /\[(.+?)\]\((.+?\.md)\)/g
  while ((match = markdownNoteRegex.exec(content)) !== null) {
    noteLinks.push(path.basename(match[2], ".md")) // Add the note name without extension
  }

  return { attachments: attachmentLinks, notes: noteLinks }
}

// Resolve and copy attachments to a centralized output folder (references/attachments)
const resolveAndCopyAttachments = async (
  attachments,
  outputDir,
  uniqueAttachments,
  isReference = false,
) => {
  for (const attachment of attachments) {
    let resolvedPath = path.join(ATTACHMENTS_DIR, attachment) // Check global attachments folder
    let attachmentOutputDir = isReference
      ? path.join(outputDir, "references", "attachments")
      : path.join(outputDir, "attachments")

    // Check if the attachment exists in the global attachments folder
    try {
      await fs.access(resolvedPath)
    } catch {
      // If not found, search throughout the vault
      resolvedPath = await findFileInVault(VAULT_DIR, attachment)
      if (!resolvedPath) {
        logWarning(`Attachment not found anywhere in the vault: ${attachment}`)
        continue
      }
    }

    const destinationPath = path.join(attachmentOutputDir, path.basename(resolvedPath))

    // Check for duplicates before copying
    if (!uniqueAttachments.has(destinationPath)) {
      await copyFileToOutput(resolvedPath, destinationPath)
      uniqueAttachments.add(destinationPath)
    }
  }
}

// Resolve and copy linked notes to references folder (flat structure)
const resolveAndCopyNotes = async (
  vaultDir,
  notes,
  outputDir,
  uniqueNotes,
  visitedNotes,
  inputFolder,
) => {
  const referenceDir = path.join(outputDir, "references")

  for (const note of notes) {
    if (visitedNotes.has(note)) {
      continue // Skip already visited notes to avoid infinite recursion
    }

    visitedNotes.add(note)

    // Check if the note exists in the input folder
    const notePathInInputFolder = path.join(inputFolder, `${note}.md`)
    let resolvedPath
    try {
      await fs.access(notePathInInputFolder) // Note exists in input folder
      resolvedPath = notePathInInputFolder
    } catch {
      // If not found in the input folder, look for it in the vault
      resolvedPath = await findFileInVault(vaultDir, `${note}.md`)
      if (!resolvedPath) {
        logWarning(`Note not found: ${note}`)
        continue
      }
    }

    // If the note is outside the input folder, copy it to the references folder
    if (resolvedPath !== notePathInInputFolder) {
      const destinationPath = path.join(referenceDir, path.basename(resolvedPath))

      // Check for duplicates before copying
      if (!uniqueNotes.has(destinationPath)) {
        await copyFileToOutput(resolvedPath, destinationPath)
        uniqueNotes.add(destinationPath)

        // Process the attachments for this note
        const { attachments } = await parseMarkdownForLinks(resolvedPath)
        const uniqueAttachments = new Set()
        await resolveAndCopyAttachments(attachments, outputDir, uniqueAttachments, true)

        // Recursively resolve and copy nested linked notes
        const { notes: nestedNotes } = await parseMarkdownForLinks(resolvedPath)
        await resolveAndCopyNotes(
          vaultDir,
          nestedNotes,
          outputDir,
          uniqueNotes,
          visitedNotes,
          inputFolder,
        )
      }
    }
  }
}

// Find file in the vault recursively
const findFileInVault = async (vaultDir, fileName) => {
  const files = await fs.readdir(vaultDir, { withFileTypes: true })

  for (const file of files) {
    const filePath = path.join(vaultDir, file.name)
    if (file.isDirectory()) {
      const result = await findFileInVault(filePath, fileName)
      if (result) return result
    } else if (file.name === fileName) {
      return filePath
    }
  }

  return null
}

// Process a single markdown file (No recursion for linked notes)
const processMarkdownFile = async (vaultDir, filePath, outputDir, visitedNotes, inputFolder) => {
  const destinationPath = path.join(outputDir, path.basename(filePath))

  await copyFileToOutput(filePath, destinationPath)

  const { attachments, notes } = await parseMarkdownForLinks(filePath)

  // Resolve and copy attachments for the target note (stored in output/attachments)
  const uniqueAttachments = new Set()
  await resolveAndCopyAttachments(attachments, outputDir, uniqueAttachments)

  // Resolve and copy linked notes (stored in output/references)
  const uniqueNotes = new Set()
  await resolveAndCopyNotes(vaultDir, notes, outputDir, uniqueNotes, visitedNotes, inputFolder)
}

// Main function to handle user input
const main = async () => {
  const inputPath = process.argv[2]

  if (!inputPath) {
    console.error("Usage: node script.js <inputPath>")
    process.exit(1)
  }

  const fullPath = path.join(VAULT_DIR, inputPath)
  const stats = await fs.stat(fullPath)

  // Determine the output directory name dynamically based on input file/folder
  const outputDir = path.join(process.cwd(), path.basename(fullPath).replace(/\.md$/, ""))

  try {
    if (stats.isDirectory()) {
      const files = await fs.readdir(fullPath)
      for (const file of files) {
        if (file.endsWith(".md")) {
          const visitedNotes = new Set()
          await processMarkdownFile(
            VAULT_DIR,
            path.join(fullPath, file),
            outputDir,
            visitedNotes,
            fullPath,
          )
        }
      }
    } else if (stats.isFile() && fullPath.endsWith(".md")) {
      const visitedNotes = new Set()
      await processMarkdownFile(
        VAULT_DIR,
        fullPath,
        outputDir,
        visitedNotes,
        path.dirname(fullPath),
      )
    }
  } catch (err) {
    console.error(`Error: ${err.message}`)
  }
}

main().catch((err) => console.error(err))
