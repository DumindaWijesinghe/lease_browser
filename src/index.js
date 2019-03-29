import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import WebFont from 'webfontloader';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'
import * as serviceWorker from './serviceWorker';

WebFont.load({
    google: {
        families: ['Roboto Mono:300,400,700', 'sans-serif']
    }
});


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
