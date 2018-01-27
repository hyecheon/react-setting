import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {routerReducer, routerMiddleware} from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import sample from './modules/sample'//import 리듀서

const env = process.env.NODE_ENV;

const history = createHistory();

const middleware = [thunk, routerMiddleware(history)];

if (env === "development") {
	const {logger} = require("redux-logger");
	middleware.push(logger);
}


const reducer = combineReducers({
	routing: routerReducer,
	sample
});

let store = initialState => createStore(reducer, applyMiddleware(...middleware));

export { history };

export default store();
