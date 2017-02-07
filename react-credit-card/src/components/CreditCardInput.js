import React, {Component} from 'react';

class CreditCardInput extends React.Component { 
    constructor(props){
        super(props);
        this.state = { number: ''};
        this.handleChange = this.handleChange.bind(this);
        this.checkType = this.checkType.bind(this);
    }

    handleChange(e){
        let newValue = e.target.value;
        let newNumber = this.filterWhiteSpace(newValue);
        this.setState({ number: newNumber });
    }

    filterWhiteSpace(text) {
        return text.replace(/\s/g, '');
    }

    process(number){
        let type = this.checkType(number);
        let text = this.insertSpaces(number);
        text = text.trim();

        return { text:text , type:type};
    }

    insertSpaces(text) {
        return text.replace(/(.{4})/g,'$1 ');
    }

    checkType(text) {
        let types = this.props.types;
        for(var type in types){
            if(text.match(types[type])) {
                return type;
            }            
        }
        return '';
    }

    render(){
        let { text : text, type: type } = this.process(this.state.number);
        return(
            <div>
                <input type="text" value={text} onChange={this.handleChange} />
                <input type="text" value={type} readOnly />
            </div>
        )
    }
}

export default CreditCardInput;