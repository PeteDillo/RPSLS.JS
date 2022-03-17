const Gesture = require("./gesture");
let Rock = new Gesture('Rock', 'Crush', ['Cut','Smash'] );
console.log({Rock})

let Paper = new Gesture('Paper' , 'Covers' , ['Eats' , 'Cut'])
console.log({Paper})

let Scissors = new Gesture('Scissors' , 'Cut' , ['Smash' , 'Crush'])
console.log({Scissors})

let Spock = new Gesture('Spock' , 'Smash' , ['Poison' , 'Disprove'])
console.log({Spock})

let Lizard = new Gesture('Lizard' , 'Eat' ['Decapitate' , 'Crush'])
console.log({Lizard})

