//Import Files
import {UI_player_score, UI_dealer_score, UI_player_balance, UI_betSpot_contaier, UI_betSpot_image, UI_betSpot_text, UI_shoe_deck_image,
       UI_bettingchips_container, UI_dealer_cards_container, UI_player_cards_container, UI_game_board_container,
       UI_new_game_button, UI_next_hand_button, UI_double_down_button, UI_clear_stay_button, UI_deal_hit_button,
       UI_clear_stay_button_text, UI_deal_hit_button_text, clear_text, stay_text, deal_text, hit_text,
       UI_game_results_container, UI_game_results_text, UI_true_count_text 
    } from './ui_game_elements.js';

//Class Names
export const display_off= "off";
export const show_betSpot = "show-betSpot";
export const show_gameresults = "show-game-results";
export const show_gameboard = "show-game-board";
export const show_button = "small-wood-button";
export const show_bettingchips = "show-betting-chips";

//Game State
import {loadgame_state, placingbet_state, playing_state, nexthand_state, checking_state, gameover_state
    } from './game_state.js';

import Game_State from './game_state.js'; 

//Change class name
export function show_hide_element(element, oldClass, newClass, multiple_items = false) {
    if (multiple_items) {
        const elements = document.querySelectorAll(element);
        elements.forEach(el => {
            if (el.classList.contains(oldClass)) {
                el.classList.replace(oldClass, newClass);
            }
        });
    } 
    else {
        if (element.classList.contains(oldClass)) {
            element.classList.replace(oldClass, newClass);
        }else{
        }
    }
}

//Render Hand
function renderHand(hand, container) {
    container.innerHTML = ""; 

    for (let i = 0; i < hand.length; i++) {
        const cardCount = container.children.length;

        const cardElement = document.createElement('div');
        cardElement.classList.add('single-card');

        const cardImage = document.createElement('img');
        cardImage.src = hand[i].img; 

        const deckWidth = container.offsetWidth;
        const offset = cardCount * (deckWidth * 0.1);
        cardElement.style.left = offset + 'px';

        cardElement.style.zIndex = cardCount + 1;
        
        cardElement.appendChild(cardImage);
        container.appendChild(cardElement);
    }
}

//Game Board
export function UI_Gameboard(){
    if(Game_State.game_state === gameover_state){
        show_hide_element(UI_game_board_container, show_gameboard, display_off);
    }else{
        show_hide_element(UI_game_board_container, display_off, show_gameboard);
    }
}

//Game Results
export function UI_GameResults(game_results){
    const PLAYERWINS = 0;
    const DEALERWINS = 1;
    const TIE = 2;

    if(Game_State.game_state === gameover_state){
         switch (game_results) {
            case PLAYERWINS:
                UI_game_results_text.textContent = "Player Wins";
                break;
            case DEALERWINS:
                UI_game_results_text.textContent = "Dealer Wins";
                break;
            case TIE:
                UI_game_results_text.textContent = "Tie";
                break;
        }
        show_hide_element(UI_game_results_container, display_off, show_gameresults);
        show_hide_element(UI_new_game_button, display_off, show_button);
        show_hide_element(UI_next_hand_button, display_off, show_button);
    }else{
        show_hide_element(UI_game_results_container, show_gameresults, display_off);
        show_hide_element(UI_new_game_button, show_button, display_off);
        show_hide_element(UI_next_hand_button, show_button, display_off);
    }
}

//Buttons
export function UI_GameButtons(){
    if(Game_State.game_state === placingbet_state){
        console.log("placing bet state in game buttons");
        show_hide_element(UI_clear_stay_button, display_off, show_button);
        show_hide_element(UI_deal_hit_button, display_off, show_button);
        UI_clear_stay_button_text.textContent = clear_text;
        UI_deal_hit_button_text.textContent = deal_text;

    }else if(Game_State.game_state === playing_state){
        console.log("playing state in game buttons");
        show_hide_element(UI_clear_stay_button, display_off, show_button);
        show_hide_element(UI_deal_hit_button, display_off, show_button);
        show_hide_element(UI_double_down_button, display_off, show_button);
        UI_clear_stay_button_text.textContent = stay_text;
        UI_deal_hit_button_text.textContent = hit_text;
    }else{
        console.log("the last else statement in game buttons");
        show_hide_element(UI_clear_stay_button,show_button, display_off);
        show_hide_element(UI_deal_hit_button, show_button, display_off);
        show_hide_element(UI_double_down_button, show_button, display_off);
    }
}

//Bet Spot
export function UI_BetSpot(){ 
    if(Game_State.game_state === placingbet_state || Game_State.game_state === playing_state || Game_State.game_state === checking_state){
        show_hide_element(UI_betSpot_contaier, display_off, show_betSpot);
        UI_betSpot_image.src = Game_State.player_chips[Game_State.player_chips.length - 1].imgSrc;
        UI_betSpot_text.textContent = Game_State.player_bet;
    }else{
        show_hide_element(UI_betSpot_contaier, show_betSpot, display_off);
        UI_betSpot_image.src = "";
        UI_betSpot_text.textContent = "";
    }
}

//Betting Chips
export function UI_Bettingchips(){
    if(Game_State.game_state === placingbet_state || Game_State.game_state === loadgame_state || Game_State.game_state === nexthand_state){
        show_hide_element(UI_bettingchips_container, display_off, show_bettingchips);
    }else{
        show_hide_element(UI_bettingchips_container, show_bettingchips, display_off);
    }
}

//Show Player Hands
export function UI_displayPlayerHands() {
    if (Game_State.game_state === playing_state || Game_State.game_state === checking_state) {
        renderHand(Game_State.dealer_hand, UI_dealer_cards_container);
        renderHand(Game_State.player_hand, UI_player_cards_container);
    } else {
        UI_dealer_cards_container.innerHTML = "";
        UI_player_cards_container.innerHTML = "";
    }
}

export function UI_TrueCount(){
    if(Game_State.game_state === gameover_state){
        UI_true_count_text.textContent = "";
    }else{
        UI_true_count_text.textContent = `True Count: ${Game_State.true_count}`;
    }
}

//Score Board
export function UI_Scoreboard(){
    UI_dealer_score.textContent = Game_State.dealer_score;
    UI_player_score.textContent = Game_State.player_score;
}

//Player Balance
export function UI_PlayerBalance(){
    UI_player_balance.textContent = Game_State.working_balance;
}
 
//Shoe Deck
export function UI_ShoeDeck(){
    UI_shoe_deck_image.src = "https://i.ibb.co/qFYZdPBv/card-deck.jpg";
}