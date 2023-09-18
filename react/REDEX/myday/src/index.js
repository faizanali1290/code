import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import {AccountReducer,fetchData} from "./redux/reducer/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const reducer = combineReducers({
  AccountReducer,
  fetchData

});

const store = createStore(reducer, applyMiddleware( thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
