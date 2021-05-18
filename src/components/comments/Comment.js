import React from 'react'

import styled from 'styled-components'

const ButtonStyled = styled.button`
  margin-left: 2%;
  font-size: 15px;

  background-color: #eb879c;
    border: none;
    color: white;
    outline: none;
    height: 20px;
    width: 20px;
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

const Comment = ({ comment, removeComment }) => {
  return (
    <div>
      <span>{comment}</span>
      <ButtonStyled onClick={() => removeComment(comment)}>&#x2702;</ButtonStyled>
    </div>
  );
};

export default Comment  


