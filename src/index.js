import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "./index.css";
import configureStore, { history } from "./configureStore";
import { ConnectedRouter } from "connected-react-router";

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();