import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdBusinessCenter } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import profileImage from "../../Assets/profile image.jpg";

const ACCENT = "#00ff88";

const cardStyle = {
    border: "1px solid #0d4d2e",
    borderRadius: "15px",
    padding: "16px 20px",
    height: "100%",
    textAlign: "left",
    background: "rgba(0, 255, 136, 0.03)",
    boxShadow: "0 5px 20px rgba(13, 77, 46, 0.15)"
};

const cardTitleStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: ACCENT,
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "1.25em",
    fontWeight: 700,
    marginBottom: "6px"
};

const cardLeadStyle = {
    color: "#ffffff",
    opacity: 0.75,
    fontSize: "0.95em",
    marginBottom: "8px"
};

const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "6px"
};

function Bullet({ children }) {
    return (
        <li style={{ display: "flex", gap: "10px", alignItems: "flex-start", lineHeight: 1.4 }}>
            <span style={{ color: ACCENT, fontWeight: 700, flexShrink: 0 }}>▹</span>
            <span>{children}</span>
        </li>
    );
}

const hl = (text) => <span style={{ color: ACCENT, fontWeight: 600 }}>{text}</span>;

function Introduction() {
    return (
        <Container>
            {/* Hook + photo */}
            <Row style={{ padding: "10px", alignItems: "center" }}>
                <Col md={8} className="home-header" style={{ textAlign: "left" }}>
                    <h2 className="heading" style={{ textAlign: "left" }}>
                        I'm
                        <strong className="main-name"> Nguyen Dinh Hoang Phuc</strong>
                    </h2>

                    <h2 className="heading-name" style={{ paddingBottom: 0, paddingTop: 6, textAlign: "left" }}>
                        Erasmus Mundus M.Sc. Student – EDISS
                    </h2>

                    <p
                        style={{
                            marginTop: "16px",
                            marginBottom: 0,
                            paddingLeft: "45px",
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "1.6em",
                            fontWeight: 700,
                            lineHeight: "1.25",
                            letterSpacing: "-0.01em",
                            color: ACCENT,
                            textShadow: "0 0 12px rgba(0, 255, 136, 0.35)",
                            textAlign: "left"
                        }}
                    >
                        I can solve problems for your company and your customers with software.
                    </p>
                </Col>

                <Col md={4} style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                    <img
                        src={profileImage}
                        alt="Profile"
                        style={{
                            width: "100%",
                            maxWidth: "190px",
                            height: "auto",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            marginTop: "16px"
                        }}
                    />
                </Col>
            </Row>

            {/* Why? — experience + academics */}
            <Row style={{ padding: "0 10px", marginTop: "4px" }}>
                <Col xs={12}>
                    <h3
                        style={{
                            textAlign: "left",
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            color: "#ffffff",
                            marginBottom: "8px",
                            fontSize: "1.5em"
                        }}
                    >
                        Why?
                    </h3>
                </Col>

                <Col md={6} style={{ marginBottom: "12px" }}>
                    <div style={cardStyle}>
                        <div style={cardTitleStyle}>
                            <MdBusinessCenter /> Software that ships
                        </div>
                        <div style={cardLeadStyle}>I’ve spent 4 years building:</div>
                        <ul style={listStyle}>
                            <Bullet>{hl("Complex cloud products")}, built end to end, for private-investment firms</Bullet>
                            <Bullet>
                                An {hl("AI agent")} that manages and upgrades dependencies across a very large
                                enterprise system (SAP SuccessFactors)
                            </Bullet>
                            <Bullet>
                                Skillful in {hl("full-stack")} work (back end and front end), with a{" "}
                                {hl("product mindset")} and hands-on {hl("Agentic AI")} experience
                            </Bullet>
                        </ul>
                    </div>
                </Col>

                <Col md={6} style={{ marginBottom: "12px" }}>
                    <div style={cardStyle}>
                        <div style={cardTitleStyle}>
                            <FaGraduationCap /> Academic record
                        </div>
                        <div style={cardLeadStyle}>More about my competency:</div>
                        <ul style={listStyle}>
                            <Bullet>
                                {hl("Master’s")} in Engineering of Data-intensive Intelligent Software Systems, on a{" "}
                                {hl("full scholarship")}
                            </Bullet>
                            <Bullet>
                                Ranked {hl("2nd")} in the Honors Program in IT at VNU-HCMC University of Science
                            </Bullet>
                            <Bullet>
                                Started competitive programming at 14, then won {hl("Second Prize")} at both the
                                Vietnam National Olympiad in Informatics and the ICPC Asia Regional contest
                            </Bullet>
                        </ul>
                    </div>
                </Col>
            </Row>

            {/* Closing + CTA */}
            <Row style={{ padding: "0 10px" }}>
                <Col xs={12} style={{ textAlign: "left", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 24px" }}>
                    <p style={{ fontSize: "1.1em", lineHeight: 1.5, color: "#ffffff", margin: 0, flex: "1 1 420px" }}>
                        Now, I want to put this experience and background to work building{" "}
                        {hl("products people need")}, and keep growing along the way.
                    </p>
                    <Link
                        to="/project"
                        style={{
                            display: "inline-block",
                            background: "rgba(0, 255, 136, 0.1)",
                            color: ACCENT,
                            border: `1px solid ${ACCENT}`,
                            borderRadius: "8px",
                            padding: "10px 22px",
                            fontWeight: 600,
                            textDecoration: "none",
                            whiteSpace: "nowrap"
                        }}
                    >
                        Check out my projects →
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Introduction;
