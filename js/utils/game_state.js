import {UI_GameButtons} from './ui_actions.js'

const Game_State = {
  game_state: "load_game",
  previous_state: "",
  player_balance: 0,
  working_balance: 0,
  player_bet: 0,
  shoe_size: 0,
  player_chips: [],
  shoe_deck: [],
  visual_deck:[],
  player_hand: [],
  dealer_hand: [],
  player_score: 0,
  dealer_score: 0,
  true_count: 0
};

export function shoeSize(size){
  Game_State.shoe_size = size;
}

export function gameState(newState){
  if(newState === "checking"){
    Game_State.previous_state = Game_State.game_state;
  }
  Game_State.game_state = newState;
}

export function playerBalance(balance){
  Game_State.player_balance += balance;
}

export function workingBalance(balance){
  Game_State.working_balance += balance;
}

export function playerBet(bet){
  Game_State.player_bet = bet;
}

export function playerScore(score){
  Game_State.player_score += score;
}

export function dealerScore(score){
  Game_State.dealer_score += score;
}

export function trueCount(count){
  Game_State.true_count += count;
}

export function resetBet() {
  Game_State.working_balance = Game_State.player_balance;
  Game_State.player_bet = 0;
  Game_State.player_chips = [];
}

export function resetPlayerHands(){
  Game_State.player_hand = [];
  Game_State.dealer_hand = [];
  Game_State.previous_state = "";
}

export function resetGame() {
  Game_State.player_score = 0;
  Game_State.dealer_score = 0;
  Game_State.shoe_deck = [];
  Game_State.visual_deck = [];
  Game_State.true_count = 0;
}

//Game States
export const loadgame_state = "load_game";
export const newgame_state = "new_game";
export const nexthand_state = "next_hand";
export const placingbet_state = "placing_bet";
export const playing_state = "playing";
export const gameover_state = "gameover";
export const checking_state = "checking";

export default Game_State;
