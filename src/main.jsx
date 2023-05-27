import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./sass/bootstrap-init.scss";
import Provider from "./context/StaysContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
