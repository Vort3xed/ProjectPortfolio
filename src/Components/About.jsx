import React from "react";

// import image from "../images/motion-background.jpg";
import image from "../images/fadebg.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I am a student at Poolesville High School, currently enrolled in the SMCS magnet program. I enjoy computer programming and cyber security.";

const languagesList = ["Java", "Python", "HTML/CSS", "JavaScript", "React", "SQL"]

const skillsList = ["Penetration Testing","Web Development","Machine Learning","Cryptography","Forensics"];

const detailOrQuote =
  "I explore cyber security as a passion and wish to pursue it as a career in the future. I want to use my knowledge to secure our rapidly advancing cyberspace.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "1px 2px 9px 0px #888888",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {languagesList.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <h2>Skills</h2>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
