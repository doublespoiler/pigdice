// Business Logic

function rollDice(){
	return Math.floor(Math.random() * (7 - 1) + 1);
}

function Game(player1, player2){
	this.firstPlayer = player1;
	this.secondPlayer = player2;
	this.activePlayer = 1;

}

function Player(inputName){
  this.playerName = inputName;
	this.turnScore = 0;
  this.gameScore = 0;
}

function changeScore(){
	console.log("Changing score, p1: " + game.firstPlayer.turnScore + " p2: " + game.secondPlayer.turnScore);
	p1TurnDisplay = game.firstPlayer.turnScore;
	p2TurnDisplay = game.secondPlayer.turnScore;
}

Player.prototype.rollDice = function(){ //returns false if the player gets to keep playing
	const roll = rollDice();
	console.log("Roll " + roll);
	if (roll === 1) {
    this.turnScore = 0;
    console.log("Player rolled 1");
		game.changeTurn(true)
		changeScore();
	}	else {
		this.turnScore += roll;
    console.log("Turn score: " + this.turnScore);
		changeScore();
	}
}

Player.prototype.holdScore = function(){
  this.gameScore += this.turnScore;
	this.turnScore = 0
  console.log("Game score: " + this.gameScore);
  game.changeTurn(true)
	changeScore();
}



// User Interface Logic

function nameSubmit(event){
	event.preventDefault();
	const player1Name = document.getElementById("player-one").value;
	const player2Name = document.getElementById("player-two").value;

	const player1 = new Player(player1Name);
	const player2 = new Player(player2Name);
// *possible* necessity to rename player name variables in this area, pin in it~~
	game = new Game(player1, player2);
	console.log("Line after game is defined, game is " + game);
	console.log("first player: " + game.firstPlayer.playerName);
	console.log("second player: " + game.secondPlayer.playerName);
	console.log("active player: " + game.activePlayer);
	const playerInput = document.getElementById("player-input");
	playerInput.className = "hidden player-input"
	const playField = document.getElementById("play-field");
	playField.className = "row";

	const p1TurnRoll = game.firstPlayer.turnScore;
	const p1TurnDisplay = document.getElementById("p1-turn-score");
	p1TurnDisplay.innerText = p1TurnRoll;
	const p2TurnRoll = game.secondPlayer.turnScore;
	const p2TurnDisplay = document.getElementById("p2-turn-score");
	p2TurnDisplay.innerText = p2TurnRoll;

	const p1Roll = document.getElementById("p1-roll-btn");
	const p1Hold = document.getElementById("p1-hold-btn");
	p1Roll.addEventListener("click", game.firstPlayer.rollDice);
	p1Hold.addEventListener("click", game.firstPlayer.holdScore);
}

Game.prototype.changeTurn = function(input){
	const p1Roll = document.getElementById("p1-roll-btn");
	const p1Hold = document.getElementById("p1-hold-btn");
	const p2Roll = document.getElementById("p2-roll-btn");
	const p2Hold = document.getElementById("p2-hold-btn");
	if (input === true) {
		if (this.activePlayer === 1){
			this.activePlayer = 2;
			p2Roll.addEventListener("click", game.secondPlayer.rollDice);
			p2Hold.addEventListener("click", game.secondPlayer.holdScore);
			p1Roll.removeEventListener("click", game.firstPlayer.rollDice);
			p1Hold.removeEventListener("click", game.firstPlayer.holdScore);
      console.log("Active player =" + this.activePlayer);
		} else {
			this.activePlayer = 1;
			p1Roll.addEventListener("click", game.firstPlayer.rollDice);
			p1Hold.addEventListener("click", game.firstPlayer.holdScore);
			p2Roll.removeEventListener("click", game.secondPlayer.rollDice);
			p2Hold.removeEventListener("click", game.secondPlayer.holdScore);
      console.log("Active player =" + this.activePlayer);
		}
	} else {
    console.log("Active player =" + this.activePlayer);
  }
}

window.addEventListener("load", function(){
	const playerInputForm = document.getElementById("player-name-input");
	const p1Display = document.getElementById("play-one-roll");
	const p1Score = document.getElementById("play-one-score");
	const p2Display = document.getElementById("play-two-roll");
	const p2Score = document.getElementById("play-two-score");

	playerInputForm.addEventListener("submit", nameSubmit);

});



