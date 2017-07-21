/**
 * Created by Chad on 2016/9/1.
 */
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers'
import rootEpic from './epics'
import {createEpicMiddleware} from 'redux-observable'

let createLogger = require('redux-logger');
const epicMiddleware = createEpicMiddleware(rootEpic);

let enhancer;
if (__DEVTOOLS__) {
    const loggerMiddleware = createLogger();
    enhancer = compose(
        applyMiddleware(epicMiddleware, loggerMiddleware),
    );
} else {
    enhancer = compose(
        applyMiddleware(epicMiddleware),
    );
}


export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
}