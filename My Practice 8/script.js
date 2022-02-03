// Create a class named Card
// The card constructor takes two parameters
// 1. suit 2. value and assigns it to the
// suit and value of the object
// Add a getter property on the card that returns
// the name of the card  Example : Ace of Hearts if
// suit is Hearts and value is Ace
// suit : 'Hearts'
// value : 'Ace'  => 'Ace of Hearts'


class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
    get cardName(){
        return this.value + ' of ' + this.suit;
    }
}

// Create a class object named Deck
    // The deck should have private properties
    //  suits and values
    // which are a array of suit and value
    
    // It also should have a private array
    // property named cards which is a Array of
    //  Card Object
// To create this cards array loop through
// the private properties suits and values
// and create a card with them and push to the
// cards array

class Deck{
    #suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    #values = ['Ace','Two','Three','Four','Five', 'Six' , 'Seven' , 'Eight' , 'Nine' , 'Ten' , 'Jack' , 'Queen' , 'King'];
    #cards = [];
    #dealtCards = [];

    constructor(){
        this.reSetDeck()
    }

     // The Deck class should have a deal method to deal
    // a single card from the deck
    // After a card is dealt,
    // it is removed from the cards array. and insert them into
    // a private array named dealt cards
 
    deal(){
        let dealtcard = this.#cards.pop();
        this.#dealtCards.push(dealtcard);
        console.log('Card is Dealt.');
        console.log(dealtcard.cardName);
    }

    // There should be a shuffle method which
    //  makes sure the deck of cards has all 52 cards
    //  and then rearranges them randomly.

    shuffle(){
        if (this.#cards.length === 52) {
            this.#cards = this.#cards.sort(function(a,b){
                return Math.random() - 0.5;
            })
        }else{
            console.error('Deck must have all 52 cards!!!');
        }
    }


    // Create a method to reset the deck

    reSetDeck(){
        this.#cards = [];
        this.#dealtCards = [];
        for (let i = 0; i < this.#suits.length; i++) {
            for (let j = 0; j < this.#values.length; j++) {
                let card = new Card(this.#suits[i], this.#values[j]);
                this.#cards.push(card);
            }
        }
        console.log('Deck Reseted.')
    }
    // Create a method to list all dealt cards
    
    listDealtCards(){
        for (let i = 0; i < this.#dealtCards.length; i++) {
            console.log(this.#dealtCards[i].cardName);
        }
    }
    
    // Create a method to list all available cards


    listAvailableCards(){
        for (let i = 0; i < this.#cards.length; i++) {
                console.log(this.#cards[i].cardName);
        }
    }
}



