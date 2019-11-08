import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import { Particles } from 'react-particles-js';

import particleOptions from './particles/particles.json';
import './styles/App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import Favorites from './containers/Favorites';
import About from './containers/About';



class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <Header />
  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
        <Particles className="particles" params={particleOptions} />
      </div>
    );
  }
}

export default App;