// Represents the cards if the game

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour  = "king";

// Checks for equality between two cards
/*if (cardOne === cardTwo) {
  alert("Yay! A Match!");
}

if (cardOne === cardFour) {
	alert("Yay! A Match!");
}*/

var gameBoard = document.getElementById("game-board");

var createCards = function() {
  for (var i = 0; i < 4; i++) {
    var newCards = document.createElement("div");
    newCards.className = "card";
    gameBoard.appendChild(newCards);
  }
};
createCards();