import React from 'react';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = React.createClass({
  displayName: "Sign up Form",

  onFormSubmit(evt){    
    const people = [...this.state.people];
    const person = this.state.fields;
    const fieldErrors = this.validate(person);
    this.setState({fieldErrors});
    evt.preventDefault();    

    if(Object.keys(fieldErrors).length > 0) return;
    people.push(person);
    this.setState({ people, fields: []});
  },

  onInputChange(evt){
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({fields});
  },
  
  getInitialState(){
    return { fields:{}, people:[], fieldErrors: [] };
  },

  validate(person){
    let errors = {};
    if(!person.name) errors.name = 'Name Required';
    if(!person.email) errors.email = 'Email Required';
    if(!person.phone) errors.phone = 'Phone Required';
    
    if(person.email && !isEmail(person.email)) errors.email = 'Invalid Email';
    if(person.phone && !isMobilePhone(person.phone)) errors.phone = 'Invalid Phone';
    return errors;
  },

  render() {
    console.log(this.state);
    let people = this.state.people.map(({name,email,phone},i) => <li key={i}>{name}({ email}) {phone} </li>);
    return (
     <div>
       <h1>Sign up sheet </h1>
       <form onSubmit={this.onFormSubmit}>
          <input
            placeholder='Name'
            name='name'
            value={this.state.fields.name}
            onChange={this.onInputChange}
          />

          <span style={{color: 'red'}}>{this.state.fieldErrors.name}</span>
          <br />

          <input
            placeholder='Email'
            name='email'
            value={this.state.fields.email}
            onChange={this.onInputChange}
          />
       
            <span style={{color: 'red'}}>{this.state.fieldErrors.email}</span>
            <br />  

             <input
                placeholder='Phone'
                name='phone'
                value={this.state.fields.phone}
                onChange={this.onInputChange}
             />
       
            <span style={{color: 'red'}}>{this.state.fieldErrors.phone}</span>
            <br />  


         <input type="submit"/>
       </form>

       <div>
         <h3>People</h3>
         <ul>
           {people}
          </ul>
       </div>
      </div>
    );
  },
});
