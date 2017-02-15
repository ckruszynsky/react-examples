import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from './components/Switch/Switch';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>   
        <Switch />             
      </div>
    );
  }
}

export default App;
