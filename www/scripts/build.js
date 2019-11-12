"use strict";

const cpx = require("cpx");
const rollup = require("rollup");
const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const nodeResolve = require("rollup-plugin-node-resolve");
const { terser } = require("rollup-plugin-terser");

const path = require("path");

const SRC_PATH = path.resolve(__dirname, "../src");
const DIST_PATH = path.resolve(__dirname, "../public");

async function rollupBuild() {
  const minify = process.env.NODE_ENV === "production";
  const extensions = [".js", ".jsx", ".ts", ".tsx"];

  // see below for details on the options
  const inputOptions = {
    external: [],
    input: [path.resolve(SRC_PATH, "browser/main.ts")],
    plugins: [
      // Allows node_modules resolution
      nodeResolve({
        extensions,
        mainFields: ["browser", "module", "main"]
      }),
      // Allow bundling cjs modules. Rollup doesn't understand cjs
      commonjs(),
      babel({
        babelrc: false,
        exclude: path.resolve(__dirname, "../node_modules/**"),
        extensions,
        presets: ["@babel/preset-env", "@babel/preset-typescript"]
      }),
      minify && terser()
    ]
  };

  const outputOptionsArr = [
    {
      dir: path.resolve(DIST_PATH, "esm"),
      format: "esm",
      sourcemap: true
    },
    {
      dir: path.resolve(DIST_PATH, "system"),
      format: "system",
      sourcemap: true
    }
  ];

  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  return Promise.all(outputOptionsArr.map(outputOptions => bundle.write(outputOptions)));
}

function copyBuild() {
  const source = path.resolve(path.resolve(__dirname, "../static/*"));
  const dest = DIST_PATH;
  const options = {};

  return new Promise((resolve, reject) => {
    cpx.copy(source, dest, options, err => {
      if (err) reject(err);
      else resolve();
    });
  });
}

Promise.all([rollupBuild(), copyBuild()]).catch(err => {
  console.error(err);
  process.exit(1);
});
