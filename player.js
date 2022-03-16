"use strict";
const prompt = require("prompt-sync")();

class Player {
    constructor(name){
        this.score = 0;
        this.choice = " ";
        this.gestureList = ["rock","paper","scissors","lizard","spock"];
        this.name = name;
    }

    chooseGesture(){
        console.log("Choose your gesture:");
        for (let i = 0; i < this.gestureList.length; i++) {
            console.log(`Enter ${i} for ${this.gestureList[i]}`);
        }
        this.choice = this.gestureList[parseInt(prompt())]
        if (this.gestureList.includes(this.choice)) {
            console.log(`${this.name} selected ${this.choice}`);
        }else{
            console.log("Please enter a valid selection!");
            this.chooseGesture();
        }
    }
}

module.exports = Player;