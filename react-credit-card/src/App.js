import React, { Component } from 'react';
import CreditCardInput from './components/CreditCardInput';
import CreditCard from './components/CreditCard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    let types = {
      'Visa' : /^4/,
      'MasterCard' : /^5[1-5]/,
      'American Express': /^3[47]/
    };

    return (
      <div className="container">
        <div className="App-header">          
          <h2>Welcome to React</h2>
        </div>
          <CreditCard />          
      </div>
    );
  }
}

export default App;
