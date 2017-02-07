import React, {Component} from 'react';
import { Row, Col, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import Payment from 'payment';

class CreditCardForm extends Component {

    constructor(props) {
        super(props);
        this.setCardType = this.setCardType.bind(this);
    }
    componentDidMount() { 
        const { number, expiration, cvc } = this.refs;
        Payment.formatCardNumber(number);
        Payment.formatCardExpiry(expiration);
        Payment.formatCardCVC(cvc);
    }

    setCardType(event) {
        const type = Payment.fns.cardType(event.target.value);
        const cards = document.querySelectorAll('[data-brand]');

        [].forEach.call(cards, (element) => {                
            if(element.getAttribute('data-brand') === type){            
                element.classList.add('active')
            }else{
                element.classList.remove('active');
            }
        });
    }

    render() {
        return (
           <form className="CardForm" onSubmit={this.handleSubmit}>
              <Row>
                  <Col xs={ 12 }>
                    <FormGroup>
                        <ControlLabel>Card Number </ControlLabel>    
                        <input className="form-control" 
                                type="text" 
                                placeholder="Card Number"
                                ref="number"
                                onKeyUp={ this.setCardType }
                                 />
                    </FormGroup>
                  </Col>
              </Row>
              <Row>
                  <Col xs={ 6 } sm={ 5 }>
                    <FormGroup>
                      <ControlLabel>Expiration</ControlLabel>
                      <input
                        className="form-control text-center"
                        type="text"
                        ref="expiration"
                        placeholder="MM/YYYY"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={ 6 } sm={ 4 } smOffset={ 3 }>
                    <FormGroup>
                      <ControlLabel>CVC</ControlLabel>
                      <input
                        className="form-control text-center"
                        type="text"
                        ref="cvc"
                        placeholder="CVC"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Button type="submit" bsStyle="success" block>Generate Token </Button>
           </form>
        );
    }
}

export default CreditCardForm;