//Import Files
import {UI_GameButtons, UI_BetSpot,UI_Scoreboard, UI_PlayerBalance, UI_ShoeDeck, 
        UI_Bettingchips,UI_GameResults,UI_Gameboard,
        UI_displayPlayerHands,UI_TrueCount
    } from './ui_actions.js';

    import {generateDeck, dealCard} from './deck.js';

import {setChipImages, setChipListeners, initialize_player_chips} from './betting_chips.js';

import {initializeButtonListeners} from './event_handlers.js';

//Game State
import {resetBet, resetPlayerHands, resetGame, nexthand_state,  playing_state, gameover_state,
        gameState, playerBalance, playerBet, playerScore, dealerScore, checking_state,
    } from './game_state.js';

import Game_State from './game_state.js'; 

//Variables
export const DEALER = 0;
export const PLAYER = 1;

const PLAYERWINS = 0;
const DEALERWINS = 1;
const TIE = 2;

const FIRSTHAND = 0;
const HIT = 1;
const STAY = 2;
const DOUBLEDOWN = 3;

//Check if Winner
export function checkWinner(status){
    handleChecking();

    let playerHand = Game_State.player_hand.reduce((sum, card) => sum + card.value, 0);
    let dealerHand = Game_State.dealer_hand.reduce((sum, card) => sum + card.value, 0);

    if(status === FIRSTHAND){
       if(playerHand === 21 && dealerHand === 21){
        handleGameOver(TIE);
        return;
       } 
       if(playerHand === 21){
        handleGameOver(PLAYERWINS);
        return;
       } 
       if(dealerHand === 21){
        handleGameOver(DEALERWINS);
        return;
       }
       finishChecking();    
    }

    if(status === HIT){
        if(playerHand > 21){
            handleGameOver(DEALERWINS);
            return;
        }
        finishChecking();
    }

    if(status === STAY || status === DOUBLEDOWN){
        if(DOUBLEDOWN) playerBet(+Game_State.player_bet);
        console.log("Status: ", status);
        console.log("Player Hand: ", playerHand);
        console.log("Dealer Hand: ", dealerHand);

        while(dealerHand <= 17){
            console.log("is this running? - checking hand");
            dealCard(DEALER);
            dealerHand = Game_State.dealer_hand.reduce((sum, card) => sum + card.value, 0);
        }

        if (dealerHand > 21){
            setTimeout(() => handleGameOver(PLAYERWINS), 2000);
            return;
        }
        if (playerHand > dealerHand && playerHand <= 21){
            setTimeout(() => handleGameOver(PLAYERWINS), 2000);
            return;
        } 
        if(playerHand > 21){
            handleGameOver(DEALERWINS);
            return;
        }
        if (playerHand < dealerHand){
            setTimeout(() => handleGameOver(DEALERWINS), 2000);
            return;
        }
        setTimeout(() => handleGameOver(TIE), 2000);
    }
}

//Button Actions
export function handleClearAction(){
    nextHand();
}

export function handleStayAction(){
    checkWinner(STAY);
}

export function handleDealAction(){
    gameState(playing_state);
    setTimeout(() => dealCard(PLAYER), 500);
    setTimeout(() => dealCard(DEALER), 1000);
    setTimeout(() => dealCard(PLAYER), 1500);
    setTimeout(() => {
        dealCard(DEALER);
        checkWinner(FIRSTHAND);
    }, 2000);

}

export function handleHitAction(){
    dealCard(PLAYER);
    setTimeout(() => checkWinner(HIT), 700);
}

export function handleDoubledownAction(){
     dealCard(PLAYER);
    setTimeout(() => checkWinner(DOUBLEDOWN), 700);
}

export function handleNewGameAction(){
    newGame();
}

export function handleNextHandAction(){
    nextHand();
}

//Handle Gameover
export function handleGameOver(winner){
    switch (winner) {
        case PLAYERWINS:
            playerBalance(+Game_State.player_bet);
            playerScore(+1);
            break;
        case DEALERWINS:
            playerBalance(-Game_State.player_bet);
            dealerScore(+1);            
            break;
        case TIE:
            //no update to balance
            break;
    }
    gameState(gameover_state);
    UI_Gameboard();
    UI_GameResults(winner);
}

//Reset UI
export function resetUI(){
    UI_GameResults();
    UI_Gameboard();
    UI_displayPlayerHands();
    UI_GameButtons();
    UI_Bettingchips();
    UI_BetSpot();
    UI_Scoreboard();
    UI_PlayerBalance();
    initialize_player_chips();
    UI_TrueCount();
}

//Checking 'pause'
export function finishChecking(){
  Game_State.game_state = Game_State.previous_state;
  UI_GameButtons();
}

export function handleChecking(){
    console.log("Handle Checking ()");
    gameState(checking_state);
    UI_GameButtons();
}

//Generate Deck
function createDecks(){
    let temp_deck = generateDeck(Game_State.shoe_size);
    Game_State.shoe_deck = temp_deck;
    Game_State.visual_deck = temp_deck;
}

//STATES
export function loadGame(user_status){
    //initialize deck
    createDecks();

    //initialize player balance
    Game_State.player_balance = user_status ? 1000: 500;
    Game_State.working_balance = Game_State.player_balance;

    //initialize ui elements
    UI_PlayerBalance();
    UI_Scoreboard();
    UI_ShoeDeck();
    UI_Bettingchips();

    //initialilze betting chips
    setChipImages();
    setChipListeners();
    initialize_player_chips();

    //initialize button listeners
    initializeButtonListeners();
}


export function newGame(){
    console.log("New Game ()");
    resetGame();
    createDecks();
    nextHand();
}

export function nextHand(){
    console.log("Next Hand ()");
    gameState(nexthand_state);
    resetUI();
    resetBet();
    resetPlayerHands();
}

export function placingBet(){
    console.log("Placing Bet()");
    UI_GameButtons();
}

export function playingGame(){
    console.log("Playing Game ()");
    UI_GameButtons();
    UI_Bettingchips();
}

export function gameOver(){
    console.log("Game Over ()");
}


