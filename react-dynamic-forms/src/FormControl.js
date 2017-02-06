import React, {Component} from 'react'


const ControlTypeMapping = {
    'text': <input type="text" />,
    'text:multiLine':<textarea />,
    'number': <input type="number" />,
    'date': <input type="date" />,
    'boolean': <input type="checkbox" />,
};


class FormControl extends Component {
    ControlFor(field){
        var controlType = field.controlType;
        return ControlTypeMapping[controlType]
    }


    render () {
       let field = this.props.field;
       let control = this.ControlFor(field);
       return control;
    }
}


export default FormControl