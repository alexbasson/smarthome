import {Switch} from './Switch';

export class AlwaysOnSwitch implements Switch {
  isOn(): boolean {
    return true;
  }
}
