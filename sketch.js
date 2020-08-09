var ball;
var database, ballposition, pos;
var playerCount = 0;
var gameState = 0;
var form, player, game;
var allPlayers; 
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.Start();
}
function draw(){
    background("white");
    if(playerCount == 4) {
        game.update(1);
    }

    if(gameState == 1) {
        game.play();

    }
}

