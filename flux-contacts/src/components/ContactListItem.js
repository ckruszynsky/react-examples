import React, { Component } from 'react';
import { Button, Well, ListGroup, ListGroupItem } from 'react-bootstrap';
import AppActions from '../actions/AppActions';


class ContactListItem extends Component {
 handleDelete(id) {
     AppActions.deleteContact(id);
 }
  render() {
      const { contact } = this.props;
    return (  
        <Well>
            <h4>{contact.name} </h4>
            <ListGroup>
                <ListGroupItem>Email: {contact.email}</ListGroupItem>
                <ListGroupItem>Phone: {contact.phone}</ListGroupItem>                
            </ListGroup>
            <Button bsStyle="danger" onClick={this.handleDelete.bind(this,contact.id)}>Delete</Button>
        </Well>      
    );
  }
}

export default ContactListItem;
