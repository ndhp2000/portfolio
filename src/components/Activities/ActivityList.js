import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import goEuropeDay from "../../Assets/Activities/go-europe.pdf";
import vsss from "../../Assets/Activities/vsss.pdf";
import traoDoiSinhVien from "../../Assets/Activities/trao-doi-sinh-vien.pdf";

function ActivityList() {
    const [modalShow, setModalShow] = useState(false);
    const [modalPdf, setModalPdf] = useState("");
    const [modalTitle, setModalTitle] = useState("");

    const activities = [
        {
            title: "Organizer at Project in Mathematics and Applications (PiMA)",
            description: "Organized seminars at high schools, wrote educational blog posts for the PiMA fanpage, and served as both organizer and mentor at the PiMA Summer Camp 2021.",
            referenceUrl: "https://pimavn.github.io/",
        },
        {
            title: "Attendant at Vietnam Summer School of Science",
            description: "Attended lectures and seminars on science (scientific methods, and research ethics), conducted a mini project, and connected with the regional scientific community.",
            referenceUrl: "https://www.icisequynhon.com/august-5-2025-opening-of-the-12th-vietnam-summer-school-of-science-vsss12/",
            pdf: vsss
        },
        {
            title: "Organizer at Go Europe Day",
            description: "Organized games and activities introducing European cultures.",
            pdf: goEuropeDay
        },
        {
            title: "Participated in various cultural exchange activities.",
            description: "Participated in student exchange programs in Thailand and Taiwan, an online summer camp hosted by Japan, and a Korean summer camp held in Vietnam.",
            pdf: traoDoiSinhVien
        }
    ];

    const handleCardClick = (activity) => {
        if (activity.pdf) {
            setModalPdf(activity.pdf);
            setModalTitle(activity.title);
            setModalShow(true);
        }
    };

    const closeModal = () => {
        setModalShow(false);
        setModalPdf("");
        setModalTitle("");
    };


    return (
        <Container fluid className="activities-section" style={{ padding: "40px 0" }}>
            <Row className="justify-content-center">
                <Col lg={10} md={12}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                style={{
                                    border: "1px solid #0d4d2e",
                                    borderRadius: "15px",
                                    padding: "25px",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                                    boxShadow: "0 5px 20px rgba(13, 77, 46, 0.1)",
                                    background: "transparent",
                                    cursor: activity.pdf ? "pointer" : "default",
                                    position: "relative"
                                }}
                                onClick={() => handleCardClick(activity)}
                                title={activity.pdf ? "Click to show document" : ""}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-5px)";
                                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(13, 77, 46, 0.15)";
                                    e.currentTarget.style.borderColor = "#00ff88";
                                    if (activity.pdf) {
                                        e.currentTarget.style.cursor = "pointer";
                                        e.currentTarget.style.borderWidth = "2px";
                                        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 255, 136, 0.2)";
                                        e.currentTarget.style.background = "rgba(0, 255, 136, 0.05)";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 5px 20px rgba(13, 77, 46, 0.1)";
                                    e.currentTarget.style.borderColor = "#0d4d2e";
                                    e.currentTarget.style.borderWidth = "1px";
                                    e.currentTarget.style.background = "transparent";
                                    e.currentTarget.style.cursor = activity.pdf ? "pointer" : "default";
                                }}
                            >
                                <h4
                                    style={{
                                        color: "#00ff88",
                                        fontSize: "1.3em",
                                        fontWeight: "bold",
                                        margin: "0 0 15px 0",
                                        textAlign: "left"
                                    }}
                                >
                                    {activity.title}
                                </h4>

                                <p
                                    style={{
                                        color: "#ffffff",
                                        fontSize: "1em",
                                        lineHeight: "1.6",
                                        margin: "0 0 15px 0",
                                        opacity: 0.9,
                                        textAlign: "left"
                                    }}
                                >
                                    {activity.description}
                                </p>

                                {activity.referenceUrl && (
                                    <div style={{ marginTop: "15px", textAlign: "left" }}>
                                        <a
                                            href={activity.referenceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                background: "rgba(0, 255, 136, 0.1)",
                                                color: "#00ff88",
                                                padding: "8px 16px",
                                                borderRadius: "8px",
                                                textDecoration: "none",
                                                fontSize: "0.9em",
                                                fontWeight: "500",
                                                border: "1px solid rgba(0, 255, 136, 0.3)",
                                                transition: "all 0.3s ease"
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.background = "rgba(0, 255, 136, 0.2)";
                                                e.target.style.borderColor = "#00ff88";
                                                e.target.style.transform = "translateY(-2px)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.background = "rgba(0, 255, 136, 0.1)";
                                                e.target.style.borderColor = "rgba(0, 255, 136, 0.3)";
                                                e.target.style.transform = "translateY(0)";
                                            }}
                                        >
                                            <span>🔗</span>
                                            Reference
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>

            {/* Modal for showing PDF documents */}
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
                                Activity Document
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

export default ActivityList;
