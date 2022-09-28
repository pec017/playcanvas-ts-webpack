import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",

  external: ["playcanvas"],

  plugins: [typescript()],

  output: {
    sourcemap: "inline",
    file: "dist/game.js",
    format: "iife",
    name: "game",
    globals: {
      playcanvas: "pc",
    },
  },
};
