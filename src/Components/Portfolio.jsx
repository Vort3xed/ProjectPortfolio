/**
 * Portfolio component
 */

import React from "react";

// import image from "../images/white-abstract-background_23-2148806276.avif";
// import image from "../images/motion-background.jpg";
import image from "../images/white-background.jpg";


const imageAltText = "its supposed to be a white backround";

const projectList = [
  {
    title: "HeadHunterV4",
    description:
      "Suite of machine learning models that can detect neurodegenerative diseases using images. These models can generate detection heatmaps and provide uncertainty classification. These models also outperform google's industry standard for autism detection.",
    url: "https://github.com/Vort3xed/HeadHunterV4",
  },
  {
    title: "FalconMailV5",
    description:
      "A Java application that uses Google OAUTH2.0 to rapidly send customized emails using form input and log the sent emails in a spreadsheet. This application reads user written HTML templates and replaces variables in the template with form input.",
    url: "https://github.com/Vort3xed/FalconMailv5",
  },
  {
    title: "SmartIEPV1",
    description:
      "A complex Flask application that holds individualized education plans and displays an easy to use interface to a SQL database.",
    url: "https://github.com/Vort3xed/SmartIEPv1",
  },
  {
    title: "SpeedShell",
    description:
      "A small python application that allows users to create an undetectable python trojan with NXcrypt and Metasploit, just with one command.",
    url: "https://github.com/Vort3xed/SpeedShell",
  },
  {
    title: "Project Portfolio",
    description:
      "You're looking at it right now. This website was made using ReactJS and is hosted on GitHub Pages.",
    url: "https://github.com/Vort3xed/ProjectPortfolio",
  },
  {
    title: "Serial Plotter",
    description:
      "A Java application that takes in large sets of data and visualizes it in a moving, real-time graph. This application is useful for visualizing data from microcontrollers.",
    url: "https://github.com/Vort3xed/SerialPlotter",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <img className="background" src={image} alt={imageAltText} />
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          {/* <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          /> */}
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div
              className="box"
              style={{ boxShadow: "1px 2px 6px 0px #888888" }}
              key={project.title}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <p style={{ padding: "1rem 3rem 0", alignSelf: "center" }}>
      &quot;What was God doing before the divine creation?&quot; - Stephen Hawking
      </p>
    </section>
  );
};

export default Portfolio;
