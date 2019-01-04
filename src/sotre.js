import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import mathReducer from "./reducers/mathReducer";
import userReducer from "./reducers/userReducer";

const reducer = combineReducers({ mathReducer, userReducer });
const store = createStore(reducer, {}, applyMiddleware(logger, thunk));

export default store;
