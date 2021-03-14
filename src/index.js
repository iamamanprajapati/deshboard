import React from 'react';
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter } from "react-router-dom";


window.store = store

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
