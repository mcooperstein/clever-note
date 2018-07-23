import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import rootReducer from "./reducers/rootReducer";
import signinReducer from "./reducers/signinReducer";
import App from "./App";

const store = createStore(signinReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
