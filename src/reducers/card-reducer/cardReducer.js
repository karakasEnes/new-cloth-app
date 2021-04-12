import cardTypes from "./cardTypes";
import {addCardUtils} from "./card.utils";


const initState = {
    hidden: true,
    card_items : []
};



const cardReducer = (state=initState, action) => {
    switch(action.type) {
        case cardTypes.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            };
        
        
        case cardTypes.ADD_ITEM:
            return {
                ...state,
                card_items: addCardUtils(state.card_items, action.payload)
            }
            // old code
                // card_items: [...state.card_items, action.payload]
        default:
            return state;
    }
}

export default cardReducer;