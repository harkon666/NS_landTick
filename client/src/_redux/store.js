import { createStore, combineReducers, applyMiddleware } from "redux";
import ticket from "../_reducers/ticket";
import auth from "../_reducers/auth";
import user from "../_reducers/user";
import type from "../_reducers/type";
import component from "../_reducers/component";
import order from "../_reducers/order";
import { logger, promise } from "../middleware/index";

const rootReducers = combineReducers({
  ticket,
  auth,
  user,
  type,
  component,
  order
});

const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
