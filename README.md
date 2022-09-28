# playcanvas-ts-webpack

</div>

Basic starter project for writing a PlayCanvas project with TypeScript and WebPack.


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
