servos.P0.setAngle(90)
basic.forever(function () {
    makerbit.connectUltrasonicDistanceSensor(DigitalPin.P1, DigitalPin.P2)
    if (makerbit.isUltrasonicDistanceLessThan(20, DistanceUnit.CM)) {
        servos.P0.setAngle(0)
    } else {
        basic.pause(5000)
        servos.P0.setAngle(90)
    }
})
