import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';

import rootReducer from 'reducers/rootReducer';
import App from 'components/App';

import './index.css';

const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// console.log('wtfis this: ', composeEnhancer(applyMiddleware(routerMiddleware(history))));

const store = createStore(
  rootReducer(history),
  composeEnhancer(applyMiddleware(routerMiddleware(history)))
);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
