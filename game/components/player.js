class Player {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize


        this.playerSize = {
            w: 100,
            h: 100
        }
        this.playerPos = {
            t: this.gameSize.h - this.playerSize.h - 40,
            l: 100,
            base: this.gameSize.h - this.playerSize.h - 40
        }
        this.playerVel = {
            l: 1,
            t: 0,
            gravity: 0.4
        }

        this.init()
    }

    init() {
        this.playerElement = document.createElement("div")
        /*this.playerElement.src = "./img/mario03.png"*/

        this.playerElement.style.position = "absolute"
        this.playerElement.style.backgroundColor = `black`
        this.playerElement.style.width = `${this.playerSize.w}px`
        this.playerElement.style.height = `${this.playerSize.h}px`
        this.playerElement.style.left = `${this.playerSize.l}px`
        this.playerElement.style.top = `${this.playerSize.t}px`

        this.gameScreen.appendChild(this.playerElement)
    }
    move() {
        if (this.playerPos.top < this.playerPos.base) {
            this.playerPos.t += this.playerVel.t
            this.playerVel.t += this.playerVel.gravity
        } else {
            this.playerPos.t = this.playerPos.base
            this.playerVel.top = 1
        }
        this.updatePosition()
    }
    updatePosition() {
        this.playerElement.style.left = `${this.playerPos.l}px`
        this.playerElement.style.top = `${this.playerPos.t}px`
    }
    jump() {
        if (this.playerPos.t >= this.playerPos.base) {
            this.playerPos.t = -20
            this.playerVel.top -= 6
        }
    }
}