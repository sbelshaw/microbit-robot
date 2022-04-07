enum RadioMessage {
    message1 = 49434,
    right = 32391,
    left = 14947,
    startstop = 5388,
    stopstart = 20043
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.right)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.stopstart)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.left)
})
radio.setGroup(3)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
