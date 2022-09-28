<div align="center">

<img width="140" src="https://s3-eu-west-1.amazonaws.com/static.playcanvas.com/platform/images/logo/playcanvas-logo-medium.png"/><img width="140" src="https://cdn.worldvectorlogo.com/logos/typescript.svg"/><img width="140" src="https://i.ibb.co/LgLjs79/rollup.jpg"/>

# playcanvas-typescript-rollup

</div>

Basic starter project for writing a PlayCanvas project with TypeScript and Rollup.

## Setup

`npm i`, then `npm run build` to compile once, or `npm run watch` to watch files.

## Script example

```ts
import * as pc from "playcanvas";

/**
 * TODO: Add description.
 */
export class PcScript extends pc.ScriptType {
  /**
   * Called when script is about to run for the first time.
   */
  public initialize(): void {}

  /**
   * Called for enabled (running state) scripts on each tick.
   *
   * @param dt - The delta time in seconds since the last frame.
   */
  public update(dt: number): void {}
}

// Register script copmonent.
pc.registerScript(PcScript, "pcScript");

// Register component attributes.
PcScript.attributes.add("scriptAttribute", {
  type: "boolean",
  default: false,
});
```
