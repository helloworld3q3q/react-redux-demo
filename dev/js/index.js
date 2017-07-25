/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-04-25 05:44:42
 * @modify date 2017-04-25 05:44:42
 * @desc [description]
*/
//https://dotblogs.com.tw/lapland/2016/04/19/172848
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/index';
import App from './compoments/app';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store = { store}>
        <App />
    </Provider>, 
    document.getElementById('root')
); 