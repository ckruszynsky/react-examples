import React, {Component} from 'react';
import FormControl from './FormControl';

class App extends Component {
    render () {
        let source = [
            {
                controlType: 'text',  //0
                value: 'Foo'
            },            
            {
                controlType: 'number', //1
                value: 100
            },
            {
                controlType: 'date', //2
                value: new Date()
            },
            {
                controlType: 'boolean', //3
                value: false
            },
            {
                controlType: 'text:multiLine',
                value: 'foo bar lorem epsum'
            }
        ];
        
        let controls = source.map((ctrl) => <div><FormControl field={ctrl} /></div>);
        return (          
            <form>
               {controls}
            </form>
        )
    }
}

export default App 