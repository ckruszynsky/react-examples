import React, {Component} from 'react';
import Choice from '../Choice/Choice';

import './Switch.css';

const CREDITCARD = 'Creditcard';
const BTC = 'Bitcoin';

class Switch extends Component {
    constructor(props){
        super(props);
        this.state = {
            payMethod: BTC
        };
    }

    select(choice){
        return (evt) => {
            this.setState({
                payMethod: choice
            });
        }
    }
   
    render() {
        return (
            <div>
                <div className="switch">
                   <Choice
                     onClick={this.select(CREDITCARD)}
                     active={this.state.payMethod === CREDITCARD}
                     label="Pay with Creditcard" />
                     
                     <Choice
                        onClick={this.select(BTC)}
                        active={this.state.payMethod === BTC}
                        label="Pay with Bitcoin" />
                     
                     Pay with : {this.state.payMethod}
                </div>
            </div>
        );
    }
}

export default Switch;