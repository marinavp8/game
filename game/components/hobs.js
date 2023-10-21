class Hobs {
    constructor(gameScreen, gameSize, playerPos, playerSize) {
        this.gameScreen = gameScreen,
            this.gameSize = gameSize,

            this.playerPos = playerPos,
            this.playerSize = playerSize

        this.hObsSize = {
            w: 30,
            h: 10,
        }
        this.hObsPos = {
            l: gameSize.w,
            t: playerPos.base + playerSize.h - this.hObsSize.h,
        }
        this.hObsVel = {
            l: 15,
        }

        this.init()
    }

    init() {
        this.hObsElement = document.createElement("div")
        /*this.hObsElement.src = "./img/jaggerx5.jpg"*/

        this.hObsElement.style.position = "absolute"
        this.hObsElement.style.backgroundColor = `green`
        this.hObsElement.style.width = `${this.hObsSize.w}`
        this.hObsElement.style.height = `${this.hObsSize.w}`
        this.hObsElement.style.left = `${this.hObsSize.w}`
        this.hObsElement.style.top = `${this.hObsSize.w}`

        this.gameScreen.appendChild(this.hObsElement)
    }
    move() {
        this.hObs.l -= this.hObsVel.l
        this.updatePosition()
    }
    updatePosition() {
        this.vObsElement.style.l = `${this.hObsPos.l}px`
        this.vObsElement.style.t = `${this.hObsPos.t}px`
    }
}