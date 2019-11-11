import { NowRequest, NowResponse } from "@now/node";
import { html, renderToStream } from "@popeindustries/lit-html-server";
import { Layout } from "./templates";

const MetaTags = (data: any) => html`
  <title>Screen not found: ${data.url} – ${data.siteName}</title>
`;

const Content = (data: any) => html`
  <div class="ml-screen">
    <h1 class="ml-screen__title">Screen not found: ${data.url}</h1>
    <div class="ml-screen__content">
      <p>The screen could not be found in the application.</p>
    </div>
  </div>
`;

export default (req: NowRequest, res: NowResponse) => {
  const data = {
    url: req.url,
    siteName: "Marius Lundgård"
  };
  renderToStream(
    Layout({
      metaTags: MetaTags(data),
      content: Content(data)
    })
  ).pipe(res);
};
