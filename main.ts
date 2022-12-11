input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    mesic += -1
    if (mesic < 0) {
        mesic = 0
    }
    basic.showString("" + (seznam[mesic]))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    mesic += 1
    if (mesic > 11) {
        mesic = 11
    }
    basic.showString("" + (seznam[mesic]))
})
let mesic = 0
let seznam: string[] = []
seznam = [
"LEDEN",
"UNOR",
"BREZEN",
"DUBEN",
"KVETEN",
"CERVEN",
"CERVENEC",
"SRPEN",
"ZARI",
"RIJEN",
"LISTOPAD",
"PROSINEC"
]
mesic = 0
