import React, { PropTypes } from 'react';

module.exports = React.createClass({
    propTypes: {
        placeholder: PropTypes.string,
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        validate: PropTypes.func,
        onChange: PropTypes.func.isRequired
    },
    getInitialState() {
        return {
            value: this.props.value,
            error: false,
        };
    },

    componentWillReceiveProps(nextProps) {
        this.setState({ value: newProps.value });
    },

    onChange(evt){
        console.log(this.props.name);
       const name = this.props.name;
       const value = evt.target.value;
       const error = this.props.validate ? this.props.validate(value) : false;
       this.setState({value, error});
       this.props.onChange({name,value, error});
    },

    render() {
        return (
            <div>
                <input
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.onChange}
                />
                <span style={{ color: 'red' }}>{this.state.error}</span>
            </div>
        )
    },


})