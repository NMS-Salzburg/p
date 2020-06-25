let afstand = 0
basic.forever(function () {
    afstand = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (afstand < 5) {
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.playTone(659, music.beat(BeatFraction.Whole))
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
