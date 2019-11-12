import { html } from "lit-html";

export interface Props {
  siteName: string;
  url: string;
}

export const MetaTags = ({ siteName, url }: Props) => html`
  <title>Screen not found: ${url} – ${siteName}</title>
`;

export const Content = ({ url }: Props) => html`
  <div class="ml-screen">
    <h1 class="ml-screen__title">Screen not found: ${url}</h1>
    <div class="ml-screen__content">
      <p>The screen could not be found in the application.</p>
    </div>
  </div>
`;
