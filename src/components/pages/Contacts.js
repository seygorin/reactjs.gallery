import React from "react"
import GoogleMap from '../API/GoogleMap'

import styled from 'styled-components'

const ContactsStyled = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 107px);
`
const TextStyled = styled.p`
  padding: 2%;

  font-size: 20px;
  font-weight: bold;
`

const Contacts = () => {
  return  (<ContactsStyled>
            <TextStyled>Contacts!</TextStyled> 
            <GoogleMap />
          </ContactsStyled>
  )
}

export default Contacts