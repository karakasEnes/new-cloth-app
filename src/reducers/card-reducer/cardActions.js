import cardTypes from "./cardTypes"

// we not going to pass any payload because we dont need any action?
export const toggleCard = () => ({
    type: cardTypes.TOGGLE_CART
});

export const addItem = (item) => ({
    type: cardTypes.ADD_ITEM,
    payload: item
})