import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ColorsProvider } from "./colorsContext";

ReactDOM.render(
  <React.StrictMode>
    <ColorsProvider>
      <App />
    </ColorsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
