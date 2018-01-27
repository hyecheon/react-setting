import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import sample from './modules/sample'//import 리듀서

const middleware = [thunk];

const reducer = combineReducers({sample});

let store = initialState => createStore(reducer, applyMiddleware(...middleware));

export default store();