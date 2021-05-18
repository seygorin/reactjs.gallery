import React, { useState } from 'react';
import styled from 'styled-components'

const ButtonStyled = styled.button`
    border: none;
    font-size: 20px;
    outline: none;
    background: white;
`

export default function LikeButton() {

  const [state, setState] = useState(true);
  
  function toggle() {
  
  setState(!state);
 
  }
  return (
    <ButtonStyled onClick={toggle}>
      {state ? <span>&#128148;</span> : <span>❤️</span>}
    </ButtonStyled>
    );
  }
