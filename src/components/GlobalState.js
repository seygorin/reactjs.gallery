import React, { createContext, useReducer } from 'react'

import galleryReducer from './GalleryReducer'

const initialState = {
    cards: [
      {
        id: 1,
        title: "Bip!",
        images: "https://source.unsplash.com/800x600",
      }
    ]
  };

export const GlobalContext = createContext(initialState); 

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(galleryReducer, initialState);

    function addCard(card) {
        dispatch({
            type: "ADD_CARD",
            payload: card
        });
    }

    function editCard(card) {
        dispatch({
            type: "EDIT_CARD", 
            payload: card
        });
    }

    function removeCard(id) {
        dispatch({
            type: "REMOVE_CARD",
            payload: id
        })
    }
    
    
    return (
        <GlobalContext.Provider
            value={{
                cards: state.cards,
                addCard,
                editCard,
                removeCard
            }}
        >
            {children}
        </GlobalContext.Provider>

        
    )

}