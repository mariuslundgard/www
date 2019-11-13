import "./moduleAlias";
import { NowRequest, NowResponse } from "@now/node";
import { renderToStream } from "@popeindustries/lit-html-server";
import { PreviewLayout } from "./templates";

export default (_: NowRequest, res: NowResponse) => {
  renderToStream(PreviewLayout({ state: { screen: "post" } }) as any).pipe(res);
};
