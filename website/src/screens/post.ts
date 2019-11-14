import { html } from "lit-html";
import { BlockContent } from "../components/blockContent";

export interface Props {
  body: any[];
  published: string;
  title: string;
  siteName: string;
}

export const MetaTags = ({ title, siteName }: Props) => html`
  <title>${title} – ${siteName}</title>
`;

const serializers = {};

export const Content = ({ body, published, title }: Props) => {
  return html`
    <div class="ml-screen">
      <h1 class="ml-screen__title">${title}</h1>
      <div>${published}</div>
      ${body
        ? html`
            <div>${BlockContent(body, serializers)}</div>
          `
        : html``}
    </div>
  `;
};
