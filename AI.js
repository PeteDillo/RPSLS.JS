"use strict";
const Player = require("./player");

class Ai extends Player{
    constructor(){
        super();
        this.name = "Siri"
    }

    chooseGesture(){
       this.choice = this.gestureList[Math.floor(Math.random() * 5)];
       console.log(`${this.name} selected ${this.choice}!`);
    }

}

module.exports = Ai;