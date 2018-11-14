import React, { Component } from 'react';

const currentState = { a: 1, b: 2, c: { d: 1, e: 2 } };
const patch = { a: 2, c: { e: 3 } };

const newState = { ...currentState, ...patch };

class LiftStateExample extends Component {
  state = {
    inputs: {
      email: '',
      firstName: '',
      lastName: ''
    },
    checkboxes: {
      isReady: false,
      isSet: true
    }
  };

  handleChangeInput = event => {
    const { name, value } = event.target;
    this.setState(state => ({
      inputs: {
        ...state.inputs,
        [name]: value
      }
    }));
  };

  handleChangeCheckbox = event => {
    const { name, checked } = event.target;
    this.setState(state => ({
      checkboxes: {
        ...state.checkboxes,
        [name]: checked
      }
    }));
  };

  render() {
    return (
      <div>
        {Object.keys(this.state.inputs).map(fieldName => (
          <input
            key={fieldName}
            name={fieldName}
            value={this.state.inputs[fieldName]}
            placeholder={fieldName.toUpperCase()}
            onChange={this.handleChangeInput}
          />
        ))}
        {Object.keys(this.state.checkboxes).map(fieldName => (
          <label key={fieldName}>
            <input
              type="checkbox"
              name={fieldName}
              checked={this.state.checkboxes[fieldName]}
              onChange={this.handleChangeCheckbox}
            />
            {fieldName}
          </label>
        ))}
      </div>
    );
  }
}

export default LiftStateExample;
