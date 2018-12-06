import moment from 'moment';

import React from 'react';
import ReactDOM from 'react-dom';
import pl from 'react-intl/locale-data/pl';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './store/index';

moment.locale('pl');

const store = createStore(rootReducer, composeWithDevTools({})(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
