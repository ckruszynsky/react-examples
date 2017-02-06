import React, { Component } from 'react';
import Header from './components/Header';
import Contacts from './components/Contacts';
import { Grid, Row , Col} from 'react-bootstrap';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddContact from './components/AddContact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
            <Row>
                <Col xs={12} md={12} lg={12}>
                  <AddContact />
                  <Contacts />
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
