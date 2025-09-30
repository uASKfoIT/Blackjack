//Import Files
import {UI_BetSpot, UI_PlayerBalance, show_hide_element
    } from './ui_actions.js';

//Game State
import {placingbet_state, gameState, workingBalance} from './game_state.js';
import Game_State from './game_state.js';


//Chips
const chips = document.querySelectorAll(".chip");
export const active_chip = "active-chip";
export const unactive_chip = "unactive-chip";

//set chip images
export function setChipImages(){
    const chipData = [
        [1, 'https://i.ibb.co/TxSD2ySj/1-dollar-chip.png'],
        [5, 'https://i.ibb.co/5gYWDsy8/5-dollar-chip.png'],
        [25, 'https://i.ibb.co/35QvCKKt/25-dollar-chip.png'],
        [100, 'https://i.ibb.co/wNzkJbxd/100-dollar-chip.png'],
        [500, 'https://i.ibb.co/PGmP5vsT/500-dollar-chip.png'],
        [1000, 'https://i.ibb.co/7xZh8Gxs/1000-dollar-chip.png']
    ];

    chips.forEach((chip) => {
        const img = chip.querySelector('img');
        const chip_value = parseInt(chip.id);

        const match = chipData.find(entry => entry[0] === chip_value);
    
        if (match) {
            img.src = match[1];
        }
    })
}

//chip event listeners
export function setChipListeners(){
    chips.forEach((chip) => {
        chip.addEventListener("click", () => {
            if(chip.classList.contains(active_chip)){
                const chip_value = parseInt(chip.id);
                const chip_image = chip.querySelector('img').src;

                handleChipSelection(chip_value, chip_image);
            }
        })
    })
}

//Display Betting Chips
export function initialize_player_chips(){
    const user_balance = Game_State.working_balance;

    const active_chip = "active-chip";
    const unactive_chip = "unactive-chip";

    chips.forEach((chip) => {
        const chip_value = chip.id;

        if(user_balance >= 1000){
            if(chip.classList.contains(unactive_chip)){
                show_hide_element(chip, unactive_chip, active_chip);
            }
        }
        else if(chip_value <= user_balance){
            if(chip.classList.contains(unactive_chip)){
                show_hide_element(chip, unactive_chip, active_chip);
            }
        }else if(chip_value > user_balance){
            if(chip.classList.contains(active_chip)){
                show_hide_element(chip, active_chip, unactive_chip);
            }
        }
    })
}

//Handle chip selection
export function handleChipSelection(value, imgSrc){
  gameState(placingbet_state);

  Game_State.player_chips.push({ value, imgSrc });
  Game_State.player_bet = Game_State.player_chips.reduce((sum, chip) => sum + chip.value, 0);
  workingBalance(-value);

  UI_BetSpot();
  UI_PlayerBalance();
  initialize_player_chips();
}
