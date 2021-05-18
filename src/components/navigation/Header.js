import React, { useState } from 'react'
import LoginModal from '../modals/LoginModal'
import Form from '../modals/Form'
import HeaderTabs from '../navigation/HeaderTabs'
import ValidatedLoginModal from '../modals/ValidatedLoginModal'

import styled from 'styled-components'


const HeaderStyled = styled.div`
    overflow: hidden;
    background-color: skyblue;
    padding: 20px 10px;
`
const HeaderAStyled = styled.a `
    color: black;
    text-align: center;
    text-decoration: none;
    font-size: 18px; 

    border-radius: 4px;

    &:hover {
    background-color: #eba487;
    color: black;
    }

    &:active {
    background-color: #eb879c;
    color: white;
    }

`
const HeaderFloatStyled = styled.div`
    float: right;
`
const ButtonStyled = styled.div`
    font-size: 13px;

    &:hover {
    background-color: #eba487;
    color: black;
    }

    &:active {
    background-color: #eb879c;
    color: white;
    }
`
    

export default function Header() {
    const [showModal, setShowModal] = useState(false)
    const [showModalValid, setShowModalValid] = useState(false)
    const [showForm, setShowForm] = useState(false)
    
    const showModalHandle = () => {
        setShowModal(!showModal)
        }

    const showModalValidHandle = () => {
        setShowModalValid(!showModalValid)
        }
    
    const showFormHandle = () => {
        setShowForm(!showForm)
        }

    
    
    return (
    <HeaderStyled>
        <HeaderTabs />
        <HeaderFloatStyled>
            <HeaderAStyled href="#valid">
                <ButtonStyled onClick={() => { showModalValidHandle();}}>
                Login Valid
                </ButtonStyled>
            </HeaderAStyled>
            <ValidatedLoginModal onClose={ showModalValidHandle } show={ showModalValid } />
            <HeaderAStyled href="#login">
                <ButtonStyled onClick={() => { showModalHandle();}}>
                Login
                </ButtonStyled>
            </HeaderAStyled>
                <LoginModal onClose={ showModalHandle } show={ showModal } />  
            <HeaderAStyled href="#form">
                <ButtonStyled onClick={() => { showFormHandle();}}>
                Form
                </ButtonStyled>
            </HeaderAStyled>
                <Form onClose={ showFormHandle } show={ showForm } /> 
        </HeaderFloatStyled>
    </HeaderStyled>
    )
}

