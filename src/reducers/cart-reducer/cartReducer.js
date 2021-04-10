import cartActionTypes from "./cartTypes"

const initState = {
    hidden: true
}

const cartReducer = (state=initState, action) => {
    switch (action.type) {
        case cartActionTypes.switch_hidden:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;