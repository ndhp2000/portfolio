import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";

function Dance() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px"
      }}>
        <span>My <strong className="main-name">Dance</strong></span>
        <a
          href="https://www.instagram.com/tiny__camel/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#00ff88",
            fontSize: "0.8em",
            textDecoration: "none"
          }}
          className="dance-instagram-link"
        >
          <AiFillInstagram />
        </a>
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
        Follow me on Instagram!!!
      </p>

      <Row className="justify-content-center" style={{ paddingTop: "20px" }}>
        <Col md={5} className="dance-video-col">
          <div className="dance-video-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/nAniP3M_X1c?start=1"
              title="Dance Performance 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="dance-video"
            ></iframe>
          </div>
        </Col>

        <Col md={5} className="dance-video-col">
          <div className="dance-video-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/nPQzLvZtV_o?start=2302"
              title="Dance Performance 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="dance-video"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Row>
  );
}

export default Dance;
