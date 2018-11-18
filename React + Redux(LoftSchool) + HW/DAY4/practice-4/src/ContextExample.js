import React from 'react';

const { Consumer, Provider } = React.createContext({
  isAuthorize: false,
});

export const AuthorizationHOC = WrappedComponent =>
  class extends React.Component {
    render() {
      return (
        <Consumer>
          {({ isAuthorize }) => (
            <WrappedComponent
              {...this.props}
              {...isAuthorize}
            />
          )}
        </Consumer>
      );
    }
  };

export const AuthorizationConsumer = Consumer;
export const AuthorizationProvider = Provider;

class YourComponent extends React.Component {
  render() {
    const { isAuthorize } = this.props;
    return null;
  }
}

export default AuthorizationHOC(YourComponent);