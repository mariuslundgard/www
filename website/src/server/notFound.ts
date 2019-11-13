import "./moduleAlias";
import { NowRequest, NowResponse } from "@now/node";
import { renderToStream } from "@popeindustries/lit-html-server";
import { Layout } from "./templates";
import { Content, MetaTags, Props } from "../screens/notFound";

export default (req: NowRequest, res: NowResponse) => {
  const state: Props = {
    url: req.url || "/",
    siteName: "Marius Lundgård"
  };

  res.status(404);

  renderToStream(
    Layout({
      content: Content(state),
      metaTags: MetaTags(state),
      state
    }) as any
  ).pipe(res);
};
