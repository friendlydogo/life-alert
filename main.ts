let received_word = ""
input.onButtonPressed(Button.A, function () {
    radio.sendString("stop")
    basic.clearScreen()
    music.stopAllSounds()
    control.reset()
})
radio.onReceivedString(function (receivedString) {
    received_word = receivedString
    if (received_word == "HELP >:(") {
        music.setVolume(500)
        basic.showString(receivedString)
        music.playMelody("A A - A - F A - ", 500)
        music.playMelody("C5 - - - C - - - ", 500)
        music.playMelody("F - - D - - C - ", 500)
        music.playMelody("- - D - E - D - ", 500)
        music.playMelody("C - - C - F - A ", 550)
        music.playMelody("- - C5 - G - - A ", 600)
        music.playMelody("- - G F - G - E ", 550)
        for (let index = 0; index < 5; index++) {
            basic.showIcon(IconNames.Skull)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        music.playMelody("D D F - F - F - ", 430)
        music.playMelody("E - D - C - - - ", 425)
    } else if (received_word == "safe" || input.buttonIsPressed(Button.A)) {
        control.reset()
    }
})
basic.forever(function () {
    radio.setGroup(50)
})
