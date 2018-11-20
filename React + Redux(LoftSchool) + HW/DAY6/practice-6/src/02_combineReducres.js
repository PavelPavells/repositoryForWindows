import { createStore, combineReducers } from 'redux';

// const ADD_PRODUCT = 'ADD_PRODUCT';
// const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const entities = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.payload.id];
    default:
      return state;
  }
};

const total = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return state + 1;
    default:
      return state;
  }
};

const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.payload];
    case 'REMOVE_ALL_USERS':
      return [];
    default:
      return state;
  }
};

const lection = (state = {a: 1, b: 2, c: 3}, action) => state

const rootReducer = combineReducers({
  entities: entities,
  people: combineReducers({
    lection: lection,
    total: total,
    users: users,
  }),
});

const store = createStore(rootReducer);

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

const addUser = (id, name) => ({
  type: 'ADD_USER',
  payload: {
    id,
    name,
  },
});

store.dispatch(addUser(1, 'Артём 1'));
store.dispatch(addUser(2, 'Артём 2'));
store.dispatch(addUser(3, 'Артём 3'));

// initial action -> reducers
// users -> [] users: []
// products -> []
// {
//    products: []
//
// }

// products(state.products, action)
// users(state.users, action)
