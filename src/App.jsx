/**
 * Application component
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Agneya Tharun",
  title: "Full Stack and Offensive Security",
  email: "agneyat2@gmail.com",
  gitHub: "https://github.com/Vort3xed",
  instagram: "https://www.instagram.com/agneya_t/",
  linkedIn: "https://www.linkedin.com/in/agneya-tharun-408a14276/",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
