import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import app from "./reducers";
import Root from "./components/Root";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(app);

render(<Root store={store} />, document.getElementById("root"));
