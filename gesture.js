class gesture{
    constructor(prop){
        this.name = prop.name;
        this.weakness = prop.weakness;
        this.attack = prop.attack;
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



