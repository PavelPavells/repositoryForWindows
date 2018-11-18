import React, { Component } from 'react';
import Title from './Title';
import './PersonalForm.css';

export class PersonalForm extends Component {
  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };
  render() {
    return (
      <div>
        <Title>Персональная информация</Title>
        <div className="personal-form">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.props.firstName}
            onChange={this.handleChangeForm}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.props.lastName}
            onChange={this.handleChangeForm}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.props.email}
            onChange={this.handleChangeForm}
          />
        </div>
      </div>
    );
  }
}

export default PersonalForm;
