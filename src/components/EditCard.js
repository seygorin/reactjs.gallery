import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { GlobalContext } from './GlobalState';

import styled from 'styled-components'

const Content = styled.div`
    min-height: calc(100vh - 107px);
`

const ModalStyled = styled.div`
    width: 90%;
    max-width: 500px;
    background: white;
    border: 1px solid #ccc;
    transition: 1.1s ease-out;
    box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
    filter: blur(0);
    transform: scale(1);
    opacity: 1;
    visibility: visible; 
    padding: 10px; 
    
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

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

    &:hover {
    background-color: #ddd;
    cursor: pointer;
    }
`
const TextStyled = styled.div`
  padding: 2%;
`
const LabelStyled = styled.label`
  padding: 5%;
`


export const EditCard = (route) => {
    let history = useHistory();

    const { cards, editCard} = useContext(GlobalContext);

    const [selectedUser, setSelectedUser] = useState({
        id: null,
        title: "",
        images: "",
    });

    const currentUserId = route.match.params.id;

    useEffect(() => {
        const cardId = currentUserId;
        const selectedUser = cards.find(
            (currentCardTraversal) => currentCardTraversal.id === parseInt(cardId)
        );
        setSelectedUser(selectedUser);
    }, [currentUserId, cards]);

    const onSubmit = (e) => {
        e.preventDefault();
        editCard(selectedUser);
        history.push ("/");
    };
    
    const handleOnChange = (userKey, newValue) =>
    setSelectedUser({ ...selectedUser, [userKey]: newValue });

    if (!selectedUser || !selectedUser.id) {
    return <div>Invalid Card ID.</div>;
  }


  return (
    <>
    <Content>
      <ModalStyled>
        <Link to="/">          
          <ModalButtonStyled>
            Close
          </ModalButtonStyled>
        </Link>
        <form onSubmit={onSubmit}>
          <TextStyled>
          <LabelStyled
                htmlFor="title">
                Title
          </LabelStyled>
            <input
              value={selectedUser.title}
              onChange={(e) => handleOnChange("title", e.target.value)}
              type="text"
              placeholder="Set title"
            />
          </TextStyled>
          <TextStyled>
            <LabelStyled
              htmlFor="images">
              Put image URL
            </LabelStyled>
            <input
              value={selectedUser.images}
              onChange={(e) => handleOnChange("images", e.target.value)}
              type="text"
              placeholder="Image URL"
            />
          </TextStyled>
          <div>
          <ModalButtonStyled>
            Edit
        </ModalButtonStyled>
          </div>
        </form>
      </ModalStyled>
    </Content>
    </>
  );
}