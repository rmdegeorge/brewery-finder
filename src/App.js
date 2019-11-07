import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
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
      </div>
    );
  }
}

export default App;