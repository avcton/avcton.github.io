import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"

export const RemoveInitialH1: QuartzTransformerPlugin = () => {
  return {
    name: "RemoveInitialH1",
    markdownPlugins() {
      return [() => {
        return (tree, file) => {
          // Extract the title from the front-matter
          const frontmatter = file.data.frontmatter
          const pageTitle = frontmatter?.title

          if (!pageTitle) return

          // Variable to track if the first H1 heading has been removed
          let firstHeadingRemoved = false

          // Use unist-util-visit to traverse the tree
          visit(tree, "heading", (node, index, parent) => {
            if (!firstHeadingRemoved && node.depth === 1) {
              // Get the text content of the heading
              const headingText = node.children.map((child: { value: any }) => child.value).join('')

              // Check if the heading text matches the page title
              if (headingText.trim() === pageTitle.trim()) {
                // Ensure parent and index are valid
                if (parent && typeof index === 'number') {
                  // Remove the node by splicing it out of the parent's children array
                  parent.children.splice(index, 1)
                  firstHeadingRemoved = true
                }
              }
            }
          })
        }
      }]
    }
  }
}
