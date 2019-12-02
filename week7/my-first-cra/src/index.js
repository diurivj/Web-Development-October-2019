import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const person = {
  name: "Diego",
  age: 23
};

ReactDOM.render(<App {...person} />, document.getElementById("root"));

serviceWorker.unregister();
