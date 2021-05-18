import React from "react"
import InfiniteScroll from '../API/InfiniteScroll'

import styled from 'styled-components'

const AboutStyled = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 70px);
`

const TextStyled = styled.p`
  padding: 2%;
  font-size: 20px;
  font-weight: bold;
`

const About = () => {
  return  (
          <AboutStyled>
            <TextStyled>About Space!</TextStyled> 
            <InfiniteScroll />
          </AboutStyled>
  )
}

export default About