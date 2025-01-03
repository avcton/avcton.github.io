import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"

export const ConvertQueryParamToAnchor: QuartzTransformerPlugin = () => {
  return {
    name: "ConvertQueryParamToAnchor",
    markdownPlugins() {
      return [() => {
        return (tree, file) => {
          // Regular expression to match '?p=<number>' at the end of the URL
          const queryParamRegex = /\?p=(\d+)$/

          // Use unist-util-visit to traverse the tree and find link nodes
          visit(tree, "link", (node) => {
            // Check if the URL ends with '?p=<number>'
            if (queryParamRegex.test(node.url)) {
              // Replace '?p=<number>' with '#page=<number>' in the URL
              node.url = node.url.replace(queryParamRegex, (_: any, pageNumber: any) => `#page=${pageNumber}`)
            }
          })
        }
      }]
    }
  }
}
