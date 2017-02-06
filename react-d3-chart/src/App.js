import React, { Component } from 'react';
import BarChart from './components/BarChart';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  
  constructor(props) {
      super(props);     
      this.state = {
        data : [200,400,350,500,200]
      }
    }
  
  addChartValue(event) {
    event.preventDefault();
    let data = this.state.data.map((d) => d);
    let newValue = parseInt(this.refs.chartValue.value,10);
    if(!isNaN(newValue)){
          data.push(newValue);
          this.setState({ data: data });
    }

    this.refs.chartValue.value = '';
    this.refs.chartValue.focus();
  }

  clearValues(e){
    e.preventDefault();
    this.setState({data : []});
  }
  render() {    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>      
        <BarChart data={ this.state.data }
            barColor="#d36539"
            barWidth="35" 
            barOffset="0" />
        <input ref="chartValue" /> 
        <input type="button" onClick={this.addChartValue.bind(this)} value="Add Chart Data" />
        <input type="button" onClick={this.clearValues.bind(this)} value="Clear Data" />
      </div>
    );
  }
}

export default App;
