export default function galleryReducer( state, action ) {
    switch (action.type) {
        case "ADD_CARD": 
        return {
            ...state, 
            cards: [...state.cards, action.payload],
        };

        case "EDIT_CARD": 
            const updatedCard = action.payload;

            const updatedCards = state.cards.map((card) => {
                if (card.id === updatedCard.id) {
                    return updatedCard;
                }
                return card
            });
            
            return {
                ...state,
                cards: updatedCards,
            };
        
        case "REMOVE_CARD": 
            return {
                ...state, 
                cards: state.cards.filter(
                    (card) => card.id !== action.payload
                ),
            }
            
        default: 
            return state;

    }
}