import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Achievements() {
    const achievementsByYear = [
        {
            year: "2021",
            prizes: [
                {
                    title: "First prize - NFQ Hackathon: HackaHome 2021",
                    description: "Hackathon on “How cutting-edge technologies make working from home more enjoyable” — our team developed LLP Health, an application designed to encourage and motivate physical exercise at home during the Covid-19 pandemic.",
                    issuer: "NFQ Company"
                },
                {
                    title: "First Prize in the “Thách Thức” Academic Competition",
                    description: "The annual academic competition where student teams collaborate and strategize to compete in games covering various areas of computer science — from competitive programming and robot control to computer networks, operating systems, and databases.",
                    issuer: "Falcuty of Information Technology - VNU-HCMC"
                },
                {
                    title: "National “Student of Five Merits”",
                    description: "The prestigious award recognizing students with outstanding achievements in ethics, study, physical fitness, volunteering, and integration.",
                    issuer: "Vietnam National Union of Student"
                },
                {
                    title: "Odon Vallet Scholarship",
                    description: "The prestigious scholarship awarded to outstanding Vietnamese students for exceptional academic achievements and research potential",
                    issuer: "Vallet Foundation (France) through Rencontres du Vietnam"
                }
            ]
        },
        {
            year: "2020",
            prizes: [
                {
                    title: "Second Prize – ICPC Asia Regional",
                    description: "The world's most prestigious university-level programming contest where teams solve complex algorithmic problems under time pressure",
                    issuer: "ICPC Foundation"
                },
                {
                    title: "National “Student of Five Merits”",
                    description: "The prestigious award recognizing students with outstanding achievements in ethics, study, physical fitness, volunteering, and integration.",
                    issuer: "Vietnam National Union of Student"
                },
                {
                    title: "Odon Vallet Scholarship",
                    description: "The prestigious scholarship awarded to outstanding Vietnamese students for exceptional academic achievements and research potential",
                    issuer: "Vallet Foundation (France) through Rencontres du Vietnam"
                }
            ]
        },
        {
            year: "2019",
            prizes: [
                {
                    title: "Second Prize – ICPC Vietnam National",
                    description: "The world's most prestigious university-level programming contest where teams solve complex algorithmic problems under time pressure",
                    issuer: "ICPC Foundation"
                }
            ]
        },
        {
            year: "2018",
            prizes: [
                {
                    title: "Second Prize – National Olympiad in Informatics",
                    description: "The largest national programming contest for high school students in Vietnam, featuring algorithmic problems on topics like dynamic programming, greedy algorithms, geometry, graph theory, and so on.",
                    issuer: "Vietnamese Ministry of Education and Training"
                }
            ]
        }
    ];

    return (
        <Container fluid className="achievements-section" style={{ padding: "80px 0" }}>
            <Row className="justify-content-center">
                <Col lg={8} md={10}>
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h1
                            style={{
                                marginBottom: "20px"
                            }}
                        >
                            <strong className="main-name">Achievements</strong>
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
                            Recognition and awards throughout my academic and professional journey
                        </p>
                    </div>

                    <div className="timeline-container" style={{ position: "relative" }}>
                        {/* Timeline Line */}
                        <div
                            style={{
                                position: "absolute",
                                left: "50px",
                                top: "0",
                                bottom: "0",
                                width: "3px",
                                background: "linear-gradient(to bottom, #00ff88, rgba(0, 255, 136, 0.3))",
                                borderRadius: "2px",
                                boxShadow: "0 0 15px rgba(0, 255, 136, 0.5)"
                            }}
                        />

                        {achievementsByYear.map((yearData, yearIndex) => (
                            <div
                                key={yearIndex}
                                className="timeline-year"
                                style={{
                                    position: "relative",
                                    marginBottom: "40px",
                                    paddingLeft: "100px"
                                }}
                            >
                                {/* Timeline Dot */}
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "38px",
                                        top: "15px",
                                        width: "24px",
                                        height: "24px",
                                        background: "#00ff88",
                                        borderRadius: "50%",
                                        border: "3px solid rgba(20, 20, 25, 0.9)",
                                        boxShadow: "0 0 15px rgba(0, 255, 136, 0.6)",
                                        zIndex: 2
                                    }}
                                />

                                {/* Year Badge */}
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "-50px",
                                        top: "8px",
                                        background: "#00ff88",
                                        color: "rgba(20, 20, 25, 0.95)",
                                        padding: "6px 15px",
                                        borderRadius: "15px",
                                        fontSize: "1em",
                                        fontWeight: "bold",
                                        boxShadow: "0 3px 10px rgba(0, 255, 136, 0.4)"
                                    }}
                                >
                                    {yearData.year}
                                </div>

                                {/* Prizes Container */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                    {yearData.prizes.map((prize, prizeIndex) => (
                                        <div
                                            key={prizeIndex}
                                            style={{
                                                border: "1px solid #0d4d2e",
                                                borderRadius: "10px",
                                                padding: "20px",
                                                transition: "all 0.3s ease",
                                                boxShadow: "0 5px 20px rgba(13, 77, 46, 0.1)"
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.transform = "translateY(-3px)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.transform = "translateY(0)";
                                            }}
                                        >
                                            <h4
                                                style={{
                                                    color: "#00ff88",
                                                    fontSize: "1.2em",
                                                    fontWeight: "bold",
                                                    marginBottom: "10px"
                                                }}
                                            >
                                                {prize.title}
                                            </h4>

                                            <p
                                                style={{
                                                    color: "#ffffff",
                                                    fontSize: "0.95em",
                                                    lineHeight: "1.5",
                                                    marginBottom: "12px",
                                                    opacity: 0.9
                                                }}
                                            >
                                                {prize.description}
                                            </p>

                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px"
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        color: "#ffffff",
                                                        fontSize: "0.9em",
                                                        opacity: 0.8
                                                    }}
                                                >
                                                    by
                                                </span>
                                                <span
                                                    style={{
                                                        color: "#00ff88",
                                                        fontSize: "0.9em",
                                                        fontWeight: "500",
                                                        background: "rgba(0, 255, 136, 0.1)",
                                                        padding: "3px 10px",
                                                        borderRadius: "10px",
                                                        border: "1px solid rgba(0, 255, 136, 0.2)"
                                                    }}
                                                >
                                                    {prize.issuer}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Achievements;
