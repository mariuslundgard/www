import { html } from "lit-html";
import { buildMarksTree } from "./buildMarksTree";

function isList(block: any) {
  return block._type === "list" && block.listItem;
}

function isListItem(block: any) {
  return block._type === "block" && block.listItem;
}

function isSpan(block: any) {
  return typeof block === "string" || block.marks || block._type === "span";
}

const BlockContentList = (node: any, serializers: any = {}) => html`
  BlockContentList
`;

const BlockContentListItem = (node: any, serializers: any = {}) => html`
  BlockContentListItem
`;

const BlockContentSpan = (node: any, serializers: any = {}) => {
  console.log("BlockContentSpan", node);

  if (typeof node === "string") return node;

  const tree = buildMarksTree(node);
  const children: any = tree.map((childNode, i, siblings) =>
    BlockContentNode(childNode, serializers, i, siblings, true)
  );

  if (node.mark === "strong") {
    return html`
      <strong>${children}</strong>
    `;
  }

  if (node.mark === "em") {
    return html`
      <em>${children}</em>
    `;
  }

  return html`
    BlockContentSpan
  `;
};

const BlockContentBlock = (
  node: any,
  serializers: any = {},
  index: number,
  isInline?: boolean
): any => {
  const tree = buildMarksTree(node);
  const children = tree.map((node, i, siblings) =>
    BlockContentNode(node, serializers, i, siblings, true)
  );
  const blockProps = {
    key: node._key || `block-${index}`,
    node: node,
    isInline,
    serializers
    // options
  };

  // TODO
  console.log("TODO", blockProps);
  // return h(serializers.block, blockProps, children)

  return html`
    <p>${children}</p>
  `;
};

const BlockContentNode = (
  node: any,
  serializers: any = {},
  index: number,
  siblings?: any,
  isInline?: boolean
) => {
  if (isList(node)) {
    return BlockContentList(node, serializers);
  }

  if (isListItem(node)) {
    return BlockContentListItem(node, serializers);
  }

  if (isSpan(node)) {
    return BlockContentSpan(node, serializers);
  }

  return BlockContentBlock(node, serializers, index, isInline);
};

export const BlockContent = (blocks: any[], serializers: any = {}) =>
  html`
    <div>
      ${blocks.map((node, index) => BlockContentNode(node, serializers, index))}
    </div>
  `;
