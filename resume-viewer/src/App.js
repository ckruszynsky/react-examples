import React, { Component } from 'react';
import './App.css';
import Client from './client';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Testimonials from './Components/Testimonials';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      resumeData : null
    }
  }
  componentDidMount() {
     Client.getResumeData().then(data => this.setState({resumeData : data}));
  }
  render() {
    console.log(this.state.resumeData);
    if(this.state.resumeData == null){
        return (<div></div>);
    }
        return (
          <div className="App">  
            <Header data={this.state.resumeData.main} />
            <About  data={this.state.resumeData.main }/>
            <Resume data={this.state.resumeData.resume}/>
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
          </div>
        );    
  }
}

export default App;
