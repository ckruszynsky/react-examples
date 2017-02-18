import React from 'react';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import FieldComponent from './fieldComponent.jsx';

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = React.createClass({
  displayName: "Sign up Form",

  onFormSubmit(evt) {
    const people = [...this.state.people];
    const person = this.state.fields;
    const fieldErrors = this.validate(person);
    this.setState({ fieldErrors });
    evt.preventDefault();

    if (Object.keys(fieldErrors).length > 0) return;
    people.push(person);
    this.setState({ people, fields: [] });
  },

  onInputChange(evt) {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  },

  getInitialState() {
    return { fields: {}, people: [], fieldErrors: [] };
  },

  validate(person) {
    let errors = {};
    if (!person.name) errors.name = 'Name Required';
    if (!person.email) errors.email = 'Email Required';
    if (!person.phone) errors.phone = 'Phone Required';

    if (person.email && !isEmail(person.email)) errors.email = 'Invalid Email';
    if (person.phone && !isMobilePhone(person.phone)) errors.phone = 'Invalid Phone';
    return errors;
  },

  render() {
    console.log(this.state);
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
          <FieldComponent
            placeholder="Phone"
            name="phone"
            value={this.state.fields.phone}
            onChange={this.onInputChange}
            validate={(val) => (isMobilePhone(val) ? false : 'Invalid Phone')}
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
