import cardTypes from "./cardTypes";

const initState = {
    hidden: true
};



const cardReducer = (state=initState, action) => {
    switch(action.type) {
        case cardTypes.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
}

export default cardReducer;