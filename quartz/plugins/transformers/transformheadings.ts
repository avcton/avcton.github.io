import { QuartzTransformerPlugin } from "../types";
import { visit } from "unist-util-visit";

export const TransformHeadings: QuartzTransformerPlugin = () => {
  return {
    name: "TransformHeadings",
    markdownPlugins() {
      return [() => {
        return (tree, file) => {
          let hasH1Heading = false;

          // First pass: Check if there's at least one H1 heading
          visit(tree, "heading", (node) => {
            if (node.depth === 1) {
              hasH1Heading = true;
            }
          });

          // If there's at least one H1 heading, transform the headings
          if (hasH1Heading) {
            visit(tree, "heading", (node) => {
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
                  node.type = 'paragraph';
                  node.children = [
                    {
                      type: 'strong',
                      children: node.children,
                    },
                    {
                      type: 'text',
                      value: ':',
                    },
                  ];
                  break;
                default:
                  break;
              }
            });
          }
        };
      }];
    }
  };
};
