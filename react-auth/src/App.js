import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';
import {Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static defaultProps = {
     clientId: 'Bz6CACLqv9N2MWTu0RiBXABMPqj3vzge',
     domain: 'devspot.auth0.com'
  }

  constructor(props){
    super(props);
    this.state = {
      idToken: '',
      profile: {}
    }
  }

  showLock() {
    this.lock.show();
  }

  componentWillMount(){
    console.log(this.props.clientId);
    this.lock = new Auth0Lock(this.props.clientId, this.props.domain);


    // On authentication
    this.lock.on('authenticated', (authResult) => {
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if(error){
          console.log(error);
          return;
        }

        this.setData(authResult.idToken, profile);
      });
    });    

    this.getData();
  }

  //set token and profile data
  setData(idToken, profile) {
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    this.setState({
       idToken : localStorage.getItem('idToken'),
       profile: JSON.parse(localStorage.getItem('profile'))
    });
  }

  //check for token and get profile <datalist>
  getData(){
    if(localStorage.getItem('idToken') != null){
      this.setState({
         idToken : localStorage.getItem('idToken'),
         profile: JSON.parse(localStorage.getItem('profile'))
       }, () => console.log(this.state));       
    }
  }

  logout() {
      this.setState({
        idToken :  '',
        profile: ''
      }, () => {
         localStorage.removeItem('idToken');
         localStorage.removeItem('profile');
      })
  }

  render() {
    let currentPage; 
    if(this.state.idToken){
      currentPage = <Dashboard lock={ this.lock }
                               idToken= {this.state.idToken }
                               profile= { this.state.profile } />
    }else{
      currentPage = <Home />
    }
    return (
      <div className="App">     
        <Header 
            onLoginClick={ this.showLock.bind(this) } 
            onLogoutClick={ this.logout.bind(this) }
            lock={this.lock}
            idToken={ this.state.idToken }
            profile={ this.state.profile }
          />
        <Grid>
          <Row>
            <Col xs={12} md={12} >
              { currentPage }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
