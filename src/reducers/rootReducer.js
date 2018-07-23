import { combineReducers } from "redux";
import notesReducer from "./notesReducer";
import signinReducer from "./signinReducer";

const rootReducer = combineReducers({
  notesReducer,
  signinReducer
});

export default rootReducer;
