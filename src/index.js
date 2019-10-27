import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { reducer } from "./reducer/reduce";
import { Provider } from "react-redux";
import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(reducer);

const rootElement = document.getElementById("root");

// how could you connect react with redux ?

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
