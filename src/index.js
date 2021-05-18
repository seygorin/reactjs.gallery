import React from 'react';
import ReactDOM from 'react-dom';
import GalleryContainer from './components/GalleryContainer'

import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <GalleryContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
