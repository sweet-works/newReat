import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom'
import './Rem'
import './main.scss'
import './api'
import 'antd-mobile/dist/antd-mobile.css';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
        <BrowserRouter >
            <Route  path="/" component={App} />
        </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
