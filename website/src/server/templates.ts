import { unsafeHTML } from "@popeindustries/lit-html-server/directives/unsafe-html";
import { html } from "lit-html";
import colors from "../colors";
import { FEATURE_GA, STATIC_BASE_PATH } from "../constants";

export const GATags = () => html`
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-64128588-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "UA-64128588-1");
  </script>
`;

const StyleTags = () => html`
  <style>
    html {
      font: 100%/1.25 -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Open Sans, Helvetica Neue, sans-serif;
      font-weight: 600;
    }
    body {
      background: ${colors.black};
      color: ${colors.gray["100"]};
      -webkit-font-smoothing: antialiased;
      margin: 0;
    }
    html,
    body,
    #ml-root {
      height: 100%;
    }
    .ml-screen {
      padding: 2.5em 1.5em;
    }
    .ml-screen__title {
      font: inherit;
      font-size: 1.125em;
      margin: 0;
    }
    .ml-screen__subtitle {
      color: ${colors.gray["400"]};
      font: inherit;
      font-size: 1.125em;
      margin: 0;
    }
    .ml-screen__content {
      max-width: 327px;
      margin-top: 2em;
    }
    .ml-screen__content p {
      font-size: 1.125em;
      margin: 1em 0 0;
    }
    .ml-screen__content a {
      color: ${colors.yellow};
      text-decoration: none;
    }
    .ml-screen__content a:visited {
      color: ${colors.gray["400"]};
    }
    @media (hover: hover) {
      .ml-screen__content a:hover {
        color: inherit;
      }
    }
  </style>
`;

const CommonMetaTags = () => html`
  <link
    rel="Copyright"
    title="Copyright Marius Lundgård"
    href="https://mariuslundgard.com/license"
  />
  <link href="${STATIC_BASE_PATH}/apple-touch-icon.png" rel="apple-touch-icon" />
  <link
    href="${STATIC_BASE_PATH}/apple-touch-icon-precomposed.png"
    rel="apple-touch-icon-precomposed"
  />
  <link href="${STATIC_BASE_PATH}/safari-pinned-tab.svg" rel="mask-icon" color="#${colors.black}" />
  <link
    href="${STATIC_BASE_PATH}/android-chrome-192x192.png"
    sizes="192x192"
    rel="icon"
    type="image/png"
  />
  <link href="${STATIC_BASE_PATH}/favicon-96x96.png" sizes="96x96" rel="icon" type="image/png" />
  <link href="${STATIC_BASE_PATH}/favicon-32x32.png" sizes="32x32" rel="icon" type="image/png" />
  <link href="${STATIC_BASE_PATH}/favicon-16x16.png" sizes="16x16" rel="icon" type="image/png" />
  <link rel="manifest" href="${STATIC_BASE_PATH}/manifest.json" />
  <meta name="apple-mobile-web-app-title" content="Marius Lundgård" />
  <meta name="apple-mobile-web-app-capable" />
  <meta name="application-name" class="app-title" content="Marius Lundgård" />
  <meta name="theme-color" content="${colors.yellow}" />
`;

interface LayoutProps {
  content: any;
  metaTags?: any;
  state: any;
}

export const Layout = ({ content, metaTags, state }: LayoutProps) => html`
  <!DOCTYPE html>
  <html class="no-js no-online no-standalone" lang="en-US">
    <head>
      ${FEATURE_GA ? GATags() : html``}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      ${metaTags || html``} ${CommonMetaTags()} ${StyleTags()}
      <script>
        !(function() {
          "use strict";
          var html = document.documentElement;
          html.classList.remove("no-js");
          html.classList.add("js");
        })();
      </script>
    </head>
    <body>
      <div id="ml-root">
        ${content}
      </div>
      <script>
        window.__state = ${unsafeHTML(JSON.stringify(state))};
      </script>
      <script>
        import("/static/esm/main.js");
        window.supportsDynamicImport = true;
      </script>
      <script>
        if (!window.supportsDynamicImport) {
          var systemJsLoaderTag = document.createElement("script");
          systemJsLoaderTag.src = "https://unpkg.com/systemjs@2.0.0/dist/s.min.js";
          systemJsLoaderTag.addEventListener("load", function() {
            System.import("/static/system/main.js");
          });
          document.head.appendChild(systemJsLoaderTag);
        }
      </script>
    </body>
  </html>
`;

interface PreviewLayoutProps {
  state: any;
}

export const PreviewLayout = ({ state }: PreviewLayoutProps) => html`
  <!DOCTYPE html>
  <html class="no-js no-online no-standalone" lang="en-US">
    <head>
      ${FEATURE_GA ? GATags() : html``}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      ${CommonMetaTags()} ${StyleTags()}
      <script>
        !(function() {
          "use strict";
          var html = document.documentElement;
          html.classList.remove("no-js");
          html.classList.add("js");
        })();
      </script>
    </head>
    <body>
      <div id="ml-root"></div>
      <script>
        window.__state = ${unsafeHTML(JSON.stringify(state))};
      </script>
      <script>
        import("/static/esm/preview.js");
        window.supportsDynamicImport = true;
      </script>
      <script>
        if (!window.supportsDynamicImport) {
          var systemJsLoaderTag = document.createElement("script");
          systemJsLoaderTag.src = "https://unpkg.com/systemjs@2.0.0/dist/s.min.js";
          systemJsLoaderTag.addEventListener("load", function() {
            System.import("/static/system/preview.js");
          });
          document.head.appendChild(systemJsLoaderTag);
        }
      </script>
    </body>
  </html>
`;
