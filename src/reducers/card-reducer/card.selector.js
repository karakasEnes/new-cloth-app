import {createSelector} from "reselect";


const selectCard = state => state.card

export const selectCardItems = createSelector(
    [selectCard],
    card => card.card_items
)

export const selectCardHidden = createSelector(
    [selectCard],
    card => card.hidden
)

export const selectCardItemsCount = createSelector(
    [selectCardItems],
    card_items => card_items.reduce((accumulate, cardItem) => 
                        accumulate + cardItem.quantity, 0)
)


export const selectCardTotal = createSelector(
    [selectCardItems],
    cardItems => cardItems.reduce(
        (accQ, cardItem) => accQ + cardItem.quantity * cardItem.price, 0
    )
)