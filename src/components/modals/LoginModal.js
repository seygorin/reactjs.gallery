import React from 'react'
import PropTypes from "prop-types";

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
    z-index: 1;
    
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


export default function LoginModal (props) {

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
                <h2>Login</h2>
                <input></input> 
                <h2>Pass</h2>
                <input></input> 
            <ModalButtonStyled onClick={(e) => { onClose();}}>
                Enter
            </ModalButtonStyled>
        </ModalStyled>
        </>
    )
}

LoginModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };