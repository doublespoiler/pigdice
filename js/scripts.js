// Business Logic

function Game(player1, player2){
	this.player1 = player1;
	this.player2 = player2;
	this.activePlayer = 1;
}

function Player(inputName){
  this.playerName = inputName;
	this.turnScore = 0;
  this.gameScore = 0;
}

Player.prototype.roll = function(){ 
	const roll = Math.floor(Math.random() * (7 - 1) + 1);
	console.log("Roll " + roll);
	if (roll === 1) {
    this.turnScore = 0;
    console.log("Player rolled 1");
		game.changeTurn();
		return roll;
	}	else {
		this.turnScore += roll;
		console.log("roll: " + roll);
    console.log("Turn score: " + this.turnScore);
		console.log(typeof this.turnScore);
		return roll;
	}
}

Player.prototype.holdScore = function(){
  this.gameScore += this.turnScore;
	this.turnScore = 0
  console.log("Game score: " + this.gameScore);
	if (this.gameScore >= 100) {
		this.wins();
	}
  return this.gameScore;
}





let game;

// User Interface Logic

Player.prototype.wins = function(){
	window.alert(this.playerName + "wins!");
}

Game.prototype.changeTurn = function(){
	if (this.activePlayer === 1) {
		this.activePlayer = 2;
		document.querySelector("div#play-one-buttons").classList.add("hidden");
    document.querySelector("div#play-two-buttons").classList.remove("hidden");
		document.querySelector("span#play-one-turn").innerText = "0";
	} else {
		this.activePlayer = 1;
		document.querySelector("div#play-two-buttons").classList.add("hidden");
    document.querySelector("div#play-one-buttons").classList.remove("hidden");
		document.querySelector("span#play-two-turn").innerText = "0";
	}
}

function nameSubmit(event){
	event.preventDefault();
	const playerOneName = document.querySelector("input#player-one").value;
	const playerTwoName = document.querySelector("input#player-two").value;
	let playerOne = new Player(playerOneName);
	let playerTwo = new Player(playerTwoName);
	game = new Game(playerOne, playerTwo);
	document.getElementById("play-field").classList.remove("hidden");
	document.getElementById("player-input").classList.add("hidden");
	document.getElementById("play-one-name").innerText = playerOneName;
	document.getElementById("play-two-name").innerText = playerTwoName;
	p1Roll = document.querySelector("button#play-one-roll");
	p1Roll.addEventListener("click", function(){
		let lastRoll = playerOne.roll();
		console.log(lastRoll);
		document.querySelector("span#play-one-turn").innerText = playerOne.turnScore;
	});
	document.getElementById("play-one-hold").addEventListener("click", function(){
		playerOne.holdScore();
		document.querySelector("span#play-one-game").innerText = playerOne.gameScore;
		game.changeTurn();
	})
	p2Roll = document.querySelector("button#play-two-roll");
	p2Roll.addEventListener("click", function(){
		let lastRoll = playerTwo.roll();
		console.log(lastRoll);
		document.querySelector("span#play-two-turn").innerText = playerTwo.turnScore;
	});
	document.getElementById("play-two-hold").addEventListener("click", function(){
		playerTwo.holdScore();
		document.querySelector("span#play-two-game").innerText = playerTwo.gameScore;
		game.changeTurn();
	})


}

window.addEventListener("load", function(){
	document.getElementById("player-name-input").addEventListener("submit", nameSubmit);

});
// game
// 	player1 = playerObject
// 	player2 = playerObject
// 	activePlayer = true;

// player
// 	player turn
// 		while player's turn
// 			while last roll !== 1
// 				roll 
// 					last roll = roll 
// 					roundscore += roll
// 				hold 
// 					gamescore += roundscore
// 					activePlayer = !thisplayerturn
		



