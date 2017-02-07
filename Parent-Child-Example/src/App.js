import React, { Component } from 'react';
import EmployeeInfo from './component/EmployeeInfo';


class App extends Component {
  constructor(props){
    super(props);   
  }
  
  componentWillMount () {
    this.setState({
      EmployeeInfo : { EmployeeId : "123456"}
    });
  }
  
  handleInputChange(event){
    var property = event.target.name.split("_");

    var updatedState = Object.assign(this.state, 
      {
            [property[0]]: { 
            [property[1]] : event.target.value 
          }
      });
    this.setState(updatedState);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">          
          <h2>Welcome to React</h2>
        </div>
        <EmployeeInfo data={this.state.EmployeeInfo} onChange={this.handleInputChange.bind(this)} />
      </div>
    );
  }
}

export default App;
