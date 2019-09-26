$(document).ready(function() {

    var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    var suits = ["Clubs", "Spades", "Hearts", "Diamonds"];


    suits.forEach(function(suit){
      ranks.forEach(function(rank){
        var card = rank + " of " + suit;
        console.log(suits);
        // document.ul.appendChild(document.createElement('li'));
        return $('ul#deckBuilder').append('<li>' + card + '</li>');
    })
  });
});
