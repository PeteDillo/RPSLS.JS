//game logic
'use strict'
const prompt = require("prompt-sync")();
const player = require("player")();

const gameStart = () => {
  while (playerOne.numberOfWins < 3 && playerTwo.numberOfWins < 3) {
    Console.log(playerOne.numberOfWins);
    let playerOneChoice = playerOne.GetChoice();
    let playerTwoChoice = playerTwo.GetChoice();
    if (playerOneChoice == "rock") {
      if (playerTwoChoice == "rock") {
        Console.log("Rock ties with rock!");
      } else if (playerTwoChoice == "paper") {
        Console.log("Paper covers rock! Player two wins");
        playerTwo.numberOfWins += 1;
      } else if (playerTwoChoice == "scissors") {
        Console.log("Rock smashes scissors! Player one wins");
        playerOne.numberOfWins += 1;
      } else if (playerTwoChoice == "lizard") {
        Console.log("Rock smashes lizard! Player one wins");
        playerOne.numberOfWins += 1;
      } else if (playerTwoChoice == "spock") {
        Console.log("Spock vaporizes rock! Player two wins");
        playerTwo.numberOfWins += 1;
      }
    } else if (playerOneChoice == "paper") {
      if (playerTwoChoice == "rock") {
        Console.log("Paper covers rock! Player one wins");
        playerOne.numberOfWins += 1;
      } else if (playerTwoChoice == "paper") {
        Console.log("Paper ties with paper!");
      } else if (playerTwoChoice == "scissors") {
        Console.log("scissors cuts paper! player two wins");
        playerTwo.numberOfWins += 1;
      } else if (playerTwoChoice == "lizard") {
        Console.log("Lizard eats paper! Player two wins");
        playerTwo.numberOfWins += 1;
      } else if (playerTwoChoice == "spock") {
        Console.log("Paper disproves spock! player one wins");
        playerOne.numberOfWins += 1;
      }
    } else if (playerOneChoice == "scissors") {
      if (playerTwoChoice == "rock") {
        Console.log("Rock crushed paper! Player two wins");
        playerTwo.numberOfWins += 1;
      } else if (playerTwoChoice == "paper") {
        Console.log("Scissors cuts paper! Player one wins");
        playerOne.numberOfWins += 1;
      } else if (playerTwoChoice == "scissors") {
        Console.log("Scissors ties with scissors!");
      } else if (playerTwoChoice == "lizard") {
        Console.log("scissors decapitates lizard, player 1 wins!");
        playerOne.numberOfWins += 1;
      } else if (playerTwoChoice == "spock") {
        Console.log("spock smashes scissors, player 2 wins.");
        playerTwo.numberOfWins += 1;
      }
    } else if (playerOneChoice == "lizard") {
      if (playerTwoChoice == "rock") {
        Console.log("Rock crushed lizard! Player two wins");
        playerTwo.numberOfWins += 1;
      } else if (playerTwoChoice == "paper") {
        Console.log("Lizard eats paper! Player one wins");
        playerOne.numberOfWins += 1;
      } else if (playerTwoChoice == "scissors") {
        Console.log("scissors decapitates lizard, player 2 wins.");
        playerTwo.numberOfWins += 1;
      } else if (playerTwoChoice == "lizard") {
        Console.log("Lizard ties lizard!");
      } else if (playerTwoChoice == "spock") {
        Console.log("lizard poisons spock, player 1 wins!");
        playerOne.numberOfWins += 1;
      }
    } else if (playerOneChoice == "spock") {
      if (playerTwoChoice == "rock") {
        Console.log("spock vaporizes rock, player 2 wins.");
        playerTwo.numberOfWins += 1;
      } else if (playerTwoChoice == "paper") {
        Console.log("paper disproves spock, player 2 wins.");
        playerTwo.numberOfWins += 1;
      } else if (playerTwoChoice == "scissors") {
        Console.log("spock smashes scissors, player 1 wins!");
        playerOne.numberOfWins += 1;
      } else if (playerTwoChoice == "lizard") {
        Console.log("lizard poisons spock, player 2 wins.");
        playerTwo.numberOfWins += 1;
      } else if (playerTwoChoice == "spock") {
        Console.log("Spock ties spock!");
      }
    }
  }
};


const _gameStart = gameStart;
export { _gameStart as gameStart };