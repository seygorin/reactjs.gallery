import React, { useState, useContext } from 'react';
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';

import { GlobalContext } from '../GlobalState';

import styled from 'styled-components'

const ModalStyled = styled.div`
    width: 90%;
    max-width: 500px;
    background: white;
    border: 1px solid #ccc;
    transition: 1.1s ease-out;
    box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
    filter: blur(0);
    transform: scale(1);
    opacity: 1;
    visibility: visible; 
    padding: 10px; 
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`
const ModalButtonStyled = styled.button`
    border: 0;
    background: skyblue;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    line-height: 1;
    outline: none;
    float: right;
    margin: 5px;

    &:hover {
    background-color: #ddd;
    cursor: pointer;
    }
`
const TextStyled = styled.div`
  padding: 2%;
`
const LabelStyled = styled.label`
  padding: 5%;
`


export default function AddCardModal (props) {

    let history = useHistory();

    const { addCard, cards } = useContext(GlobalContext);
  
    const [title, setTitle] = useState("Bop!");
    const [images, setImages] = useState("https://source.unsplash.com/800x600");
  
    const onSubmit = (e) => {
      e.preventDefault();
      const newCard = {
        id: cards.length + 1,
        title,
        images,
      };
      addCard(newCard);
      history.push("/");
    };
    
    const onClose = e => {
        props.onClose && props.onClose(e);
      };
    
    if (!props.show) {
        return null;
    }
    
    return ( 
        <>
        <ModalStyled>
          <ModalButtonStyled onClick={(e) => { onClose();}}>
            Close
        </ModalButtonStyled>
        <div>
          <form onSubmit={onSubmit}>
            <TextStyled>
              <LabelStyled
                htmlFor="title">
                Title
              </LabelStyled>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Set title"
              />
            </TextStyled>
            <TextStyled>
              <LabelStyled
                htmlFor="images">
                Put image URL
              </LabelStyled>
              <input
                value={images}
                onChange={(e) => setImages(e.target.value)}
                type="text"
                placeholder="Image URL"
              />
            </TextStyled>
            <div>
            <ModalButtonStyled>
                Add card
            </ModalButtonStyled>
            </div>
          </form>
        </div>
      </ModalStyled>
        </>
    )
}

AddCardModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  }