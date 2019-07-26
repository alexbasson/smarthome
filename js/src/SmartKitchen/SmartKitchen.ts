import {Oven} from '../Oven/Oven';

export class SmartKitchen {
  public regulateTemp() {
    let goalT, t, s: number;

    while (true) {
      const o = new Oven();

      goalT = o.in(0x02);
      t = o.in(0x01);
      s = o.in(0x03);

      if (s === 1) {
        if (t < goalT) {
          o.out(0x04, true);
        } else {
          o.out(0x04, false);
        }
      }
    }
  }
}
