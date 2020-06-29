"use strict";

class Game {
    constructor(){
        this.playerOne = new Player();
        this.playerTwo = new Player();
        
        this.handGesture = [];

    functiongameGestures = ["Rock","Paper","Scissors","Lizard","Spock"];
    
displayRules() {
    console.log ("Welcome to Rock, Paper,Scissors, Lizard, Spock Game!")
    console.log ("First player to reach to 2 wins will be declared the winner.")
    console.log ("Rock crushes Scissors.")
    console.log ("Scissors cuts paper.")
    console.log ("Paper covers Rock.")
    console.log ("Rock crushes Lizard.")
    console.log ("Lizard poisons Spock.")
    console.log ("Spock smashes Scissors.")
    console.log ("Scissors decapitates Lizard.")
    console.log ("Lizard eats Paper.")
    console.log ("Paper disproves Spock.")
    console.log ("Spock vaporizes Rock.");

    }

    } 
}

class Player {
    constructor(name){
        this.name = name;
        this.score = 0;

     }
}

class HumanPlayer extends Player{



}

class AIPlayer extends Player{


    }
    
}