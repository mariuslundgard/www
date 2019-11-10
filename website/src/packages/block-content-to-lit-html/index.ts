import { html } from "lit-html";
import { buildMarksTree } from "./buildMarksTree";
import { generateKeys } from "./generateKeys";
import { mergeSerializers } from "./mergeSerializers";
import { nestLists } from "./nestLists";
import { defaultSerializers, serializeSpan } from "./serializers";

function isList(block: any) {
  return block._type === "list" && block.listItem;
}

function isListItem(block: any) {
  return block._type === "block" && block.listItem;
}

function isSpan(block: any) {
  return typeof block === "string" || block.marks || block._type === "span";
}

const BlockContentList = (node: any, serializers: any = {}) => {
  const type = node.listItem;
  const level = node.level;
  const key = node._key;
  const children = node.children.map((child: any, index: number) =>
    BlockContentNode(child, index, serializers)
  );

  return serializers.list({
    key,
    level,
    type,
    // options,
    children
  });
};

const BlockContentListItem = (node: any, index: number, serializers: any = {}) => {
  // const key = node._key;
  const tree = buildMarksTree(node);
  const children: any = tree.map((child, childIndex) =>
    BlockContentNode(child, childIndex, serializers)
  );

  // return html`
  //   <li>${children}</li>
  // `;

  return serializers.listItem({
    node,
    children,
    index,
    //options,
    serializers
  });
};

// const BlockContentSpan = (node: any, serializers: any = {}) => {
//   // console.log("BlockContentSpan", node);

//   if (typeof node === "string") return node;

//   const tree = buildMarksTree(node);
//   const children: any = tree.map((childNode, i, siblings) =>
//     BlockContentNode(childNode, serializers, i, siblings, true)
//   );

//   if (node.mark === "strong") {
//     return html`
//       <strong>${children}</strong>
//     `;
//   }

//   if (node.mark === "em") {
//     return html`
//       <em>${children}</em>
//     `;
//   }

//   if (node.mark._type === "link") {
//     return html`
//       <a href="${node.mark.href}">${children}</a>
//     `;
//   }

//   console.log(node);

//   return html`
//     BlockContentSpan
//   `;
// };

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
  // const blockProps = {
  //   key: node._key || `block-${index}`,
  //   node: node,
  //   isInline,
  //   serializers
  //   // options
  // };

  // TODO
  // console.log("TODO", blockProps);
  // return h(serializers.block, blockProps, children)

  return html`
    <p>${children}</p>
  `;
};

function findListItemIndex(node: any, siblings: any) {
  let index = 0;

  for (let i = 0; i < siblings.length; i++) {
    if (siblings[i] === node) {
      return index;
    }

    if (!isListItem(siblings[i])) {
      continue;
    }

    index++;
  }

  return index;
}

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
    return BlockContentListItem(node, findListItemIndex(node, siblings), serializers);
  }

  if (isSpan(node)) {
    return serializeSpan(
      node,
      serializers,
      index //, options
    );
  }

  return BlockContentBlock(node, serializers, index, isInline);
};

const defaults = { imageOptions: {} };

export const BlockContent = (rawBlocks: any[], props: any = {}) => {
  const _props = { ...defaults, ...props };
  const keyedBlocks = generateKeys(rawBlocks);
  const blocks: any[] = nestLists(keyedBlocks);
  const serializers = mergeSerializers(defaultSerializers, _props.serializers || {});

  return html`
    <div>
      ${blocks.map((node, index) => BlockContentNode(node, serializers, index))}
    </div>
  `;
};
