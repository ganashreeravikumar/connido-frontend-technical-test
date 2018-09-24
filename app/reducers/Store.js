import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import ConverterReducer from './ConverterReducer'

const rootReducer = combineReducers({
    currencyRates: ConverterReducer
});

const initialState = {};

const middleware = [thunk]

export default store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...middleware)
);