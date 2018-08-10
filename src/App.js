import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav'
import Routes from './route'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav className= "Nav"/>
      
        {Routes}

      </div>
    );
  }
}

export default App;
