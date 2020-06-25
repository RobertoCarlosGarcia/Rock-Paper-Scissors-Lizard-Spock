"use strict";

class Game {
    constructor(){
        this.playerOne = new Player();
        this.playerTwo = new Player();
    }
    functiongameGestures = ["Rock","Paper","Scissors","Lizard","Spock"];
}

class Player {
    constructor(name){
        this.name = name;
        this.score = 0;


    }
}