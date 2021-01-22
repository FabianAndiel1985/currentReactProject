import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import shoppingCartReducer from "./shoppingCartReducer";

// What does this mean:

const middlewares = [logger];

const store = createStore(shoppingCartReducer, applyMiddleware(...middlewares));

export default store;
