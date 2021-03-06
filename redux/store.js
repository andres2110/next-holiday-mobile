import { createStore, applyMiddleware  } from "redux";
import rootReducer from "./reducers/holidays";
import thunkMiddleware from "redux-thunk";
import { logger } from "redux-logger";


export default createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, logger)
);