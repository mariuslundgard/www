import { html } from "lit-html";

export interface Props {
  title: string;
  siteName: string;
}

export const MetaTags = ({ title, siteName }: Props) => html`
  <title>${title} – ${siteName}</title>
`;

export const Content = ({ title }: Props) => {
  return html`
    <div class="ml-screen">
      <h1 class="ml-screen__title">${title}</h1>
    </div>
  `;
};
