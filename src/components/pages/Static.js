import React from 'react'
import GalleryStaticCards from '../GalleryStaticCards'

import styled from 'styled-components'

const ContactsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


const GalleryStatic = () => {
  return  (<ContactsStyled>
            <GalleryStaticCards />
          </ContactsStyled>
  )
}

export default GalleryStatic