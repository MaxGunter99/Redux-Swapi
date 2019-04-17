import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import App from './App'
import Reducer from "./reducers";
import "./index.css";

// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers

const rootElement = document.getElementById("root");
const store = createStore(Reducer, applyMiddleware(thunk));

// const store = createStore(
//   rootReducer
//   /* applyMiddleware goes here */
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
