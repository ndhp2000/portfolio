import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import academicPdf from "../../Assets/Academic.pdf";
import vallet from "../../Assets/vallet.pdf";
import sv5tot2020 from "../../Assets/sv5tot2020.pdf";
import sv5tot2021 from "../../Assets/sv5tot2021.pdf";
import secondprize from "../../Assets/secondprize.pdf";
import hackahome from "../../Assets/hackahome.pdf";
import thachthuc from "../../Assets/thachthuc.pdf";
import icpc from "../../Assets/icpcasia.pdf";

function Achievements() {
    const [modalShow, setModalShow] = useState(false);
    const [modalPdf, setModalPdf] = useState("");
    const [modalTitle, setModalTitle] = useState("");

    const achievementsByYear = [
        {
            year: "2022",
            prizes: [
                {
                    title: "Graduate with rank second in the selective <a href='https://www.fit.hcmus.edu.vn/vn/Default.aspx?tabid=419' target='_blank' style='color:rgb(7, 171, 95); text-decoration: underline;' onclick='event.stopPropagation();'>Honor Program</a>",
                    description: "GPA: <span style='color: #00ff88; font-weight: bold;'>3.86/4.0</span> - <span style='color: #00ff88; font-weight: bold;'>9.23/10</span> in the Honor Program<br/>(program for the top <strong>49</strong> best students in the Information Technology faculty)",
                    issuer: "Falcuty of Information Technology - VNU-HCMC",
                    pdf: academicPdf
                }
            ]
        },
        {
            year: "2021",
            prizes: [
                {
                    title: "Odon Vallet Scholarship",
                    description: "The prestigious scholarship awarded to outstanding Vietnamese students for exceptional academic achievements and research potential",
                    issuer: "Vallet Foundation (France) through Rencontres du Vietnam",
                    pdf: vallet
                },
                {
                    title: "Vietnam National \"Student of Five Merits\"",
                    description: "The prestigious award recognizing students with outstanding achievements in ethics, study, physical fitness, volunteering, and integration. In 2021, <b>291</b> students were awarded this prize in Vietnam.",
                    issuer: "Vietnam National Union of Student",
                    pdf: sv5tot2021
                },
                {
                    title: "Winner - <span style='color: #00ff88;'>NFQ Hackathon: HackaHome 2021</span>",
                    description: "Hackathon on <em>\"How cutting-edge technologies make working from home more enjoyable\"</em> — our team developed <strong>LLP Health</strong>, an application designed to encourage and motivate physical exercise at home during the Covid-19 pandemic.",
                    issuer: "NFQ Company",
                    pdf: hackahome
                },
                {
                    title: "First Prize in the \"Thách Thức\" Academic Competition",
                    description: "The annual academic competition where student teams collaborate and strategize to compete in games covering various areas of computer science — from competitive programming and robot control to computer networks, operating systems, and databases.",
                    issuer: "Falcuty of Information Technology - VNU-HCMC",
                    pdf: thachthuc
                }
            ]
        },
        {
            year: "2020",
            prizes: [
                {
                    title: "Second Prize – ICPC Asia Regional",
                    description: "The world's most prestigious university-level programming contest where teams solve complex algorithmic problems under time pressure",
                    issuer: "ICPC Foundation",
                    pdf: icpc
                },
                {
                    title: "Odon Vallet Scholarship",
                    description: "The prestigious scholarship awarded to outstanding Vietnamese students for exceptional academic achievements and research potential",
                    issuer: "Vallet Foundation (France) through Rencontres du Vietnam",
                    pdf: vallet
                },
                {
                    title: "Vietnam National \"Student of Five Merits\"",
                    description: "The prestigious award recognizing students with outstanding achievements in ethics, study, physical fitness, volunteering, and integration.  In 2021, <b>198</b> students were awarded this prize in Vietnam.",
                    issuer: "Vietnam National Union of Student",
                    pdf: sv5tot2020
                }
            ]
        },
        {
            year: "2019",
            prizes: [
                {
                    title: "Second Prize – ICPC Vietnam National",
                    description: "The world's most prestigious university-level programming contest where teams solve complex algorithmic problems under time pressure",
                    issuer: "ICPC Foundation",
                }
            ]
        },
        {
            year: "2018",
            prizes: [
                {
                    title: "Second Prize – National Olympiad in Informatics",
                    description: "The largest national programming contest for high school students in Vietnam, featuring algorithmic problems on topics like dynamic programming, greedy algorithms, geometry, graph theory, and so on.",
                    issuer: "Vietnamese Ministry of Education and Training",
                    pdf: secondprize
                }
            ]
        }
    ];

    const handleCardClick = (pdf, title) => {
        setModalPdf(pdf);
        setModalTitle(title);
        setModalShow(true);
    };

    const closeModal = () => {
        setModalShow(false);
        setModalPdf("");
        setModalTitle("");
    };

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
                                            title={prize.pdf ? "Click to show document" : ""}
                                            style={{
                                                border: "1px solid #0d4d2e",
                                                borderRadius: "10px",
                                                padding: "22px",
                                                transition: "all 0.3s ease",
                                                boxShadow: "0 5px 20px rgba(13, 77, 46, 0.1)",
                                                cursor: prize.pdf ? "pointer" : "default"
                                            }}
                                            onClick={prize.pdf ? () => handleCardClick(prize.pdf, prize.title) : undefined}
                                            onMouseEnter={(e) => {
                                                if (prize.pdf) {
                                                    e.currentTarget.style.transform = "translateY(-3px)";
                                                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 255, 136, 0.2)";
                                                    e.currentTarget.style.borderWidth = "2px";
                                                    e.currentTarget.style.borderColor = "#00ff88";
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (prize.pdf) {
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.boxShadow = "0 5px 20px rgba(13, 77, 46, 0.1)";
                                                    e.currentTarget.style.borderWidth = "1px";
                                                    e.currentTarget.style.borderColor = "#0d4d2e";
                                                }
                                            }}
                                        >
                                            <h4
                                                style={{
                                                    color: "#00ff88",
                                                    fontSize: "1.2em",
                                                    fontWeight: "bold",
                                                    marginBottom: "10px"
                                                }}
                                                dangerouslySetInnerHTML={{ __html: prize.title }}
                                            />

                                            <p
                                                style={{
                                                    color: "#ffffff",
                                                    fontSize: "0.95em",
                                                    lineHeight: "1.5",
                                                    marginBottom: "12px",
                                                    opacity: 0.9
                                                }}
                                                dangerouslySetInnerHTML={{ __html: prize.description }}
                                            />

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

            {/* Modal for showing achievement images */}
            {modalShow && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9999
                    }}
                    onClick={closeModal}
                >
                    <div
                        style={{
                            backgroundColor: "rgba(20, 20, 25, 0.95)",
                            border: "2px solid #00ff88",
                            borderRadius: "15px",
                            padding: "20px",
                            width: "80vw",
                            height: "95vh",
                            position: "relative",
                            boxShadow: "0 10px 30px rgba(0, 255, 136, 0.3)",
                            display: "flex",
                            flexDirection: "column"
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "15px",
                                background: "transparent",
                                border: "none",
                                color: "#00ff88",
                                fontSize: "24px",
                                fontWeight: "bold",
                                cursor: "pointer",
                                zIndex: 10000,
                                padding: "5px 10px",
                                borderRadius: "50%",
                                transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "rgba(0, 255, 136, 0.2)";
                                e.target.style.transform = "scale(1.1)";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "transparent";
                                e.target.style.transform = "scale(1)";
                            }}
                        >
                            ×
                        </button>

                        {/* Modal Content */}
                        <div style={{ textAlign: "center", flex: 1, display: "flex", flexDirection: "column" }}>
                            <h3 style={{ color: "#00ff88", marginBottom: "20px", fontSize: "1.8em", flexShrink: 0 }}>
                                Achievement Document
                            </h3>
                            <iframe
                                src={modalPdf || "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"}
                                style={{
                                    width: "100%",
                                    flex: 1,
                                    border: "2px solid #00ff88",
                                    borderRadius: "10px",
                                    boxShadow: "0 4px 15px rgba(0, 255, 136, 0.3)",
                                    minHeight: "0"
                                }}
                                title={modalTitle}
                            />
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
}

export default Achievements;
