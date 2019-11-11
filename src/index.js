import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import BreweryDataProvider from './BreweryDataProvider';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <BreweryDataProvider>
      <App />
    </BreweryDataProvider>
  </BrowserRouter>
  , document.getElementById('root'));