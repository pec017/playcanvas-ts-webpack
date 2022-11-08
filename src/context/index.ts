import * as pc from 'playcanvas';

export interface PositionData {
  x?: number,
  y?: number,
  z?: number,
}

export interface PositionOper {

  getData: () => PositionData;

  // eslint-disable-next-line no-unused-vars
  update: (x: number, y: number, z: number) => void;

  syncContext: () => void;
}

export const position: PositionData & PositionOper = {
  x: 0,
  y: 0,
  z: 0,

  getData() {
    const {
      x, y, z,
    } = this;
    return {
      x, y, z,
    };
  },

  update(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.syncContext();
  },

  syncContext() {
    const app = pc.AppBase.getApplication();
    if (app) {
      app.fire('context:sync', this.getData());
    }
  },
};
