def on_button_pressed_a():
    global steps
    basic.show_leds("""
        . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # # #
    """)
    music.start_melody(music.built_in_melody(Melodies.PUNCHLINE),
        MelodyOptions.ONCE)
    steps = 0
    basic.show_number(SCORE)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global steps
    steps += 1
    if steps % 20 == 0:
        basic.clear_screen()
        basic.pause(100)
        basic.pause(100)
        basic.clear_screen()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

SCORE = 0
steps = 0
steps = 0
SCORE = steps

def on_forever():
    pass
basic.forever(on_forever)

def on_forever2():
    basic.show_number(steps)
basic.forever(on_forever2)

def on_forever3():
    if steps == 10:
        music.start_melody(music.built_in_melody(Melodies.PRELUDE), MelodyOptions.ONCE)
    if steps == 50:
        music.start_melody(music.built_in_melody(Melodies.ENTERTAINER),
            MelodyOptions.ONCE)
    if steps == 100:
        music.start_melody(music.built_in_melody(Melodies.FUNK), MelodyOptions.ONCE)
basic.forever(on_forever3)
