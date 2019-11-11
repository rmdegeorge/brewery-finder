import React, { Component } from 'react';
import styled from 'styled-components';
import { withBreweryData } from '../BreweryDataProvider';

const SearchBarContainer = styled.div`
  width: 250px;
  padding: 0px;
  margin: 10px;
  border: 1px solid grey;
  box-shadow: 0 0 0 1px rgba(0,0,0,.1), 0 2px 4px 1px rgba(0,0,0,.18);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: rgba(0,0,0,0.73);
`;

const SearchInput = styled.input`
width: 100%;
border: none;
font-family: Arial, Helvetica, sans-serif;
font-size: 14px;
color: rgba(0,0,0,0.73);
padding: 10px 5px;
box-sizing: border-box;
outline: none;
`;

const SearchSuggestionsList = styled.div`
  text-align: left;
  margin: 0;
  padding: 0;
  border-top: 1px solid grey;
`;

const SearchSuggestion = styled.div`
  text-align: left;
  padding: 10px 5px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
    background-color: rgba(128,128,128,0.20);
  }
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      searchText: '',
    }
  }

  handleChange = (event) => {
    let suggestions = [];
    if (event.target.value.length > 0) {
      const regex = new RegExp(`^${event.target.value}`, 'i');
      suggestions = this.props.items.sort().filter(value => regex.test(value));
    }
    this.setState({
      suggestions,
      [event.target.name]: event.target.value,
    })
  }

  handleSuggestionSelected = (value) => {
    this.setState({
      searchText: value,
      suggestions: [],
    });
  };

  handleSuggestions = () => {
    if (this.state.suggestions.length === 0) {
      return null;
    }
    return (
      <SearchSuggestionsList>
        {this.state.suggestions.map((item) => <SearchSuggestion onClick={() => this.handleSuggestionSelected(item)}>{item}</SearchSuggestion>)}
      </SearchSuggestionsList>
    )
  }

  render() {
    const {searchText} = this.state;
    return (
      <SearchBarContainer>
        <SearchInput onChange={this.handleChange} value={searchText} name="searchText" placeholder="Search" />
        {this.handleSuggestions()}
      </SearchBarContainer>
    );
  }
}

export default withBreweryData(Search);