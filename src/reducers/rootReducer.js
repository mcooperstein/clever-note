import { combineReducers } from "redux";
import notesReducer from "./notesReducer";
import signinReducer from "./signinReducer";

const rootReducer = combineReducers({
  notes: notesReducer,
  signin: signinReducer
});

export default rootReducer;
