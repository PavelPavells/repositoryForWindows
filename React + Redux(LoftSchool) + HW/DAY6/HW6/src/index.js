import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import createStore from './store'
const initialState ={
    budjet : {
        deliveryExpanse : 0,
        marketExpanse : 0,
        profit : 0,
    },
    farm : {order : []},
    market : {orders : []},
};
const store = createStore();
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );