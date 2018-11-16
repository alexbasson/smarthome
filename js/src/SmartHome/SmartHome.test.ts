import {Switch} from './Switch';
import {Switchable} from './Switchable';
import {AlwaysOnSwitch} from './AlwaysOnSwitch.test';
import {SmartHome} from './SmartHome';

describe('SmartHome', () => {
  let aSwitch: Switch;
  let bulbSpy: Switchable;
  let smartHome: SmartHome;

  beforeEach(() => {
    aSwitch = new AlwaysOnSwitch();
    bulbSpy = {
      turnOn: () => {},
      turnOff() {}
    };
    spyOn(bulbSpy, 'turnOn');

    smartHome = new SmartHome(aSwitch, bulbSpy);
    smartHome.run();
  });

  describe('when the switch is on', () => {
    it('turns the bulb on', () => {
      expect(bulbSpy.turnOn).toHaveBeenCalled();
    });
  });
});
