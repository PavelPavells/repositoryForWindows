import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext('light');

export class ContextApi extends Component {
  state = { theme: 'light' };

  componentDidMount() {
    // setInterval(() => {
    //   this.setState(state => {
    //     return state.theme === 'light'
    //       ? { theme: 'dark' }
    //       : { theme: 'light' };
    //   });
    // }, 1000);
  }

  handleToggleTheme = () => {
    this.setState(state => {
      return state.theme === 'light'
        ? { theme: 'dark' }
        : { theme: 'light' };
    });
  };

  render() {
    return (
      <Provider
        value={{
          theme: this.state.theme,
          onToggleTheme: this.handleToggleTheme,
        }}
      >
        <IntermediateComponent>
          <IntermediateComponent>
            <IntermediateComponent>
              <IntermediateComponent>
                <ThemedButton />
              </IntermediateComponent>
            </IntermediateComponent>
          </IntermediateComponent>
        </IntermediateComponent>
      </Provider>
    );
  }
}

const IntermediateComponent = ({ children }) => {
  return <div>{children}</div>;
};

function withTheme(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <Consumer>
          {contextValues => (
            <WrappedComponent {...this.props} {...contextValues} />
          )}
        </Consumer>
      );
    }
  };
}

const Button = ({ theme, onToggleTheme }) => (
  <button
    onClick={onToggleTheme}
    style={{
      backgroundColor: theme === 'light' ? '#eee' : '#ccc',
    }}
  >
    Кнопка с темой
  </button>
);

const ThemedButton = withTheme(Button);

export default ContextApi;
