import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Pages from "./components/Desktop/Pages";
import Header from "./components/Desktop/Header";
import Under from "./components/Desktop/Under";
import Footer from "./components/Desktop/footer";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Pages />
      <Under />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
