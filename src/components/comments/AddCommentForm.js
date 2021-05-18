import React, { useState } from 'react';

import styled from 'styled-components'

const CommentContainer = styled.div`
  position: fixed;
  top: 71%;
  width: 18.5%;

  @media only screen and (max-width: 700px) {
    position: relative;
    width: 100%;
    }
`

const ButtonStyled = styled.button`
    background-color: skyblue;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    width: 100%;
    outline: none;
    z-index: 10;
    cursor: pointer;

    &:hover {
    background-color: #eb879c;
    color: white;
    }
    &:active {
    background-color: #eba487;
    color: white;
    }
`

const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  padding: 1%;

`


const AddCommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment('');
  };

  return (
    <CommentContainer>
      <form onSubmit={handleSubmit}>
        <TextArea placeholder={'put a madre comment here!'} value={comment} onChange={(e) => setComment(e.target.value)} />
        <ButtonStyled>Yarrr!</ButtonStyled>
      </form>
    </CommentContainer>
  );
};

export { AddCommentForm as default };