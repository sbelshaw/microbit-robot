enum RadioMessage {
    right = 32391,
    left = 14947,
    startstop = 5388,
}
radio.setGroup(21)
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(RadioMessage.left)
    basic.showString("L")
    basic.pause(2000)
    basic.showIcon(IconNames.Triangle)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(RadioMessage.startstop)
    basic.showString("T")
    basic.pause(2000)
    basic.showIcon(IconNames.Triangle)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(RadioMessage.right)
    basic.showString("R")
    basic.pause(2000)
    basic.showIcon(IconNames.Triangle)
})