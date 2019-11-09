import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleWares = [thunk];

if (process.env.NODE_ENV !== "production") {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require("redux-logger");
  middleWares.push(logger);
}

const configureStore = (preLoadedState = {}) => (
  createStore(rootReducer, preLoadedState, applyMiddleware(...middleWares))
);

export default configureStore;