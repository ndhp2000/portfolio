import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am always curious about Computer Science problems
              <br />
              <br />
              I am currently interested in <b className="purple"> Distributed Systems </b>and <b className="purple"> Performance Optimization </b>&nbsp;
              <br />
              <br />
              I am experienced in
              <b className="purple"> Competitive Programming, Software Design and Development. </b>
              <br />
              <br />
              I am fluent in
              <b className="purple"> Scala, C++ and Python. </b>
              <br />
              <br />
               I am skilled in
               <b className="purple"> FoundationDB, Temporal, Kafka, Scala.js, and Laminar </b> &nbsp;with a focus on building scalable
              <b className="purple"> distributed systems
              </b> and
              <b className="purple"> reactive front-end
              </b> applications.
              <br />
              <br />
              I had some brief research experience, contributing to <b className="purple"> three published papers </b> in journals and conferences.
              <br />
              <br />
              I am also an amateur <b className="purple"> dancer </b>, mainly in the style of <b className="purple"> waacking </b>.
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
