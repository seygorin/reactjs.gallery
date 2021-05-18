import React from 'react'
import Header from './navigation/Header'
import ChatButton from './ChatButton'
import Footer from './navigation/Footer'
import Wrong from './pages/Wrong'
import Contacts from './pages/Contacts'
import About from './pages/About'
import Static from './pages/Static'
import { GalleryCards } from './GalleryCards'
import { EditCard } from './EditCard';
import { GlobalProvider } from './GlobalState';

import { Route, Switch } from "react-router-dom"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }

  html, body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    min-height: 100%;

}
`


const GalleryContainer = () => {
    return (
        <>
        
        <GlobalStyle />
        <Header  />
        <ChatButton />

        <GlobalProvider>
          <Switch>
            <Route exact path="/">
              <GalleryCards />
            </Route>
            <Route path="/edit/:id" component={EditCard} exact />
            <Route path="/static">
                <Static />
            </Route> 
            <Route path="/about">
                <About />
            </Route> 
            <Route path="/contacts">
                <Contacts />
            </Route> 
            <Route path="*">
                <Wrong />
            </Route>       
          </Switch>
        </GlobalProvider>
        <Footer />
        </>
    )  
}

export default GalleryContainer