package com.example.smarthome;

public class BulbSpy implements Switchable {
    public boolean turnOnWasCalled = false;

    @Override
    public void turnOn() {
        turnOnWasCalled = true;
    }

    @Override
    public void turnOff() {

    }
}
