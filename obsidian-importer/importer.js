import path from "path"
import fs from "fs/promises"

// Constants
const VAULT_DIR = "/Users/avcton/Mind Palace"

// Helper function to log warnings
const logWarning = (message) => {
  console.warn(`[WARNING]: ${message}`)
}

// Helper function to copy files to the output directory
const copyFileToOutput = async (sourcePath, destinationPath) => {
  await fs.mkdir(path.dirname(destinationPath), { recursive: true })
  await fs.copyFile(sourcePath, destinationPath)
  // Debug log
  // console.log(`Copied file from: ${sourcePath} to ${destinationPath}`)
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

  // Match standard Markdown links ![](path)
  const markdownLinkRegex = /!\[.*?\]\((.+?)\)/g
  while ((match = markdownLinkRegex.exec(content)) !== null) {
    attachmentLinks.push(match[1])
  }

  return { attachments: attachmentLinks, notes: noteLinks }
}

// Resolve and copy attachments to a centralized output folder (references/attachments)
const resolveAndCopyAttachments = async (
  vaultDir,
  attachments,
  noteDir,
  outputDir,
  uniqueAttachments,
  isReference = false,
) => {
  for (const attachment of attachments) {
    let resolvedPath = path.join(noteDir, "attachments", attachment)
    let attachmentOutputDir = isReference
      ? path.join(outputDir, "references", "attachments")
      : path.join(outputDir, "attachments")

    // If not found in attachments folder, search entire vault
    try {
      await fs.access(resolvedPath)
    } catch {
      resolvedPath = await findFileInVault(vaultDir, attachment)
      if (!resolvedPath) {
        logWarning(`Attachment not found: ${attachment}`)
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

// Resolve and copy linked notes to references folder (no subfolders)
const resolveAndCopyNotes = async (vaultDir, notes, outputDir, uniqueNotes, visitedNotes) => {
  const referenceDir = path.join(outputDir, "references")

  for (const note of notes) {
    if (visitedNotes.has(note)) {
      continue // Skip already visited notes to avoid infinite recursion
    }

    visitedNotes.add(note)

    const resolvedPath = await findFileInVault(vaultDir, `${note}.md`)
    if (!resolvedPath) {
      logWarning(`Note not found: ${note}`)
      continue
    }

    const destinationPath = path.join(referenceDir, path.basename(resolvedPath))

    // Debug log for checking paths
    // console.log(`Resolved note path: ${resolvedPath}`)
    // console.log(`Destination path for references: ${destinationPath}`)

    // Check for duplicates before copying
    if (!uniqueNotes.has(destinationPath)) {
      await copyFileToOutput(resolvedPath, destinationPath)
      uniqueNotes.add(destinationPath)

      // Process the attachments for this note
      const noteDir = path.dirname(resolvedPath)
      const { attachments } = await parseMarkdownForLinks(resolvedPath)
      const uniqueAttachments = new Set()
      await resolveAndCopyAttachments(
        vaultDir,
        attachments,
        noteDir,
        outputDir,
        uniqueAttachments,
        true,
      )

      // Recursively resolve and copy nested linked notes
      const { notes: nestedNotes } = await parseMarkdownForLinks(resolvedPath)
      await resolveAndCopyNotes(vaultDir, nestedNotes, outputDir, uniqueNotes, visitedNotes)
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
const processMarkdownFile = async (vaultDir, filePath, outputDir, visitedNotes) => {
  const relativePath = path.relative(vaultDir, filePath)
  const destinationPath = path.join(outputDir, relativePath)

  await copyFileToOutput(filePath, destinationPath)

  const { attachments, notes } = await parseMarkdownForLinks(filePath)

  // Resolve and copy attachments for the target note (stored in output/attachments)
  const noteDir = path.dirname(filePath)
  const uniqueAttachments = new Set()
  await resolveAndCopyAttachments(vaultDir, attachments, noteDir, outputDir, uniqueAttachments)

  // Resolve and copy linked notes (stored in output/references)
  const uniqueNotes = new Set()
  await resolveAndCopyNotes(vaultDir, notes, outputDir, uniqueNotes, visitedNotes)
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
  let outputDir
  if (stats.isDirectory()) {
    outputDir = path.join(process.cwd(), path.basename(fullPath))
  } else if (stats.isFile()) {
    outputDir = path.join(process.cwd(), path.basename(fullPath, ".md"))
  } else {
    console.error("Invalid input path: Must be a markdown file or folder")
    process.exit(1)
  }

  try {
    if (stats.isDirectory()) {
      const files = await fs.readdir(fullPath)
      for (const file of files) {
        if (file.endsWith(".md")) {
          const visitedNotes = new Set()
          await processMarkdownFile(VAULT_DIR, path.join(fullPath, file), outputDir, visitedNotes)
        }
      }
    } else if (stats.isFile() && fullPath.endsWith(".md")) {
      const visitedNotes = new Set()
      await processMarkdownFile(VAULT_DIR, fullPath, outputDir, visitedNotes)
    }
  } catch (err) {
    console.error(`Error: ${err.message}`)
  }
}

main().catch((err) => console.error(err))
