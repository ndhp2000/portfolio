import React from "react";
import { Container } from "react-bootstrap";
import Dance from "./Dance";
import Techstack from "./Techstack";
import Introduction from "./Introduction";
import Achievements from "./Achiements";
import Particle from "../Particle";
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Introduction />
      <Container>
        <Achievements />
        <h1 className="project-heading">
          Professional
          <strong className="main-name"> Skillset </strong>
        </h1>

        <p
          style={{
            color: "#ffffff",
            fontSize: "1.2em",
            opacity: 0.8,
            maxWidth: "600px",
            margin: "0 auto"
          }}
        >
          Skills I've acquired over 3.5 years of experience in software development.
        </p>
        <Techstack />
        <Dance />
      </Container>
    </Container>
  );
}

export default About;
