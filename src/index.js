import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import './sass/style.scss';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {createApi} from './services/api';

const api = createApi();

console.log(api)

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);