// Business Logic

function rollDice(){
	return Math.floor(Math.random() * (7 - 1) + 1);
}

function Score(playerName){
	this.turnScore = 0;
  this.gameScore = 0;
}

Score.prototype.rollDice = function(){ //returns if the player gets to keep playing
	const roll = rollDice();
	if (roll === 1) {
    this.turnScore = 0;
    console.log("Player rolled 1");
		return false;
	}	else {
		this.turnScore += roll;
    console.log(this.turnScore);
    return true;
	}
}
