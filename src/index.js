import React from 'react';
import ReactDOM from 'react-dom';
// Adding React Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; //importing functions 
import logger from 'redux-logger'; //importing Logger with default options from redux-logger package
import { searchCats } from './reducers.js';

import App from './containers/App';
// CSS Toolkit
import 'tachyons';

// adding logger for development and testing
const store = createStore(searchCats,applyMiddleware(logger)); // we remove state from react app and keep it inside of this store.
// we pass state down with store as a prop to App component.

ReactDOM.render(
    // Redux component Provider, passing store down to App.js smart component
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root')
);



