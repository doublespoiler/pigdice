// Business Logic

function rollDice(){
	return Math.floor(Math.random() * (7 - 1) + 1);
}

function Player(playerName){
	this.turnScore = 0;
  this.gameScore = 0;
}

Player.prototype.rollDice = function(){ //returns if the player gets to keep playing
	const roll = rollDice();
	if (roll === 1) {
    this.turnScore = 0;
    console.log("Player rolled 1");
    changeTurn();
		return false;
	}	else {
		this.turnScore += roll;
    console.log(this.turnScore);
    return true;
	}
}

Player.prototype.holdScore = function(){ //returns true to pass player turn
  this.gameScore += this.turnScore;
  console.log(this.gameScore);
  changeTurn();
  return true;
}

function changeTurn(changeTurn){
  let activePlayer = 1;

  return activePlayer;
}