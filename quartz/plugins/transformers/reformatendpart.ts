import { visit } from "unist-util-visit";
import { QuartzTransformerPlugin } from "../types";

// Regular expression to match whitespace, zero width space, and other non-printable characters
const isStringEmpty = (str: string) => /^[\u200B-\u200D\uFEFF]*$/.test(str);

export const ReformatEndPart: QuartzTransformerPlugin = () => {
  return {
    name: "ReformatEndPart",
    markdownPlugins() {
      return [() => {
        return (tree, file) => {
          let firstNodeExplored = false;

          // Use unist-util-visit to traverse the tree
          visit(tree, (node, index, parent) => {
            if (node.type !== 'root'){
              let isNodeEmpty: boolean = false;

              if (node.type === 'paragraph') {
                isNodeEmpty = node.children.every((child: { type: string, value: string }) => child.type === 'text' && isStringEmpty(child.value))
              }
              if (node.type === 'text') {
                isNodeEmpty = isStringEmpty(node.value)
              }

              // Remove empty paragraphs, texts or last thematic break
              if (!firstNodeExplored && (isNodeEmpty || node.type === 'thematicBreak')) {
                // Ensure parent and index are valid
                if (parent && typeof index === 'number') {
                  // Remove the node by splicing it out of the parent
                  parent.children.splice(index, 1);
                }
              }
              else {
                firstNodeExplored = true;
              }
            }
          }, true);
        };
      }];
    }
  };
};
