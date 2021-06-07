import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';
// import { createStore, combineReducers } from 'redux';

import './application.scss';
import reportWebVitals from './reportWebVitals';

import App from './components/app.jsx';

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
