import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Particle from "../Particle";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="main-name"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am always <span className="purple">curious</span> about Computer Science problems
              <br />
              <br />
              I am currently interested in <span className="purple"> Distributed Systems </span>and <span className="purple"> Performance Optimization </span>&nbsp;
              <br />
              <br />
              I am experienced in
              <span className="purple"> Competitive Programming, Software Design and Development. </span>
              <br />
              <br />
              I am fluent in
              <span className="purple"> Scala, C++ and Python. </span>
              <br />
              <br />
              I am skilled in
              <span className="purple"> FoundationDB, Temporal, Kafka, Scala.js, and Laminar </span> &nbsp;with a focus on building scalable
              <span className="purple"> distributed systems
              </span> and
              <span className="purple"> reactive front-end
              </span> applications.
              <br />
              <br />
              I had some brief research experience, contributing to <span className="purple"> three published papers </span> in journals and conferences.
              <br />
              <br />
              I am also an amateur <span className="purple"> dancer </span>, mainly in the style of <span className="purple"> waacking </span>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ maxWidth: "300px", maxHeight: "300px" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ndhp2000"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ndhp2000/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tiny__camel/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
