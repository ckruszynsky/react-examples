import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Contact Manager</a>
            </Navbar.Brand>
          </Navbar.Header>          
        </Navbar>      
    );
  }
}

export default Header;
