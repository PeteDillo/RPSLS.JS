class Gesture{
    constructor(name, attack, weakness ){
        this.name = name;
        this.weakness = weakness;
        this.attack = attack;
    }


    fight(playerOne, playerTwo){

        if(playerTwo.weakness.includes(playerOne.attack)){
            return playerTwo.health - 10
            
        }
        else if(playerOne.weakness.includes(playerTwo.attack)){
            return playerOne.health - 10

        }
else{return "Tie"}
    }
}


module.exports = Gesture;
