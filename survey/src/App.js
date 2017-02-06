import React, { Component } from 'react';
import './App.css';
var uuid = require('uuid');
var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyDPR2uilZcft4AL_BTUlasCyGLYz04e5ng",
    authDomain: "surveydev-ce94f.firebaseapp.com",
    databaseURL: "https://surveydev-ce94f.firebaseio.com",
    storageBucket: "surveydev-ce94f.appspot.com",
    messagingSenderId: "203952384582"
  };
  firebase.initializeApp(config);


class App extends Component {
  
  handleNameSubmit(event){
    const name = this.refs.name.value;
    this.setState({ name }, () => console.log(this.state));
    event.preventDefault();
  }
  
  handleQuestionSubmit(event){
    event.preventDefault();
    firebase.database().ref(`surveys/${this.state.id}`)
      .set({
          name : this.state.name,
          answers : this.state.answers
      });

  this.setState({ submitted : true },()=> console.log('submitted'));
  }

  handleQuestionChange(event){
    var answers = this.state.answers;
    
    switch(event.target.name){
      case "q1" :
          answers.q1 = event.target.value;
          break;
      case "q2" :
          answers.q2 = event.target.value;
          break;
      case "q3" :
          answers.q3 = event.target.value;
          break;
      case "q4" :
          answers.q4 = event.target.value;
          break;
      default: 
          throw new Error("Value not a valid answer");
    }    

    this.setState({answers}, ()=> console.log(this.state));
  }

  constructor(props){
      super(props);
      this.state = {
          id:uuid.v1(),
          name: '',
          answers: {
              q1: '',
              q2: '',
              q3: '',
              q4: ''
          },
        submitted: false
      }
    }
  render() {
    var user,
        questions;

    if(this.state.name && this.state.submitted === false){
      user = <h2>Welcome { this.state.name }! </h2>;
      questions = 
      <span>
          <h3>Survey Questions</h3>
            <form onSubmit={this.handleQuestionSubmit.bind(this)}>
              <div>
                 <label>What is your favorite operating system?</label><br />
                 <input type="radio" name="q1" value="Windows" onChange={this.handleQuestionChange.bind(this)} />Windows <br />
                 <input type="radio" name="q1" value="OSX" onChange={this.handleQuestionChange.bind(this)} />OSX <br />                 
                 <input type="radio" name="q1" value="Linux" onChange={this.handleQuestionChange.bind(this)} />Linux <br />                 
                 <input type="radio" name="q1" value="Solaris" onChange={this.handleQuestionChange.bind(this)} />Solaris <br />                 
                 <input type="radio" name="q1" value="Other" onChange={this.handleQuestionChange.bind(this)} />Windows <br />                 
              </div>
                <div>
                 <label>What is your favorite brand of TV ?</label><br />
                 <input type="radio" name="q2" value="Sony" onChange={this.handleQuestionChange.bind(this)} />Sony<br />
                 <input type="radio" name="q2" value="Samsung" onChange={this.handleQuestionChange.bind(this)} />Samsung <br />                 
                 <input type="radio" name="q2" value="Panasonic" onChange={this.handleQuestionChange.bind(this)} />Panasonic <br />                 
                 <input type="radio" name="q2" value="Vizio" onChange={this.handleQuestionChange.bind(this)} />Vizio <br />                 
                 <input type="radio" name="q2" value="Other" onChange={this.handleQuestionChange.bind(this)} />Other <br />                 
              </div> 
               <div>
                 <label>What is your favorite Smartphone Brand ?</label><br />
                 <input type="radio" name="q3" value="Apple" onChange={this.handleQuestionChange.bind(this)} />Apple<br />
                 <input type="radio" name="q3" value="SamsungMobile" onChange={this.handleQuestionChange.bind(this)} />Samsung <br />                 
                 <input type="radio" name="q3" value="Nexus" onChange={this.handleQuestionChange.bind(this)} />Nexus <br />                 
                 <input type="radio" name="q3" value="Blackberry" onChange={this.handleQuestionChange.bind(this)} />Blackberry <br />                 
                 <input type="radio" name="q3" value="Other" onChange={this.handleQuestionChange.bind(this)} />Other <br />                 
              </div>                            
               <div>
                 <label>What is your favorite CPU Brand ?</label><br />
                 <input type="radio" name="q4" value="Intel" onChange={this.handleQuestionChange.bind(this)} />Intel<br />
                 <input type="radio" name="q4" value="AMD" onChange={this.handleQuestionChange.bind(this)} />AMD <br />                 
                 <input type="radio" name="q4" value="Nvidia" onChange={this.handleQuestionChange.bind(this)} />Nvidia <br />                 
                 <input type="radio" name="q4" value="ARM" onChange={this.handleQuestionChange.bind(this)} />ARM <br />                 
                 <input type="radio" name="q4" value="Other" onChange={this.handleQuestionChange.bind(this)} />Other <br />                 
              </div>      
              <input type="submit" value="Submit" />
            </form>            
      </span>;
    }else if(!this.state.name && this.state.submitted === false){
      user = 
      <span>
          <h2>Please enter your name to begin the survey</h2>
          <form onSubmit={this.handleNameSubmit.bind(this)}>
              <input type="text" placeholder="Enter your name..." ref="name" />
          </form>
      </span>;

      questions = '';
    
    }else if(this.state.submitted === true){
        user = <h2> Thank You {this.state.name } </h2>
    }
    
    return (
      <div className="App">
        <div className="App-header text-center">          
          <h2>Survey</h2>
        </div>
        <div className="text-center">
           { user }
        </div>
        <div className="container">
           { questions }
        </div>
      </div>
    );
  }
}

export default App;
