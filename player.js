class Player{
constructor()


}

class Human{
    constructor(name) {
        this.name = name;
        this.count = 0;
        this.gestures = {
            
            0: {
                name: 'rock',
                weakness: ['paper', 'spock']
            },
            
            1: {
                name: 'paper',
                weakness: ['scissors', 'lizard']
            },
            
            2: {
                name: 'scissors',
                weakness: ['rock', 'spock']
            },
            
            3: {
                name: 'lizard',
                weakness: ['rock', 'scissors']
            },
            
            4: {
                name: 'spock',
                weakness: ['lizard', 'paper']
            },
        }
        this.hand = this.gestures.rock;
    }

}

class AI{
    constructor()

}