"use strict";
const Player = require("./player");

class Human extends Player{
    constructor(name){
        super();
        this.name = name
    }
}
module.exports = Human;