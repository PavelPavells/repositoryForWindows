import React, { PureComponent } from 'react';
import User from './DerivedStateUser';
import { cloneDeep } from 'lodash';

const initData = [
  {
    id: 1,
    email: 'dex157@gmail.com',
  },
  {
    id: 2,
    email: 'petrov@gmail.com',
  },
];

class DerivedStateProblem extends PureComponent {
  state = {
    users: initData,
    selectedUserIndex: 0,
  };

  changeSelectedUser = event => {
    this.setState({
      selectedUserIndex: parseInt(
        event.target.dataset.index,
        10,
      ),
    });
  };

  changeEmail = event => {
    const { users, selectedUserIndex } = this.state;
    const nextUsers = cloneDeep(users);
    nextUsers[selectedUserIndex].email = event.target.value;
    this.setState({ users: nextUsers });
  };

  render() {
    const { users, selectedUserIndex } = this.state;
    const selectedUser = users[selectedUserIndex];
    return (
      <div>
        <ul>
          {users.map((user, index) => (
            <li
              key={user.id}
              data-index={index}
              onClick={this.changeSelectedUser}
              style={{
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              {user.email}
            </li>
          ))}
        </ul>
        <User
          changeEmail={this.changeEmail}
          {...selectedUser}
        />
      </div>
    );
  }
}

export default DerivedStateProblem;
