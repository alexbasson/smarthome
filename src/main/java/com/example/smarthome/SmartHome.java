package com.example.smarthome;

public class SmartHome {

    private final Switch aSwitch;
    private final Switchable switchable;

    public SmartHome(Switch aSwitch, Switchable switchable) {
        this.aSwitch = aSwitch;
        this.switchable = switchable;
    }

    public void run() {
        while (true) {
            if (aSwitch.isOn()) {
                switchable.turnOn();
            } else {
                switchable.turnOff();
            }
        }
    }
}
