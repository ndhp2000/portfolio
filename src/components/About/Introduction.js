import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Introduction() {
    return (
        <Container>
            <Row style={{padding: "10px"}}>
                <Col md={7} className="home-header" style={{ textAlign: "left" }}>
                    <h1 style={{ paddingBottom: 15, textAlign: "left" }} className="heading">
                        Hi There!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻
                        </span>
                    </h1>

                    <h1 className="heading-name" style={{ textAlign: "left" }}>
                        I'm
                        <strong className="main-name"> Nguyen Dinh Hoang Phuc</strong>
                    </h1>
                    <div style={{ paddingTop: 45, textAlign: "left" }}>

                        <h2 className="heading-sub" style={{ paddingBottom: 10, textAlign: "left" }}>
                            Product Software Engineer
                        </h2>

                        <h2 className="heading-sub" style={{ textAlign: "left" }}>
                  Distributed Systems, Cloud Computing & Dance enthusiast
                </h2>

                    </div>


                </Col>

                <Col
                    md={5}
                    style={{ paddingBottom: "50px", paddingTop: "15px" }}
                    className="about-img"
                >
                    <div style={{
                        borderRadius: "15px",
                        overflow: "hidden",
                        boxShadow: "0 0 20px 4px rgba(47, 235, 147, 0.54)",
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

export default Introduction;
