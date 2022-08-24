// Business Logic

function rollDice(){
	return Math.floor(Math.random() * (7 - 1) + 1);
}

function Score(playerName){
	this.turnScore = 0
}

Score.prototype.rollDice = function(){
	const roll = rollDice();
	if (roll === 1) {
		return false
	}	else {
		this.turnScore += roll
	}
}

