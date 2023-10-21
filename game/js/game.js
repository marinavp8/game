const Game = {


    gameScreen: document.querySelector("#game-screen"),
    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },



    framesVCounter: 0,
    framesHCounter: 0,

    background: undefined,
    player: undefined,
    vObsArray: [],
    hObsArray: [],

    hObsDensity: 80,
    vObsDensity: 40,

    keys: { jump: "ArrowUp", move: "ArrowRight" },

    init() {
        this.setDimensions()
        this.setEventListeners()
        this.start()
    },
    setDimensions() {
        this.gameScreen.style.width = `${this.gameSize.w}px`,
            this.gameScreen.style.height = `${this.gameSize.h}px`
    },
    setEventListeners() {
        document.addEventListener("keydown", eachOne => {
            switch (eachOne.code) {
                case this.keys.jump:
                    this.player.jump()
                    break;
            }
        })
    },
    start() {
        this.createElements()
        this.gameLoop()
    },
    createElements() {
        this.background = new Background(this.gameScreen, this.gameSize)
        this.player = new Player(this.gameScreen, this.gameSize)
        this.vObsArray = [],
            this.hObsArray = []
    },
    gameLoop() {
        this.framesVCounter > 5000 ? this.framesVCounter = 0 : this.framesVCounter++
        /*this.framesHCounter > 5000 ? this.framesHCounter = 0 : this.framesHCounter++*/

        this.drawAll()
        this.clearAll()

        this.generateVObs()
        this.generateHObs()


        this.isCollision() && this.gameOver()

        window.requestAnimationFrame(() => this.gameLoop())
    },

    drawAll() {
        this.background.move()
        this.player.move()
        this.vObsArray.forEach(eachVObs => eachVObs.move())
        this.hObsArray.forEach(eachVObs => eachHObs.move())
    },
    generateVObs() {
        if (this.framesVCounter % this.vObsDensity === 0) {
            this.vObsArray.push(new Vobs(this.gameScreen, this.gameSize, this.player.playerPos, this.player.playerSize))
        }
    },
    generateHObs() {
        if (this.framesHCounter % this.hObsDensity === 0) {
            this.hObsArray.push(new Hobs(this.xgameScreen, this.gameSize, this.player.playerPos, this.player.playerSize))
        }
    },
    clearAll() {
        this.vObsArray.forEach((vObs, idx) => {
            if (vObs.vObsPos.l <= 0) {
                vObs.vObsElement.remove()
                this.vObs.splice(idx, 1)
            }
        })
        this.hObsArray.forEach((hObs, idx) => {
            if (hObs.hObsPos.l <= 0) {
                hObs.hObsElement.remove()
                this.hObs.splice(idx, 1)
            }
        })
    },
    isCollision() {
        for (let i = 0; i < this.vObs.length; i++) {
            if (this.player.playerPos.left + this.player.playerSize.w >= this.vObs[i].vObsPos.left &&
                this.player.playerPos.top + this.player.playerSize.h >= this.vObs[i].vObsPos.top &&
                this.player.playerPos.left <= this.vObs[i].vObsPos.left + this.vObs[i].vObsSize.w) { return true }
        }
        for (let j = 0; j < this.hObs.length; j++) {
            if (this.player.playerPos.left + this.player.playerSize.w >= this.hObs[i].hObsPos.left &&
                this.player.playerPos.top + this.player.playerSize.h >= this.hObs[i].hObsPos.top &&
                this.player.playerPos.left <= this.hObs[i].hObsPos.left + this.hObs[i].hObsSize.w) { return true }
        }
    },

    gameOver() {
        alert("GAME OVER XXX")
        /*AQUÍ IRA LA PANTALLA DE FIN Y EL BOTÓN DE RESTART*/
    },

}

console.log(Game.gameScreen)
