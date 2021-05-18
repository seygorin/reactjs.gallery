import React from 'react'

import styled from 'styled-components'

const FooterStyled = styled.div`
    background-color: skyblue;
    color: black;
    text-align: center;
`
const TextStyled = styled.a`
    color: black;
    text-align: center;
    text-decoration: none;
    font-size: 18px; 

    &:hover {
    background-color: #eba487;
    color: black;
    }

    &:active {
    background-color: #eb879c;
    color: white;
    }
`
export default function Footer() {

    return (
        <FooterStyled>
            <TextStyled href="#fack">Fack to top</TextStyled>
        </FooterStyled>
    )
}
