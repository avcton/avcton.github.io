import { visit } from "unist-util-visit";
import { QuartzTransformerPlugin } from "../types";

export const RemoveLastDivider: QuartzTransformerPlugin = () => {
  return {
    name: "RemoveLastDivider",
    markdownPlugins() {
      return [() => {
        return (tree, file) => {
          let firstNodeExplored = false;

          // Use unist-util-visit to traverse the tree
          visit(tree, (node, index, parent) => {
            if (!firstNodeExplored && node.type === 'thematicBreak') {
              // Ensure parent and index are valid
              if (parent && typeof index === 'number') {
                // Remove the node by splicing it out of the parent
                parent.children.pop();
              }
            }
            // Set firstNodeExplored to true after processing the first node
            // Also make sure that we skip root node
            if (node.type !== 'root'){
              firstNodeExplored = true;
            }
          }, true);
        };
      }];
    }
  };
};
