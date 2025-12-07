import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImage from "../../Assets/profile image.jpg";

function Introduction() {
    return (
        <Container>
            <Row style={{ padding: "10px", alignItems: "center" }}>
                <Col md={7} className="home-header" style={{ textAlign: "left" }}>

                    <h2 className="heading" style={{ textAlign: "left" }}>
                        I'm
                        <strong className="main-name"> Nguyen Dinh Hoang Phuc</strong>
                    </h2>

                    <h2 className="heading-name" style={{ paddingBottom: 10, paddingTop: 10, textAlign: "left" }}>
                        Product Software Engineer
                    </h2>


                    <div style={{ paddingTop: 20, textAlign: "left" }}>
                        <div style={{ textAlign: "left", fontSize: "1.3em", paddingLeft: "45px" }}>
                           I love to build scalable and reliable systems. Beyond code, I'm also a dance enthusiast — it's how I apply my logical thinking to movements and rhythms.
                        </div>

                    </div>


                </Col>

                <Col md={5} style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                    <img 
                        src={profileImage} 
                        alt="Profile" 
                        style={{ 
                            width: "100%", 
                            maxWidth: "280px", 
                            height: "auto", 
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            marginTop: "50px"
                        }} 
                    />
                </Col>

            </Row>
        </Container>
    );
}

export default Introduction;
