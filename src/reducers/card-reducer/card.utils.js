export const addCardUtils = (cardItems, cardToAdd) => {
    const existCard = cardItems.find(card => 
        card.id === cardToAdd.id)

    if (existCard) {
        return cardItems.map(card => 
            card.id === cardToAdd.id ? 
            ({...card, quantity: card.quantity + 1}) 
            :  card)
    }

    return [...cardItems, {...cardToAdd, quantity:1}]
}