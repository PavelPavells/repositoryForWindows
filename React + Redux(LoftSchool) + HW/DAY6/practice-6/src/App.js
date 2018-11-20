import React from 'react';
import './App.css';
import {
  addUser,
  removeAllUsers,
} from 'actionCreators/users';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  users: state.users,
});

// const mapDispatchToProps = dispatch => ({
//   addUser: (id, name) => dispatch(addUser(id, name)),
//   removeAllUsers: () => dispatch(removeAllUsers()),
// });

const mapDispatchToProps = {
  addUser,
  removeAllUsers,
};

let id = 0;

addUser(1, 'test'); // { type: "ADD_USER", payload: {id:, name: 'test'}}

class App extends React.PureComponent {
  render() {
    const { users, addUser, removeAllUsers } = this.props;
    console.log('render')
    return (
      <div>
        <button
          onClick={() => addUser(id++, `Alexander ${id}`)}
        >
          Добавить пользователя
        </button>
        <button onClick={removeAllUsers}>
          Удалить всех
        </button>
        {users.map(user => (
          <p key={user.id}>
            {`User: ${user.name}, id: ${user.id}`}
          </p>
        ))}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
