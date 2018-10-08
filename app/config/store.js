import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from './rootReducer';

const middlewares = [];
const initialState = {};

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(...middlewares));

export const Store = createStore(rootReducer, initialState, enhancers);