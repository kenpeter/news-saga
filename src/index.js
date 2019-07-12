// react
import React from 'react';
// saga
import createSagaMiddleware from 'redux-saga';
// display
import { render } from 'react-dom';
// store
import { createStore, applyMiddleware } from 'redux';
// provider
import { Provider } from 'react-redux';
// logger
import { logger } from 'redux-logger';
// if else
import reducer from './reducers';
// app
import App from './App';
// more sagas
import saga from './sagas';

import * as serviceWorker from './serviceWorker';

// create
const sagaMiddleware = createSagaMiddleware();

// store
const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware, logger),
);

// run root saga
sagaMiddleware.run(saga);

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
