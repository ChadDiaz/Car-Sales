import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './store/reducers'
// import { BroswerRouter as Router} from 

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
   <App /> 
</Provider>


, 

rootElement);
