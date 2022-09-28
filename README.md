# playcanvas-ts-webpack

Basic starter project for writing a PlayCanvas project with TypeScript and WebPack.

## How to use

1. Install [GitPod Chrome extension](https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki)
2. Use your playcanvas projectId/branchId/accessToken in playcanvas.config.json
3. npm i & npm run dev

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
