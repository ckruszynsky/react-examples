import React from 'react';
import payment from 'payment';
import { Row, Col, FormGroup, ControlLabel, Button, Alert } from 'react-bootstrap';
import CreditCardList from './CreditCardList';
import CreditCardForm from './CreditCardForm';

export class CreditCard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            number: null,
            exp_month: null,
            exp_year: null,
            cvc: null,
            token: null
        };
    }

    render(){
        return (
            <div className="CreditCard">
                <CreditCardList />
                <CreditCardForm />
            </div>
        )
    }
}

CreditCard.propTypes = {};

export default CreditCard;