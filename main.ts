radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    } else if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
    } else if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    } else if (receivedNumber == 4) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    } else if (receivedNumber == 5) {
        maqueen.servoRun(maqueen.Servos.S1, 0)
    } else if (receivedNumber == 6) {
        maqueen.servoRun(maqueen.Servos.S1, 180)
    }
})
radio.setGroup(1)
basic.showIcon(IconNames.Cow)
