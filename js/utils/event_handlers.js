//import - UI game elements
import {UI_clear_stay_button, UI_deal_hit_button, UI_new_game_button, UI_next_hand_button, UI_double_down_button,
       clear_text, stay_text, deal_text, hit_text,
    } from './ui_game_elements.js';

//import - UI actions
import {show_button
    } from './ui_actions.js';

//import - Game actions
import {handleClearAction, handleStayAction, handleDealAction, handleHitAction,
        handleNewGameAction, handleNextHandAction, handleDoubledownAction
    } from './game_actions.js';


//Buttons
export function initializeButtonListeners(){
    if (UI_clear_stay_button._hasListener && UI_deal_hit_button._hasListener) {
        console.log("both buttons have listners");
        return; 
    }
    
        //Clear & Stay
    UI_clear_stay_button.addEventListener("click", () => {
        if(UI_clear_stay_button.classList.contains(show_button)){
            const p_element = UI_clear_stay_button.querySelector(".small-wood-button__color2 p");
            const button_text = p_element.textContent;

            if(button_text === clear_text){
                handleClearAction();
                console.log("clear button pressed");
            }
            if(button_text === stay_text){
                handleStayAction();
                console.log("stay button pressed");
            }
        }
    })

        //Deal & Hit
    UI_deal_hit_button.addEventListener("click", () => {
        if(UI_deal_hit_button.classList.contains(show_button)){
            const p_element = UI_deal_hit_button.querySelector(".small-wood-button__color2 p");
            const button_text = p_element.textContent;
           
            if(button_text === deal_text){
                handleDealAction();
                console.log("deal button pressed");
            }
            if(button_text === hit_text){
                handleHitAction();
                console.log("hit button pressed");
            }
        }
    })


        //New Game
    UI_new_game_button.addEventListener("click", ()=> {
        handleNewGameAction();
    })

        //Next Hand
    UI_next_hand_button.addEventListener("click", () => {
        handleNextHandAction();
    })

        //Double down
    UI_double_down_button.addEventListener("click", ()=> {
        handleDoubledownAction();
    })
}

