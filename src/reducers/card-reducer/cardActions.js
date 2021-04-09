import cardTypes from "./cardTypes"

// we not going to pass any payload because we dont need any action?
const toggleCard = () => ({
    type: cardTypes.TOGGLE_CART
});

export default toggleCard;