import React from 'react';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import FieldComponent from './fieldComponent.jsx';
import CourseSelect from './course-select.jsx';

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = React.createClass({
  displayName: "Sign up Form",

  onFormSubmit(evt) {
    const people = this.state.people;
    console.log(people);
    let person = this.state.fields;

    evt.preventDefault();
    if (this.validate()) return;
   
    people.push(person);
    const fields = Object.assign({}, {name: '', email:''});
    this.setState({ people,fields });
  },

  onInputChange({name, value, error }) {
    const fields = this.state.fields;
    const fieldErrors = this.state.fieldErrors;

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({ fields, fieldErrors });
  },

  getInitialState() {
    return { fields: {
      name: '',
      email: ''
    }, people: [], fieldErrors: [] };
  },

  validate() {
    const person = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);

    if (!person.name){
      return true;
    } 
    if (!person.email) {
      return true;
    }
    if (errMessages.length){
      return true;
    } 
    return false;
  },


  render() {
    let people = this.state.people.map(({name, email, phone}, i) => <li key={i}>{name}({email}) {phone} </li>);
    return (
      <div>
        <h1>Sign up sheet </h1>
        <form onSubmit={this.onFormSubmit}>
          <FieldComponent
            placeholder='Name'
            name='name'
            value={this.state.fields.name}
            onChange={this.onInputChange}
            validate={(val) => (val ? false : 'Name Required ')}
            />
          <br />
          <FieldComponent
            placeholder="Email"
            name="email"
            value={this.state.fields.email}
            onChange={this.onInputChange}
            validate={(val) => (isEmail(val) ? false : 'Invalid Email')}
            />
          <br />


          <input type="submit" disabled={this.validate()} />
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
