class Background {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen,
            this.gameSize = gameSize,

            this.backgroundSize = {
                w: gameSize.w,
                h: gameScreen.h
            }
        this.backgroundPosition1 = {
            l: 0,
            t: 0
        }
        this.backgroundPosition2 = {
            l: gameSize.w,
            t: 0
        }
        this.backgroundVel = {
            l: 10
        }

        this.init()
    }

    init() {
        this.backgroundElement1 = document.createElement("div")
        this.backgroundElement2 = document.createElement("div")

        /* this.backgroundElement1.src = "./img/matrixbackground1"
         this.backgroundElement2.src = "./img/matrixbackground2"*/
        this.backgroundElement1.style.backgroundColor = `blue`
        this.backgroundElement2.style.backgroundColor = `orange`

        this.backgroundElement1.style.position = "absolute"

        this.backgroundElement1.style.width = `${this.backgroundSize.w}px`
        this.backgroundElement1.style.height = `${this.backgroundSize.h}px`
        this.backgroundElement1.style.left = `${this.backgroundPosition1.l}px`
        this.backgroundElement1.style.top = `${this.backgroundPosition1.t}px`

        this.gameScreen.appendChild(this.backgroundElement1)

        this.backgroundElement2.style.position = "absolute"

        this.backgroundElement2.style.width = `${this.backgroundSize.w}px`
        this.backgroundElement2.style.height = `${this.backgroundSize.h}px`
        this.backgroundElement2.style.left = `${this.backgroundPosition2.l}px`
        this.backgroundElement2.style.top = `${this.backgroundPosition2.t}px`

        this.gameScreen.appendChild(this.backgroundElement2)
    }
    move() {
        if (this.backgroundPosition1.left <= -this.backgroundSize.w) {
            this.backgroundPosition1.left = 0
            this.backgroundPosition2.left = this.backgroundSize.w
        }
        this.backgroundPosition1.left -= this.backgroundVel.left
        this.backgroundPosition2.left -= this.backgroundVel.left
        this.updatePosition()
    }
    updatePosition() {
        this.backgroundElement1.style.left = `${this.backgroundPosition1.left}px`
        this.backgroundElement2.style.left = `${this.backgroundPosition2.left}px`
    }
}