input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . # . . #
        . # # # .
        . # . # .
        . # . . #
        `)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showNumber(steps)
    steps = 0
})
input.onButtonPressed(Button.AB, function () {
    let shake = 0
    quetions += 1
    if (quetions == 1) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            # . # . .
            # # # . .
            `)
    }
    if (shake == 1) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        basic.showLeds(`
            . # # # #
            . # . . .
            . # # # .
            . # . . .
            . # . . .
            `)
    }
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        # . # . .
        # # # . .
        `)
    basic.pause(3000)
    if (shake == 1) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    }
    basic.showLeds(`
        . # # # #
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `)
    if (shake == 1) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    steps = 0
    radio.sendNumber(3)
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    if (steps % 20 == 0) {
        basic.clearScreen()
        basic.pause(100)
        basic.pause(100)
        basic.clearScreen()
    }
})
let steps = 0
let quetions = 0
quetions = 0
steps = 0
let SCORE = steps
basic.forever(function () {
    basic.showNumber(steps)
})
basic.forever(function () {
    if (steps == 69) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    }
    if (steps == 169) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    }
    if (steps == 269) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    }
    if (steps == 369) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    }
})
basic.forever(function () {
    if (steps == 0) {
        basic.showString("lv 1 walk 69 steps")
        steps = 0
    }
    if (steps == 69) {
        basic.showString("lv 2 walk 300 steps")
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        steps = 0
    }
    if (steps == 300) {
        basic.showString("lv 3 walk 569 steps")
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        steps = 0
    }
    if (steps == 569) {
        basic.showString("lv 4 walk 1000 steps")
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        steps = 0
    }
    if (steps == 1000) {
        basic.showString("lv 5 walk 2609 steps")
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        steps = 0
    }
    if (steps == 2609) {
        basic.showString("lv 6 walk 3500 steps")
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        steps = 0
    }
    if (steps == 3500) {
        basic.showString("lv 7 walk 4500 steps")
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        steps = 0
    }
    if (steps == 4500) {
        basic.showString("lv 8 walk 6000 steps")
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        steps = 0
    }
    if (steps == 6000) {
        basic.showString("lv 9 walk 7500 steps")
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        steps = 0
    }
    if (steps == 7500) {
        basic.showString("lv 10 walk 10000 steps")
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        steps = 0
        basic.showString("You finished your daily fitness!!!!!!!!!!")
    }
})
