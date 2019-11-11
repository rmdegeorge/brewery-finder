import React, { Component } from 'react';
import { withBreweryData } from '../BreweryDataProvider';

class Brewery extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="Brewery">
        
      </div>
    );
  }
}

export default withBreweryData(Brewery);