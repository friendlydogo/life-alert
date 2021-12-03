input.onButtonPressed(Button.A, function () {
	
})
radio.onReceivedString(function (receivedString) {
    music.setVolume(500)
    music.playMelody("A A - A - F A - ", 500)
    music.playMelody("C5 - - - C - - - ", 500)
    music.playMelody("F - - D - - C - ", 500)
    music.playMelody("- - D - E - D - ", 500)
    music.playMelody("C - - C - F - A ", 550)
    music.playMelody("- - C5 - G - - A ", 600)
    music.playMelody("- - G F - G - E ", 550)
    basic.showString(receivedString)
    music.playMelody("D D F - F - F - ", 430)
    music.playMelody("E - D - C - - - ", 425)
})
basic.forever(function () {
    radio.setGroup(50)
})
