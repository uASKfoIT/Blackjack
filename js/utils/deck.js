//Import Files
import {UI_displayPlayerHands, UI_TrueCount} from './ui_actions.js';

//Game State
import { trueCount } from './game_state.js';
import Game_State from './game_state.js';


//Generate Deck
 export function generateDeck(numDecks){

    const deck = [
        // Hearts
        {rank: "Ace", value: 1, suit: "Hearts", img: "https://i.ibb.co/HDrkDSts/ace-of-hearts.png"},
        {rank: "2", value: 2, suit: "Hearts", img: "https://i.ibb.co/whQtyJsN/2-of-hearts.png"},
        {rank: "3", value: 3, suit: "Hearts", img: "https://i.ibb.co/21VDT2dL/3-of-hearts.png"},
        {rank: "4", value:4, suit: "Hearts", img: "https://i.ibb.co/TqrzshxV/4-of-hearts.png"},
        {rank: "5", value: 5, suit: "Hearts", img: "https://i.ibb.co/fGqBn6Yy/5-of-hearts.png"},
        {rank: "6", value:6, suit: "Hearts", img: "https://i.ibb.co/39XWB1c5/6-of-hearts.png"},
        {rank: "7", value:7, suit: "Hearts", img: "https://i.ibb.co/Wp5x8MpF/7-of-hearts.png"},
        {rank: "8", value:8, suit: "Hearts", img: "https://i.ibb.co/pvKrcMkd/8-of-hearts.png"},
        {rank: "9", value:9, suit: "Hearts", img: "https://i.ibb.co/HL5xHwmL/9-of-hearts.png"},
        {rank: "10", value:10, suit: "Hearts", img: "https://i.ibb.co/NdZNDFjF/10-of-hearts.png"},
        {rank: "Jack", value:10, suit: "Hearts", img: "https://i.ibb.co/Q3Cb2vZg/jack-of-hearts.png"},
        {rank: "Queen", value: 10, suit: "Hearts", img: "https://i.ibb.co/0pkwmNyC/queen-of-hearts.png"},
        {rank: "King", value: 10, suit: "Hearts", img: "https://i.ibb.co/xNgQpJf/king-of-hearts.png"},

        // Diamonds
        {rank: "Ace", value: 1, suit: "Diamonds", img: "https://i.ibb.co/v6J0VQGj/ace-of-diamonds.png"},
        {rank: "2", value: 2, suit: "Diamonds", img: "https://i.ibb.co/v9674TP/2-of-diamonds.png"},
        {rank: "3", value: 3, suit: "Diamonds", img: "https://i.ibb.co/rK385tVM/3-of-diamonds.png"},
        {rank: "4", value: 4, suit: "Diamonds", img: "https://i.ibb.co/Xr2mZYBc/4-of-diamonds.png"},
        {rank: "5", value: 5, suit: "Diamonds", img: "https://i.ibb.co/671smKsn/5-of-diamonds.png"},
        {rank: "6", value: 6, suit: "Diamonds", img: "https://i.ibb.co/PZZfw7hc/6-of-diamonds.png"},
        {rank: "7", value: 7, suit: "Diamonds", img: "https://i.ibb.co/KcQq8z56/7-of-diamonds.png"},
        {rank: "8", value: 8, suit: "Diamonds", img: "https://i.ibb.co/h0V5mfD/8-of-diamonds.png"},
        {rank: "9", value: 9, suit: "Diamonds", img: "https://i.ibb.co/N2vGJ8xD/9-of-diamonds.png"},
        {rank: "10", value: 10, suit: "Diamonds", img: "https://i.ibb.co/wZthdsy7/10-of-diamonds.png"},
        {rank: "Jack", value: 10, suit: "Diamonds", img: "https://i.ibb.co/vCHV7y2v/jack-of-diamonds.png"},
        {rank: "Queen", value: 10, suit: "Diamonds", img: "https://i.ibb.co/67gcBcQb/queen-of-diamonds.png"},
        {rank: "King", value: 10, suit: "Diamonds", img: "https://i.ibb.co/W4HPdFvk/king-of-diamonds.png"},

        // Clubs
        {rank: "Ace", value: 1, suit: "Clubs", img: "https://i.ibb.co/RGPB3RYL/ace-of-clubs.png"},
        {rank: "2", value: 2, suit: "Clubs", img: "https://i.ibb.co/WpNCbV9s/2-of-clubs.png"},
        {rank: "3", value: 3, suit: "Clubs", img: "https://i.ibb.co/XZMPCrsP/3-of-clubs.png"},
        {rank: "4", value: 4, suit: "Clubs", img: "https://i.ibb.co/zWWjmRD6/4-of-clubs.png"},
        {rank: "5", value: 5, suit: "Clubs", img: "https://i.ibb.co/BV1tFBgg/5-of-clubs.png"},
        {rank: "6", value: 6, suit: "Clubs", img: "https://i.ibb.co/d0k2QdBN/6-of-clubs.png"},
        {rank: "7", value: 7, suit: "Clubs", img: "https://i.ibb.co/wF7Q8YMx/7-of-clubs.png"},
        {rank: "8", value: 8, suit: "Clubs", img: "https://i.ibb.co/xKpW0Fz3/8-of-clubs.png"},
        {rank: "9", value: 9, suit: "Clubs", img: "https://i.ibb.co/XHDsdnK/9-of-clubs.png"},
        {rank: "10", value: 10, suit: "Clubs", img: "https://i.ibb.co/G4QGWt1s/10-of-clubs.png"},
        {rank: "Jack", value: 10, suit: "Clubs", img: "https://i.ibb.co/99wrQn9d/jack-of-clubs.png"},
        {rank: "Queen", value: 10, suit: "Clubs", img: "https://i.ibb.co/RJhKFW1/queen-of-clubs.png"},
        {rank: "King", value: 10, suit: "Clubs", img: "https://i.ibb.co/fY1kT6Lb/king-of-clubs.png"},

        // Spades
        {rank: "Ace", value: 1, suit: "Spades", img: "https://i.ibb.co/rhQXF2z/ace-of-spades.png"},
        {rank: "2", value: 2, suit: "Spades", img: "https://i.ibb.co/6cZh0bjW/2-of-spades.png"},
        {rank: "3", value: 3, suit: "Spades", img: "https://i.ibb.co/m5nqmMWG/3-of-spades.png"},
        {rank: "4", value: 4, suit: "Spades", img: "https://i.ibb.co/WpMHYDyR/4-of-spades.png"},
        {rank: "5", value: 5, suit: "Spades", img: "https://i.ibb.co/mrbhD0ty/5-of-spades.png"},
        {rank: "6", value: 6, suit: "Spades", img: "https://i.ibb.co/CpQtpx5z/6-of-spades.png"},
        {rank: "7", value: 7, suit: "Spades", img: "https://i.ibb.co/RpV2ndcb/7-of-spades.png"},
        {rank: "8", value: 8, suit: "Spades", img: "https://i.ibb.co/PvL1rXr1/8-of-spades.png"},
        {rank: "9", value: 9, suit: "Spades", img: "https://i.ibb.co/b5TPFj2b/9-of-spades.png"},
        {rank: "10", value: 10, suit: "Spades", img: "https://i.ibb.co/dhBsPPR/10-of-spades.png"},
        {rank: "Jack", value: 10, suit: "Spades", img: "https://i.ibb.co/Q31vCPPz/jack-of-spades.png"},
        {rank: "Queen", value: 10, suit: "Spades", img: "https://i.ibb.co/XrS7ScpW/king-of-spades.png"},
        {rank: "King", value: 10, suit: "Spades", img: "https://i.ibb.co/wZqNwTsC/queen-of-spades.png"}
    ];

  
    let temp_deck = [];

    for(let i = 0; i < numDecks; i++){
        temp_deck = temp_deck.concat(deck);
    }

    shuffleDeck(temp_deck);

    return temp_deck;
}

//Shuffle Deck
export function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index
    [deck[i], deck[j]] = [deck[j], deck[i]]; // swap
  }
}


export function dealCard(toWhom){
  const card = Game_State.shoe_deck.pop();

  //dealer
  if(toWhom === 0){
    Game_State.dealer_hand.push(card);
  }
  //player
  else{
    Game_State.player_hand.push(card);
  }

  // update true count based on card rank
  let countChange = 0;
  if (["2", "3", "4", "5", "6"].includes(card.rank)) {
    countChange = 1;
  } else if (["10", "Jack", "Queen", "King", "Ace"].includes(card.rank)) {
    countChange = -1;
  }
  trueCount(countChange);

  //display hand to UI
  UI_displayPlayerHands();
  UI_TrueCount();
}