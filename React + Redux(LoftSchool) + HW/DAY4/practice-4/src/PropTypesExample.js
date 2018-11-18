import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

const StatelessGreeting = ({ user: { name, age } }) => (
  <Fragment>
    <p>Hello, {name.toUpperCase()}!</p>
    <p>Age: {age}.</p>
  </Fragment>
);
StatelessGreeting.propTypes = {
  user : PropTypes.shape({
    name : PropTypes.string,
    age : PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }).isRequired,
};
class Greeting extends Component {
  static propTypes = {
    name : PropTypes.string,
    age : PropTypes.oneOfType([
      PropTypes.nimber,
      PropTypes.string,
    ]),
    usersNames : PropTypes.any.isRequired
  };
  static defaultProps = {
    name: '',
    users: [],
    usersNames: {}
  };

  render() {
    const { name, age } = this.props;

    Object.keys(this.props.usersNames);

    return (
      <Fragment>
        <p>Hello, {name.toUpperCase()}!</p>
        <p>Age: {age}.</p>
        {this.props.users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))}
      </Fragment>
    );
  }
}

export class PropTypesExample extends Component {
  render() {
    return (
      <Fragment>
        <StatelessGreeting
          user={{ name: 'Артём', age: '31' }}
        />
        <Greeting age={31} />
      </Fragment>
    );
  }
}

export default PropTypesExample;
