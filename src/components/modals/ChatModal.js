import React from 'react'
import PropTypes from "prop-types";
import ChatBot from 'react-simple-chatbot';

import styled, { ThemeProvider } from 'styled-components'

const ModalStyled = styled.div`
  position: fixed;
  bottom: 15%;
  right: 5%;
  z-index: 1;
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
    border-radius: 10%;

    &:hover {
    background-color: #ddd;
    cursor: pointer;
    }
`
const theme = {
  background: '#f5f8fb',
  headerBgColor: 'skyblue',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#eb879c',
  botFontColor: '#fff',
  userBubbleColor: 'skyblue',
  userFontColor: '#fff',
  botDelay: '100000'
};



const steps = [
  {
    id: '1',
    message: 'Your name, dude? Bop!',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}! Wanna play a game?',
    trigger: '4',
  },
  {
    id: '4',
    options: [
      { value: 1, label: 'Yes', trigger: '6' },
      { value: 2, label: 'No', trigger: '5' },
      { value: 3, label: 'Maybe', trigger: '9' },
    ],
  },
  {
    id: '5',
    message: 'So sad..., goodbye then!',
    end: true,
  },
  {
    id: '6',
    message: 'Good, good! What nubmer I am thinking?',
    trigger: '7',
  },
  {
    id: '7',
    options: [
      { value: 1, label: '69', trigger: '8' },
      { value: 2, label: '228', trigger: '8' },
      { value: 3, label: '420', trigger: '8' },
      { value: 4, label: '1337', trigger: '8' },
      { value: 5, label: '>9000', trigger: '8' },
      { value: 6, label: '42', trigger: '8' },
      { value: 7, label: '404', trigger: '8' },
 
    ],
  },
  {
    id: '8',
    message: "Wrong, wrong, let`s try again my sweetheart?",
    trigger: '4',
  },
  {
    id: '9',
    component: (
      <div> Wow, wow, wow, think again! </div>
    ),
    trigger: '3',
  },

];

export default function ChatModal (props) {

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
        <ThemeProvider theme={theme}>
        <ChatBot steps={steps} height={'400px'} width={'300px'}/>
        </ThemeProvider>

      </ModalStyled>
        </>
    )
}

ChatModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };