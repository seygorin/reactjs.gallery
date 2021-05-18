import React from 'react'
import { NavLink } from "react-router-dom"

import styled from 'styled-components'

const HeaderAStyled = styled.a `
    float: left;
    color: black;
    text-align: center;
    padding: 12px;

    font-size: 18px; 
    line-height: 25px;
    border-radius: 4px;

    a {
        color: #FFFFFF;
        text-decoration: none;
    }
    &:hover {
    background-color: #eba487;
    color: black;
    }

    &:active {
    background-color: #eb879c;
    color: white;
    }
`

const links = [
    {
        id: 1,
        path: "/",
        text: "Gallery Dynamic",
    },
    {
        id: 1.1,
        path: "/static",
        text: "Gallery Static",
    },
    {
        id: 2,
        path: "/about",
        text: "About",
    },
    {
        id: 3,
        path: "/contacts",
        text: "Contacts",
    }
]


export default function HeaderTabs() {
    return (
        <>
            {links.map(link => {
                return (
                    <HeaderAStyled key={link.id}>
                    <NavLink to={link.path} exact>{link.text}</NavLink>
                    </HeaderAStyled>
                )
            })} 
        </>
    )
}