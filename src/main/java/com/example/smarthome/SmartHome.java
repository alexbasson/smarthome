package com.example.smarthome;

import com.example.bulb9000.Bulb9000;
import com.example.switch9000.Switch9000;

public class SmartHome {
    void run() {
        Switch9000 switch9k = new Switch9000();
        Bulb9000 bulb9k = new Bulb9000();

        while(true) {
            if (switch9k.isOn()) {
                bulb9k.turnOn();
            } else {
                bulb9k.turnOff();
            }
        }
    }
}
