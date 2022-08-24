# PIG DICE

#### By Noah Lundquist and Skylan Lew

#### _{Brief description of application}_

## Technologies Used

* HTML
* CSS
* Javascript

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* 


## Known Bugs

* 
## License

[GNU GPL3.0](https://choosealicense.com/licenses/gpl-3.0/)

Copyright (c) 2022 Noah Lundquist, Skylan Lew

## Tests

Describes: rollDice()

Test 1: "It will randomize between 1-6 and return that number."
Code:
  rollDice();
Expected Result:
  A number 1, 2, 3, 4, 5 or 6



Describe: Player.Object

Test 1: scoreTurn will hold value of rolls;
Code: const player1Score = new Score("player1");
Expected result:
  undefined

Describe: Score.prototype.rollDice()

Test 1: it will roll the dice, and if the player rolls a 1, it sets the score to 0 and returns "false," otherwise it adds the number to their score and returns "true"

Code: 
const player1Score = new Player("player1");
player1Score.rollDice();
Expected result:
  "Player rolled 1" false
  or
  turnScore value true


Describe: Score.prototype.holdScore()

Test 1: It will add the turn score to the game score and return "true"
Code:
  const player1Score = new Player("player1");
  player1Score.rollDice();
  player1Score.rollDice();
  player1Score.holdScore();
Expected Result:
  Y
  X
  X, true

Describe Game.prototype.changeTurn()

Test 1: It will change Game.activePlayer between 1 and 2 when it takes "true"
Code:
let player1 = new Player("Saul");
let player2 = new Player("Cindy");
let game = new Game(player1, player2);
changeTurn(true);
changeTurn(true);
changeTurn(true);
changeTurn(false);
Expected Result:
Active Player = 2
Active Player = 1
Active Player = 2
Active Player = 2















Game constructor?
-Dice
-Score 1
-Score 2

Dice Constructor
- 6 numbers
- protoptype function ROLL random number

Score constructor
- holds each roll from a player
- prototype function that calc total score

Turn Changer Function
- activeplayer


function changeTurn(result){
  if (result === "false"){
    //change active player
  }
}