import { NowRequest, NowResponse } from "@now/node";
import * as fragments from "./fragments";

interface Data {
  siteName: string;
  url?: string;
}

const html = (data: Data) => `<!DOCTYPE html>
<html class="no-js no-online no-standalone" lang="en-US">
  <head>
    ${fragments.commonMetaTags}
    <title>Not found – ${data.siteName}</title>
    ${fragments.styleTags}
  </head>
  <body>
    <div id="ml-root">
      <div class="ml-screen">
        <h1 class="ml-screen__title">Screen not found: ${data.url}</h1>
        <div class="ml-screen__content">
          <p>The screen could not be found in the application.</p>
        </div>
      </div>
    </div>
  </body>
</html>
`;

export default (req: NowRequest, res: NowResponse) => {
  res.status(404);
  res.send(html({ url: req.url, siteName: "Marius Lundgård" }));
};
