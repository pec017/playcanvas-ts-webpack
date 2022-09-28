import typescript from "@rollup/plugin-typescript";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/index.ts",

  external: ["playcanvas"],

  plugins: [typescript(), uglify()],

  output: {
    sourcemap: false,
    file: "dist/game.js",
    format: "iife",
    name: "game",
    globals: {
      playcanvas: "pc",
    },
  },
};
