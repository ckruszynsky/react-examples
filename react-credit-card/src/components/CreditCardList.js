import React, {Component} from 'react';

class CreditCardList extends Component {
    render() {
        return (
            <div>
                <ul className="credit-card-list clearfix">
                  <li><i data-brand="visa" className="fa  fa-cc-visa"></i></li>
                  <li><i data-brand="amex" className="fa  fa-cc-amex"></i></li>
                  <li><i data-brand="mastercard" className="fa  fa-cc-mastercard"></i></li>
                  <li><i data-brand="jcb" className="fa  fa-cc-jcb"></i></li>
                  <li><i data-brand="discover" className="fa  fa-cc-discover"></i></li>
                  <li><i data-brand="dinersclub" className="fa  fa-cc-diners-club"></i></li>
                </ul>                
            </div>
        );
    }
}

export default CreditCardList;