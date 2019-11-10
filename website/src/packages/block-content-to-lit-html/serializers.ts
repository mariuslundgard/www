import { html } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import { getImageUrl } from "./getImageUrl";

// Low-level block serializer
function Block(props: any) {
  const { node, serializers, options, isInline, children } = props;
  const blockType = node._type;
  const serializer = serializers.types[blockType];
  if (!serializer) {
    throw new Error(
      `Unknown block type "${blockType}", please specify a serializer for it in the \`serializers.types\` prop`
    );
  }

  return serializer({ node, options, isInline, children });
}

// Low-level span serializer
function Span(props: any) {
  const { mark, children } = props.node;
  const isPlain = typeof mark === "string";
  const markType = isPlain ? mark : mark._type;
  const serializer = props.serializers.marks[markType];
  if (!serializer) {
    // @todo Revert back to throwing errors?
    // eslint-disable-next-line no-console
    console.warn(
      `Unknown mark type "${markType}", please specify a serializer for it in the \`serializers.marks\` prop`
    );
    return props.serializers.markFallback({ children });
  }

  return serializer({ node: props.node, children });
}

// Low-level list serializer
function List(props: any) {
  if (props.type === "bullet") {
    return html`
      <ol>
        ${props.children}
      </ol>
    `;
  }

  return html`
    <ul>
      ${props.children}
    </ul>
  `;
}

// Low-level list item serializer
function ListItem(props: any) {
  const children =
    !props.node.style || props.node.style === "normal"
      ? // Don't wrap plain text in paragraphs inside of a list item
        props.children
      : // But wrap any other style in whatever the block serializer says to use
        props.serializers.types.block(props);

  return html`
    <li>${children}</li>
  `;
}

// Renderer of an actual block of type `block`. Confusing, we know.
function BlockType(props: any) {
  const style = props.node.style || "normal";

  // All tags that match "h<number>" (HTML header elements)
  if (/^h\d/.test(style)) {
    return html`
      ${unsafeHTML(`<${style}>`)}${props.children}${unsafeHTML(`</${style}>`)}
    `;
  }

  return style === "blockquote"
    ? html`
        <blockquote>${props.children}</blockquote>
      `
    : html`
        <p>${props.children}</p>
      `;
}

// Serializers for things that can be directly attributed to a tag without any props
// We use partial application to do this, passing the tag name as the first argument
function RawMark(tag: any, props: any) {
  return html`
    ${unsafeHTML(`<${tag}>`)}${props.children}${unsafeHTML(`</${tag}>`)}
  `;
}

function Underline(props: any) {
  const style = `
      text-decoration: underline
    `;

  return html`
    <span style=${style}>${props.children}</span>
  `;
}

function StrikeThrough(props: any) {
  return RawMark("del", props);
  // return html``
  // return h("del", null, props.children);
}

function Link(props: any) {
  // return h("a", { href: props.mark.href }, props.children);
  return html`
    <a href=${props.mark.href}>${props.children}</a>
  `;
}

function Image(props: any) {
  if (!props.node.asset) {
    return null;
  }

  if (props.isInline) {
    return html`
      <img src=${getImageUrl(props)} />
    `;
  }

  return html`
    <figure><img src=${getImageUrl(props)} /></figure>
  `;

  // const img = h("img", { src: getImageUrl(props) });
  // return props.isInline ? img : h("figure", null, img);
}

// Serializer that recursively calls itself, producing a hyperscript tree of spans
export function serializeSpan(
  span: any,
  serializers: any,
  index: any
  // , options: any
) {
  if (span === "\n" && serializers.hardBreak) {
    return serializers.hardBreak({ key: `hb-${index}` });
  }

  if (typeof span === "string") {
    if (serializers.text) {
      return serializers.text({ text: span });
    }

    return serializers.text ? serializers.text({ key: `text-${index}`, text: span }) : span;
  }

  let children: any = {};
  if (span.children) {
    // children = {
    //   children: span.children.map((child: any, i: number) =>
    //     serializeNode(child, i, span.children, true)
    //   )
    // };
  }

  const serializedNode = { ...span, ...children };

  return serializers.span({
    key: span._key || `span-${index}`,
    node: serializedNode,
    serializers
  });
}

export const HardBreak = () =>
  html`
    <br />
  `;

export const defaultMarkSerializers = {
  strong: RawMark.bind(null, "strong"),
  em: RawMark.bind(null, "em"),
  code: RawMark.bind(null, "code"),
  underline: Underline,
  "strike-through": StrikeThrough,
  link: Link
};

export const defaultSerializers = {
  // Common overrides
  types: {
    block: BlockType,
    image: Image
  },
  marks: defaultMarkSerializers,

  // Less common overrides
  list: List,
  listItem: ListItem,

  block: Block,
  span: Span,
  hardBreak: HardBreak,

  // Container element
  container: "div",

  // When we can't resolve the mark properly, use this renderer as the container
  markFallback: "span",

  // Allow overriding text renderer, but leave undefined to just use plain strings by default
  text: undefined,

  // Empty nodes (React uses null, hyperscript with empty strings)
  empty: ""
};
