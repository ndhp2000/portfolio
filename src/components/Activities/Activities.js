import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ActivityList from "./ActivityList";

function Activities() {
  return (
    <Container fluid className="project-section">
      <Particle />
        <Container>
          <h1 className="project-heading">
            My <strong className="main-name">Extracurricular Activities </strong>
          </h1>
          <p style={{ color: "white" }}>
            Some of my extracurricular activities beside my studies and works.
          </p>

          <ActivityList />
        </Container>
    </Container>
  );
}

export default Activities;
