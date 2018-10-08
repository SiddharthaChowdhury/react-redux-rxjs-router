import {createStore, applyMiddleware, compose} from "redux";
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from "./rootReducer";
import rootEpic from "./rootEpic";

const epicMiddleware = createEpicMiddleware();

const middlewares = [
    epicMiddleware
];
const initialState = {};

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(...middlewares));

export const Store = createStore(rootReducer, initialState, enhancers);

epicMiddleware.run(rootEpic);