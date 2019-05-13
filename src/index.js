import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import productsReducer from './reducers/productsReducer';
import userReducer from './reducers/userReducer';

import { combineReducers, createStore } from 'redux';
import { Provider} from 'react-redux';

const allReducers =  combineReducers({
    products: productsReducer,
    user: userReducer
})
const store = createStore(
    allReducers,
    {
        products: [{name: 'iPhone'}],
        user: 'Michael'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//console.log(store.getState());

//const updateUserAction = {
//    type: 'updateUser',
//    payload: {
//        user: 'John'
//    }
//};

//store.dispatch(updateUserAction);

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
