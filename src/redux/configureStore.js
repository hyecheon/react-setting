import {createStore, combineReducers} from 'redux';
import sample from './modules/sample'//import 리듀서

const reducer = combineReducers({sample});

let store = initialState => createStore(reducer);

export default store();