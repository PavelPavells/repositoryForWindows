import { ADD_USER, REMOVE_ALL_USERS } from 'types/users';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [action.payload, ...state];

    case REMOVE_ALL_USERS:
      return [];

    default:
      return state;
  }
};
