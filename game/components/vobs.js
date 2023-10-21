class Vobs {
    constructor(gameScreen, gameSize, playerPos, playerSize) {
        this.gameScreen = gameScreen,
            this.gameSize = gameSize,

            this.playerPos = playerPos,
            this.playerSize = playerSize

        this.vObsSize = {
            w: 20,
            h: 30,
        }
        this.vObsPos = {
            l: gameSize.w,
            t: playerPos.base + playerSize.h - this.vObsSize.h
        }
        this.vObsVel = {
            l: 20,
        }

        this.init()
    }

    init() {
        this.vObsElement = document.createElement("div")
        /*this.vObsElement.src = "./img/jagger.jpg"*/

        this.vObsElement.style.position = "absolute"
        this.vObsElement.style.backgroundColor = `red`
        this.vObsElement.style.width = `${this.vObsSize.w} px`
        this.vObsElement.style.height = `${this.vObsSize.h} px`
        this.vObsElement.style.left = `${this.vObsPos.l} px`
        this.vObsElement.style.top = `${this.vObsPos.t} px`

        this.gameScreen.appendChild(this.vObsElement)
    }
    move() {
        this.vObsPos.l -= this.vObsVel.l
        this.updatePosition()
    }
    updatePosition() {
        this.vObsElement.style.l = `${this.vObsPos.l}px`
        this.vObsElement.style.t = `${this.vObsPos.t}px`
    }
}