import React, { PureComponent } from 'react';

class DerivedStateUser extends PureComponent {
  state = {
    email: this.props.email,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.email !== prevState.email) {
      return { ...nextProps };
    } else {
      return null;
    }
  }

  render() {
    const { email } = this.state;
    return (
      <input
        value={email}
        onChange={this.props.changeEmail}
      />
    );
  }
}

export default DerivedStateUser;
