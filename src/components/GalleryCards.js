import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AddCardModal from './modals/AddCardModal'
import LikeButton from './LikeButton'
import Comments from './comments/Comments'

import { GlobalContext } from './GlobalState'

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
    margin: 2.5% 0% 2.5% 5%;

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
const ButtonStyledSecond = styled.button`
    background-color: #eb879c; 
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: center;
    font-size: 16px;
    outline: none;
    float: right;

    &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`
const ButtonStyledSticky = styled.button`

  position: fixed;
    bottom: 5%;
    left: 5%;
    z-index: 10;
    background: #eb879c;
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: right;
    font-size: 15px;
    outline: none;

    z-index: 10;

    margin: 0px;
    cursor: pointer;
    

    &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`
const TextStyled = styled.p`
    text-align: center;
    margin: 10%;
    min-height: 20px;
`
const ImgContainer = styled.p`
    text-align: center;
    min-height: 250px;
`


export const GalleryCards = () => {
    const { cards, removeCard } = useContext(GlobalContext);

    const [showModal, setShowModal] = useState(false)
    
    const showModalHandle = () => {
        setShowModal(!showModal)
        }

    return ( 
      <>
      <Content>
        <ButtonStyledSticky onClick={() => { showModalHandle();}} >
          ADD CARD
        </ButtonStyledSticky>
        <AddCardModal onClose={ showModalHandle } show={ showModal } />

        {cards.length > 0 ? (
          <>
          <GridStyled>
            {cards.map((card) => (
              <CardStyled key={card.id}>
              <ImgContainer>
                <ImgStyled src={card.images} alt="Random"/>
              </ImgContainer>

                <GridStyled><LikeButton /></GridStyled>

              <ContainerStyled>
                <TextStyled>
                    {card.title}
                </TextStyled>
                <Link
                  to={`/edit/${card.id}`}>
                <ButtonStyled>EDIT</ButtonStyled>
                </Link>
                <ButtonStyledSecond
                  onClick={() => removeCard(card.id)}>
                  DELITE
                </ButtonStyledSecond>
              </ContainerStyled>
              </CardStyled>
            ))}
            </GridStyled>
          </>
        ) : (
          <TextStyled>Ooops... Try to add new card!</TextStyled>
        )}
        <Comments />
      </Content>
      </>

    )
}

