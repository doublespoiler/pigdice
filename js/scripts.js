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

Player.prototype.rollDice = function(){ //returns if the player gets to keep playing
	const roll = rollDice();
	if (roll === 1) {
    this.turnScore = 0;
    console.log("Player rolled 1");
    changeTurn();
		return true;
	}	else {
		this.turnScore += roll;
    console.log(this.turnScore);
    return false;
	}
}

Player.prototype.holdScore = function(){ //returns true to pass player turn
  this.gameScore += this.turnScore;
  console.log(this.gameScore);
  changeTurn();
  return true;
}
