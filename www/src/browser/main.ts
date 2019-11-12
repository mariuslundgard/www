import { render } from "lit-html";

interface Screen {
  Content(props: any): any;
  MetaTags(props: any): any;
}

function resolveScreen(path: string): Promise<Screen> {
  if (path === "/") return import("../screens/home");
  return import("../screens/notFound");
}

const rootElement = document.getElementById("ml-root");
if (rootElement) {
  resolveScreen(window.location.pathname)
    .then(({ Content }) => {
      render(Content((window as any).__state), rootElement);
    })
    .catch(err => {
      if (window.console && console.error) {
        console.error(err);
      }
    });
}
