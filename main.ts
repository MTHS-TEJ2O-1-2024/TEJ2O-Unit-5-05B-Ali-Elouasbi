/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali Elouasbi
 * Created on: Oct 2024
 * This program uses the RobotBit's Neopixels
*/

// variables
let neopixelStrip: neopixel.Strip = null

basic.forever(function() {
    // turns on Green light
    basic.clearScreen()
    neopixelStrip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.show()
    basic.pause(2000)
    
    // turns on Yellow light
    neopixelStrip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    basic.pause(1000)
    
    // turns on Red light
    neopixelStrip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
    basic.pause(2000)
})