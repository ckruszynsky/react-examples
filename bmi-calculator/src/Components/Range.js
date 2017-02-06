import React, { Component } from 'react';


class Range extends Component {
   static defaultProps = {
       min: 0,
       max:275,
       step: 1
   }  
  constructor(props){
      super(props);
      this.state = { value: props.value };
  }
   onChange(event) {
       this.props.onChange(this.state.value);
       this.setState({ value : parseInt(event.target.value,10) });
   }
  render() {
    return (
      <div className="range">    
        <input type="range"
            ref="range"
            value={ this.state.value }
            min={ this.props.min }
            max={ this.props.max }
            step={ this.props.step }
            onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}

Range.propTypes = {
    min : React.PropTypes.number.isRequired,
    max : React.PropTypes.number.isRequired,
    step: React.PropTypes.number.isRequired
}
export default Range;

