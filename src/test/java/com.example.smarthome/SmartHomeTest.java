package com.example.smarthome;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class SmartHomeTest {

    @Test
    public void whenSwitchIsOn_turnsBulbOn() {
        Switch aSwitch = new AlwaysOnSwitch();
        BulbSpy bulbSpy = new BulbSpy();

        SmartHome smartHome = new SmartHome(aSwitch, bulbSpy);
        smartHome.run();

        assertEquals(true, bulbSpy.turnOnWasCalled);
    }

}
