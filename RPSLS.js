"use strict";

class Game {
    constructor(){
        this.playerOne = new Player();
        this.playerTwo = new Player();
        
        this.handGesture = [];

    functiongameGestures = ["Rock","Paper","Scissors","Lizard","Spock"];
    
    

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