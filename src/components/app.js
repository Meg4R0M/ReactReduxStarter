import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import MortalityList from '../containers/mortality_list'

const DEFAULT_COUNTRY = "France";

export default class App extends Component {
  render() {
    return (
        <div>
          <SearchBar defaultCountry={DEFAULT_COUNTRY}/>
          <MortalityList defaultCountry={DEFAULT_COUNTRY}/>
        </div>
    );
  }
}
