// import './01_redux'
// import './02_combineReducres'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createAppStore from './store';
import { Provider } from 'react-redux';

const store = createAppStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

store.subscribe(() => {
  console.log(store.getState())
})

setInterval(() => {
  // store.dispatch({type: 'test'})
}, 1000)
