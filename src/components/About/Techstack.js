import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiScala,
  SiApachekafka,
  SiAmazonaws,
  SiJavascript,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiScala />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ fontSize: "2em", color: "#00ff88", fontWeight: "bold" }}>FD</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ fontSize: "2em", color: "#00ff88", fontWeight: "bold" }}>T</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ fontSize: "2em", color: "#00ff88", fontWeight: "bold" }}>L</div>
      </Col>
    </Row>
  );
}

export default Techstack;
