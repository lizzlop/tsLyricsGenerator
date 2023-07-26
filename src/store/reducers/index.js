import { combineReducers } from "redux";
import reducer from "./reducer";

const appReducers = combineReducers({
  reducer,
});

const rootReducer = (state, action) => {
  return appReducers(state, action);
};

export default rootReducer;
