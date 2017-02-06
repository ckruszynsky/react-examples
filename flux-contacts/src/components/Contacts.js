import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import AppActions from '../actions/AppActions';
import ContactListItem from './ContactListItem';
import { ListGroup } from 'react-bootstrap';


class Contacts extends Component {

 constructor(props){
     super(props);
     this.state = {
         contacts: []
     };

    this.onChange = this.onChange.bind(this);
 }

 onChange() {
     this.setState({
         contacts: AppStore.getContacts()
     });
 }

 componentWillUnmount() {
    AppStore.removeChangeListener(this.onChange);
 }

 componentWillMount() {
     AppStore.addChangeListener(this.onChange);
 }

 componentDidMount () {
     AppActions.recieveContacts();
 }
 
  render() {
    let contactListItems;
    if(this.state.contacts) {
        contactListItems = this.state.contacts.map(contact => {
            return <ContactListItem key={contact.id} contact={contact} />
        });
    }
    return (
       <div>
          <ListGroup>
            { contactListItems }
          </ListGroup>
       </div>  
    );
  }
}

export default Contacts;
