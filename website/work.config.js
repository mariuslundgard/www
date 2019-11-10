"use strict";

const path = require("path");

module.exports = {
  builds: [
    { src: "./src/browser/main.ts", target: "browser", format: "esm", dir: "./dist/static/esm" },
    {
      src: "./src/browser/main.ts",
      target: "browser",
      format: "system",
      dir: "./dist/static/system"
    },
    { src: "./src/browser/preview.ts", target: "browser", format: "esm", dir: "./dist/static/esm" },
    {
      src: "./src/browser/preview.ts",
      target: "browser",
      format: "system",
      dir: "./public/system"
    },
    { src: "./src/server/notFound.ts", target: "server", dir: "./dist/server" },
    { src: "./src/server/preview.ts", target: "server", dir: "./dist/server" },
    { src: "./src/server/ssr.ts", target: "server", dir: "./dist/server" }
  ],
  routes: [
    { src: "/", dest: "./dist/server/ssr.js" },
    { src: "/preview(.*)", dest: "./dist/server/preview.js" },
    { src: "/manifest.json", dest: "./dist/static/manifest.json" },
    { src: "/static/(.*)", dest: "./dist/static/$1" },
    { src: "/(.*)", dest: "./dist/server/notFound.js" }
  ],
  extendRollup(rollupOpts, buildConfig) {
    const isServer = buildConfig.target === "server";

    return {
      ...rollupOpts,
      alias: {
        ...rollupOpts.alias,
        entries: isServer
          ? rollupOpts.alias.entries.concat([
              {
                find: "lit-html",
                replacement: path.resolve(
                  __dirname,
                  "../node_modules/@popeindustries/lit-html-server/index.js"
                )
              }
            ])
          : rollupOpts.alias.entries
      },
      external: rollupOpts.external.concat(["path", "stream"])
    };
  }
};
