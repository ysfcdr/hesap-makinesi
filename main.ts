input.onButtonPressed(Button.A, function () {
    if (durum == 0) {
        sayi1 += -1
        basic.showNumber(sayi1)
    } else {
        if (durum == 1) {
            sayi2 += -1
            basic.showNumber(sayi2)
        } else {
            islem += -1
            islem_yaz()
        }
    }
})
function islem_yaz () {
    if (islem == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else {
        if (islem == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        } else {
            if (islem == 2) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            } else {
                basic.showLeds(`
                    . . # . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . # . .
                    `)
            }
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    if (durum == 0) {
        basic.showString("2.sayiyigir")
        durum = 1
    } else {
        if (durum == 1) {
            basic.showString("islemigir")
            islem = 0
            durum = 2
            islem_yaz()
        } else {
            if (islem == 0) {
                basic.showNumber(sayi1 + sayi2)
            } else {
                if (islem == 1) {
                    basic.showNumber(sayi1 - sayi2)
                } else {
                    if (islem == 2) {
                        basic.showNumber(sayi1 * sayi2)
                    } else {
                        basic.showNumber(sayi1 / sayi2)
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (durum == 0) {
        sayi1 += 1
        basic.showNumber(sayi1)
    } else {
        if (durum == 1) {
            sayi2 += 1
            basic.showNumber(sayi2)
        } else {
            islem += 1
            islem_yaz()
        }
    }
})
let islem = 0
let sayi2 = 0
let sayi1 = 0
let durum = 0
basic.showString("1.sayiyigir")
durum = 0
basic.forever(function () {
	
})
