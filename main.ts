controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.powerDown.playUntilDone()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.jumpUp.playUntilDone()
})
scene.setBackgroundColor(3)
effects.clouds.startScreenEffect()
music.playTone(262, music.beat(BeatFraction.Half))
