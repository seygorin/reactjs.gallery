import React from 'react'; 
import LikeButton from './LikeButton'

import styled from 'styled-components'

const Content = styled.div`
    min-height: calc(100vh - 70px);
`

const GridStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    

    @media only screen and (max-width: 700px) {
    flex-direction: column;
    }
`
const CardStyled = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    height: auto;
    width: 30vw;
    margin: 2%;

    &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    @media only screen and (max-width: 700px) {
    width: 80vw;
    margin: 3%;
    }
`
const ContainerStyled = styled.div `
    padding: 20px 20px;
`
const ImgStyled = styled.img`
    width: 100%;
`
const ButtonStyled = styled.button`

    background-color: skyblue; 
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: center;
    font-size: 16px;
    outline: none;

    &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`
const TextStyled = styled.p`
    text-align: center;
    margin: 10%;
`
const cards = [1, 2, 3, 4]

export default function GalleryStaticCards() {

    function toggle() {
        document.getElementById('button').click();
        }

    return (
        <>
        <Content>
            <GridStyled>
            {cards.map(() => (
                <CardStyled>
                    <ImgStyled src="https://source.unsplash.com/800x600" width="30%" alt="Random"/>
                    <GridStyled><LikeButton /></GridStyled>
                    
                    <ContainerStyled>
                        <TextStyled>Dummydummytext</TextStyled> 
                        <div>
                            <ButtonStyled onClick={toggle}>NOT</ButtonStyled>
                            <ButtonStyled style={{ background: "#eb879c", float: "right"}} onClick={toggle}>LIKE</ButtonStyled>
                        </div>
                    </ContainerStyled>
                </CardStyled>
                ))}
            </GridStyled>
        </Content>
        </>

    )
}