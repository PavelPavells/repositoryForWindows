import React, { Component } from 'react';
import './App.css';
import Step from './Step';
import PersonalForm from './PersonalForm';
import CardForm from './CardForm';

const stepTitles = ['Personal information', 'Card information', 'Finish'];

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    isTimeOver: false,
  };

  handleClickNextForm = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleTabClick = step => {
    this.setState({ step });
  };

  handleChangeForm = (stateKey, stateValue) => {
    this.setState({ [stateKey]: stateValue });
  };

  handleChangeTimeOver = isTimeOver => {
    this.setState({ isTimeOver });
  };

  isFormCommitable = () => {
    const { ...state } = this.state;
    switch (state.step) {
      case 1:
        return (
          state.firstName !== '' &&
          state.lastName !== '' &&
          state.email !== '' &&
          state.email.includes('@')
        );
      case 2:
        const correctLengthCardNumber = 16;
        return state.cardNumber.length === correctLengthCardNumber;
      default:
        return false;
    }
  };

  render() {
    const { ...state } = this.state;
    const isDisabledNextButton = !this.isFormCommitable() || state.isTimeOver;
    return (
      <div className="container">
        {this.renderTabPanel()}
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={isDisabledNextButton ? 'disabled' : null}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  renderTabPanel() {
    const { ...state } = this.state;
    let tabPanel;
    switch (state.step) {
      case 1:
        tabPanel = (
          <div className="tab-panel">
            <Step
              key={stepTitles[0]}
              onClick={this.handleTabClick}
              isSelected={true}
              number={1}
              isClickable={false}
            >
              {stepTitles[0]}
            </Step>
            <Step
              key={stepTitles[1]}
              onClick={this.handleTabClick}
              isSelected={false}
              number={2}
              isClickable={false}
            >
              {stepTitles[1]}
            </Step>
            <Step
              key={stepTitles[2]}
              onClick={this.handleTabClick}
              isSelected={false}
              number={3}
              isClickable={false}
            >
              {stepTitles[2]}
            </Step>
          </div>
        );
        break;
      case 2:
        tabPanel = (
          <div className="tab-panel">
            <Step
              key={stepTitles[0]}
              onClick={this.handleTabClick}
              isSelected={false}
              number={1}
              isClickable={true}
            >
              {stepTitles[0]}
            </Step>
            <Step
              key={stepTitles[1]}
              onClick={this.handleTabClick}
              isSelected={true}
              number={2}
              isClickable={false}
            >
              {stepTitles[1]}
            </Step>
            <Step
              key={stepTitles[2]}
              onClick={this.handleTabClick}
              isSelected={false}
              number={3}
              isClickable={false}
            >
              {stepTitles[2]}
            </Step>
          </div>
        );
        break;
      case 3:
        tabPanel = (
          <div className="tab-panel">
            <Step
              key={stepTitles[0]}
              onClick={this.handleTabClick}
              isSelected={false}
              number={1}
              isClickable={true}
            >
              {stepTitles[0]}
            </Step>
            <Step
              key={stepTitles[1]}
              onClick={this.handleTabClick}
              isSelected={false}
              number={2}
              isClickable={true}
            >
              {stepTitles[1]}
            </Step>
            <Step
              key={stepTitles[2]}
              onClick={this.handleTabClick}
              isSelected={true}
              number={3}
              isClickable={false}
            >
              {stepTitles[2]}
            </Step>
          </div>
        );
        break;
      default:
        tabPanel = '';
    }
    return tabPanel;
  }

  renderForm() {
    const { ...state } = this.state;
    let form;
    switch (state.step) {
      case 1:
        form = (
          <PersonalForm
            firstName={state.firstName}
            lastName={state.lastName}
            email={state.email}
            onChangeForm={this.handleChangeForm}
          />
        );
        break;
      case 2:
        form = (
          <CardForm
            cardNumber={state.cardNumber}
            onChangeForm={this.handleChangeForm}
            onChangeTimeOver={this.handleChangeTimeOver}
          />
        );
        break;
      case 3:
        form = 'Поздравляем!';
        break;
      default:
        form = '';
    }
    return form;
  }
}

export default App;
