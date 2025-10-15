import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";

function Introduction2() {
  return (
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="main-name">I am</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{ paddingBottom: "50px", paddingTop: "80px" }}
            className="about-img"
          >
            <div style={{ 
              borderRadius: "15px", 
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(13, 172, 98, 0.2)",
              border: "1px solid rgba(13, 172, 98, 0.3)",
              width: "315px",
              height: "560px"
            }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/z8WrC0F92sc?autoplay=1&mute=1&loop=1&playlist=z8WrC0F92sc&vq=hd720"
                title="About Me Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: "15px", maxWidth: "100%" }}
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
  );
}

export default Introduction2;
