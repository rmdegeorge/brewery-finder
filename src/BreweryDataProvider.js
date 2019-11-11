import React, { Component } from 'react';
import axios from 'axios';

const {Provider, Consumer} = React.createContext();

const API_PATH = "https://api.openbrewerydb.org/breweries/";

class BreweryDataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breweryNames: [],

    }
  }
  getAllBreweryData = () => {
    axios.get(API_PATH).then(res => {
      console.log(res.data);
      const breweryNames = res.data.map((brewery => {
        return brewery.name
      }))
      this.setState({
        breweryNames: breweryNames,
      })
    }).catch(err => {
      console.log(err);
    });
  }
  render() {
    console.log(`Brewery Names`);
    console.log(this.state.breweryNames)
    return (
      <Provider value={{
        ...this.state,
        getAllBreweryData: this.getAllBreweryData,

      }}>
        {this.props.children}
      </Provider>
    );
  }
}

export default BreweryDataProvider;

export function withBreweryData(Comp) {
  return props => <Consumer>
                    {value => <Comp {...value}{...props} />}
                  </Consumer>
}