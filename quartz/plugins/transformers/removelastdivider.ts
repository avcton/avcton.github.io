import { QuartzTransformerPlugin } from "../types";
import { visit } from "unist-util-visit";

export const RemoveLastDivider: QuartzTransformerPlugin = () => {
  return {
    name: "RemoveLastDivider",
    markdownPlugins() {
      return [() => {
        return (tree, file) => {
          // Use unist-util-visit to traverse the Markdown AST (`tree`) looking for thematic breaks
          visit(tree, "thematicBreak", (node, index, parent) => {
            // Check if the current thematic break is the last one in its parent's children array
            const isLastThematicBreak = parent && parent.children[parent.children.length - 1] === node;

            if (isLastThematicBreak) {
              // Remove the thematic break node from its parent's children array
              parent.children.splice(index, 1);
            }
          });
        };
      }];
    }
  };
};
