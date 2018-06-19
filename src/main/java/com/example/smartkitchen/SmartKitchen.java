package com.example.smartkitchen;

import com.example.oven.Oven;

public class SmartKitchen {
    void regulateTemp() {
        int goalT, t, s;

        while (true) {
            Oven o = new Oven();

            goalT = o.in(0x02);
            t = o.in(0x01);
            s = o.in(0x03);

            if (s == 1){
                if (t < goalT) {
                    o.out(0x04, true);
                } else {
                    o.out(0x04, false);
                }
            }
        }
    }

}
