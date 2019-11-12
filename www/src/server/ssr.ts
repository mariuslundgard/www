import "./moduleAlias";
import { NowRequest, NowResponse } from "@now/node";
import { renderToStream } from "@popeindustries/lit-html-server";
import { Layout } from "./templates";
import { BASE_URL } from "../constants";
import { Content, MetaTags, Props } from "../screens/home";

export default (_: NowRequest, res: NowResponse) => {
  const state: Props = {
    baseUrl: BASE_URL,
    description:
      "I’m a designer and visual storyteller working mainly with digital product design, web technology, art direction and branding.",
    siteName: "Marius Lundgård",
    title: "Marius Lundgård"
  };

  renderToStream(
    Layout({
      content: Content(state),
      metaTags: MetaTags(state),
      state
    }) as any
  ).pipe(res);
};
