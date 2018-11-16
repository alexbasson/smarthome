import {Switch} from './Switch';
import {Switchable} from './Switchable';

export class SmartHome {
  constructor(private readonly aSwitch: Switch,
              private readonly switchable: Switchable) {
  }

  public run(): void {
    if (this.aSwitch.isOn()) {
      this.switchable.turnOn();
    } else {
      this.switchable.turnOff();
    }
  }
}
