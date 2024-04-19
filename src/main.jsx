import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Pages from "./components/Desktop/Pages";
import Header from "./components/Desktop/Header";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Pages />
    </BrowserRouter>
  </React.StrictMode>
);
