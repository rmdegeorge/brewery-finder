import React from 'react';
import styled from 'styled-components';

import Search from '../components/Search';
import { withBreweryData } from '../BreweryDataProvider';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 75%;
  height: 75vh;
  margin: auto;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllBreweryData()
  }
  render() {
    return (
      <HomeContainer>
        <Search items={this.props.breweryNames}/>
      </HomeContainer>
    );
  }
}

export default withBreweryData(Home);