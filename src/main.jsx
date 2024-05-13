import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <section className="flex flex-col">
    <Header />
    <Hero />
    <Main />
    <Footer/>
  </section>,
);
