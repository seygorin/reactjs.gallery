import React, { useState } from 'react'
import ChatModal from './modals/ChatModal'

import styled from 'styled-components'

const ButtonStyled = styled.button`
    position: fixed;
    bottom: 5%;
    right: 5%;
    background-color: #eb879c;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    outline: none;
    z-index: 10;
    cursor: pointer;

    &:hover {
    background-color: skyblue;
    color: white;
    }
    &:active {
    background-color: #eba487;
    color: white;
    }
    
`

export default function ChatButton() {
    const [showModal, setShowModal] = useState(false)
    
    const showModalHandle = () => {
        setShowModal(!showModal)
            }

    return (
        <>
        <ButtonStyled onClick={() => { showModalHandle();}}>
        Chat
        </ButtonStyled>
        <ChatModal onClose={ showModalHandle } show={ showModal } />
        </>
    )
}
