import * as pc from 'playcanvas';
import { position } from './context';
/* eslint-disable no-console */

/**
 * TODO: Add description.
 */
export class PcScript extends pc.ScriptType {
  public scriptAttribute: boolean = false;

  /**
   * Called when script is about to run for the first time.
   */
  public initialize(): void {
    console.log(this.app);
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
  }

  // eslint-disable-next-line class-methods-use-this
  onKeyDown(e: pc.KeyboardEvent) {
    if (e.key === pc.KEY_SPACE) {
      const entity = this.entity.findByName('Camera') as pc.Entity;
      position.update(
        entity.getLocalPosition().x,
        entity.getLocalPosition().y,
        entity.getLocalPosition().z,
      );
      console.log(entity);
    }
  }

  /**
   * Called for enabled (running state) scripts on each tick.
   *
   * @param dt - The delta time in seconds since the last frame.
   */
  // public update(dt: number): void {}
}

// Register script copmonent.
pc.registerScript(PcScript, 'pcScript');

// Register component attributes.
PcScript.attributes.add('scriptAttribute', {
  type: 'boolean',
  default: false,
});
