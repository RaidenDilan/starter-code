// Represents the cards of the game.
var cards = ['queen', 'queen', 'king', 'king'];

// Represents the cards in play.
var cardsInPlay = [];


var board = document.getElementById('game-board');

function createBoard() {
  // Loop through your cards array.
  for (var i=0; i<cards.length; i++) {
    // Creates a div element which will be used as a card.
    var cardElement = document.createElement('div');
    // Add a class to the card element to help link styling.
    cardElement.className = 'card';
	// This will set the card's 'data-card'.
    cardElement.setAttribute('data-card', cards[i]);
	// When any card is clicked the function isTwoCards will be activated.
    cardElement.addEventListener('click', isTwoCards);

    // Appends the card to the board
    board.appendChild(cardElement);
  }
};
// Checks to see if there are any cards in play.
function isTwoCards() {
  // Adds a card to array of cards being viewed/clicked.
  cardsInPlay.push(this.getAttribute('data-card'));
	// Shows the card's image when clicked.
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='images/king.png' alt='King of Spades'/>"; // King image
	} else {
		this.innerHTML = "<img src='images/queen.png' alt='Queen of Hearts'/>"; //Queen image
	}
  // Checks for a match if you have two cards in play/clicked.
  if (cardsInPlay.length === 2) {
    // Passes the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // Clears cards in play array for next try
    cardsInPlay = [];
  }
};
function isMatch(cards) {
  // Alerts the viewer with a winning message
  if (cards[0] === cards[1]) {
    alert("Congradulations!");
  // Alerts the viewer with a losing message
  } else {
    reset();
    alert("Please try again!");

  }
};
function reset() {
  for (var i=0; i<cards.length; i++) {
    if (document.getElementsByClassName('card')[i]) {
      document.getElementsByClassName('card')[i].innerHTML = "";
    }
  }
}

createBoard();