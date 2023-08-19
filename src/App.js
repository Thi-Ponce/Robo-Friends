/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import { robots } from './robots';

class App extends Component {
  render() {
    return (
      <CardList robots={robots} />
    );
  }
}

export default App;
