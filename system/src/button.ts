import { html } from "lit-html";

interface Props {
  label: string;
}

export function Button(props: Props) {
  return html`
    <button>${props.label}</button>
  `;
}
