"use strict";

class Game {
    constructor(){
        this.playerOne = new Player();
        this.playerTwo = new Player();

    }
}

class Player {
    constructor(name){
        this.name = name;
        this.score = 0;


    }
}