controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.powerDown.playUntilDone()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.jumpUp.playUntilDone()
})
scene.setBackgroundColor(3)
effects.confetti.startScreenEffect()
