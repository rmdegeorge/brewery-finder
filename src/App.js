import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import { Particles } from 'react-particles-js';
import styled from 'styled-components';

import particleOptions from './particles/particles.json';

import GlobalStyle from './themes/globalStyle';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import Favorites from './containers/Favorites';
import About from './containers/About';

const StyledParticles = styled(Particles)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: -850;
  background: rgb(252,227,69);
  background: linear-gradient(0deg, rgba(252,227,69,1) 0%, rgba(167,139,11,1) 7%, rgba(221,203,6,1) 84%);
`;

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        
        <GlobalStyle />
        <Navbar /> 
        <Header />
  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/about" component={About} />
        </Switch>

        <Footer />
        {/* <Particles className="particles" params={particleOptions} /> */}
      </div>
    );
  }
}

export default App;