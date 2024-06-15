import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"

export const TransformHeadings: QuartzTransformerPlugin = () => {
  return {
    name: "TransformHeadings",
    markdownPlugins() {
      return [() => {
        return (tree, file) => {
          // Use unist-util-visit to traverse the tree and find heading nodes
          visit(tree, "heading", (node) => {
            // Check the depth of the heading node
            switch (node.depth) {
              case 1:
                node.depth = 2; // Convert H1 to H2
                break;
              case 2:
                node.depth = 3; // Convert H2 to H3
                break;
              case 3:
                node.depth = 4; // Convert H3 to H4
                break;
              case 4:
                node.depth = 5; // Convert H4 to H5
                break;
              case 5:
                node.depth = 6; // Convert H5 to H6
                break;
              case 6:
                // Convert H6 to strong (bold) text
                node.type = 'strong';
                node.depth = null; // Remove depth information
                node.children = [
                  { type: 'text', value: node.children[0].value + ':' } // Append colon
                ];
                break;
              default:
                break;
            }
          })
        }
      }]
    }
  }
}
