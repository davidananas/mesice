input.onButtonPressed(Button.A, function () {
    if (m_a_d == "mesice") {
        basic.clearScreen()
        mesic += -1
        if (mesic < 0) {
            mesic = 0
        }
        basic.showString("" + (mesice[mesic]))
    } else {
        basic.clearScreen()
        kolik += -1
        if (kolik < 0) {
            kolik = 0
        }
        basic.showString("" + (dny[kolik]))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (a_b == 0) {
        m_a_d = "dny"
    } else if (a_b == 1) {
        m_a_d = "mesice"
    }
    if (a_b == 0) {
        a_b += 1
    } else if (a_b == 1) {
        a_b += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (m_a_d == "mesice") {
        basic.clearScreen()
        mesic += 1
        if (mesic > 11) {
            mesic = 11
        }
        basic.showString("" + (mesice[mesic]))
    } else {
        basic.clearScreen()
        kolik += 1
        if (kolik > 6) {
            kolik = 6
        }
        basic.showString("" + (dny[kolik]))
    }
})
let dny: string[] = []
let mesic = 0
let mesice: string[] = []
let m_a_d = ""
let kolik = 0
let a_b = 0
a_b = 0
kolik = 0
m_a_d = "mesice"
mesice = [
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
dny = [
"PONDELI",
"UTERY",
"STREDA",
"CTVRTEK",
"PATEK",
"SOBOTA",
"NEDELE"
]
