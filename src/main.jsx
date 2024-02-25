import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login.jsx";

import "./styles/layout/layout.scss";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/md-dark-deeppurple/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
