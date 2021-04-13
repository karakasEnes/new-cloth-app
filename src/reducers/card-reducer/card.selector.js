import {createSelector} from "reselect";

const selectCard = state => state.card


export const selectCardItems = createSelector(
    [selectCard],
    card => card.card_items
)


export const selectCardItemsCount = createSelector(
    [selectCardItems],
    card_items => card_items.reduce((accumulate, cardItem) => 
                        accumulate + cardItem.quantity, 0)
)