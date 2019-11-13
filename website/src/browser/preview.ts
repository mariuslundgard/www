import { html, render } from "lit-html";
import * as post from "../screens/post";

const rootElement = document.getElementById("ml-root");

const ErrorScreen = (err: Error) => html`
  <div>${err.message}</div>
`;

const UnknownScreen = (screenKey: string) => html`
  <div>Unknown screen: ${screenKey}</div>
`;

function renderScreen(data: any) {
  if (rootElement) {
    const urlParams = new URLSearchParams(window.location.search);
    const screenKey = urlParams.get("screen");

    if (screenKey === "post") {
      render(post.Content({ title: data.title, siteName: "ML" }), rootElement);
    } else {
      render(UnknownScreen(screenKey), rootElement);
    }
  } else {
    render(ErrorScreen(new Error("Missing root element")), rootElement);
  }
}

window.addEventListener("message", (event: any) => {
  const msg = event.data;
  if (typeof msg === "object" && msg.type === "data") {
    renderScreen(msg.data);
  }
});
