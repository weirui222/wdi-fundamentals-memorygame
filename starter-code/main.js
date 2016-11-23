console.log("JS file is connected to HTML! Woo!");
var cards = ['queen','queen','king','king'];
var cardsInPlay=[];


var board=document.getElementById('game-board');
var createBoard=function(){
    for (var i = 0;i<cards.length; i++) {
        var cardElement= document.createElement('div');
        cardElement.className='card';
        cardElement.setAttribute('data-card', cards[i]);
        cardElement.addEventListener('click', isTwoCards)
        board.appendChild(cardElement);
    }
}



var isTwoCards=function(){
    cardsInPlay.push(this.getAttribute('data-card'));
    this.removeEventListener('click', isTwoCards);
    console.log(this.getAttribute('data-card'));
    if (this.getAttribute('data-card') === 'king') {
        this.innerHTML = "<img src='playing-card-king.jpg'>"; 
    } else {
        this.innerHTML = "<img src='playing-card-queen.jpg'>";
    }
    if (cardsInPlay.length === 2) {
        isMatch(cardsInPlay);
        cardsInPlay = [];
    }
}


var isMatch=function(cards){
    if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

createBoard();