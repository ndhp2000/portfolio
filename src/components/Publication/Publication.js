import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCalendarAlt, FaBookOpen, FaUserEdit } from "react-icons/fa";
import SHREC from "../../Assets/About/SHREC.jpg";
import Itask from "../../Assets/About/Itask.png";
import Davis from "../../Assets/About/Davis.png";
import Particle from "../Particle";

function Publication() {
  const publications = [
    {
      id: 1,
      image: SHREC,
      title: "SHREC 2020: Retrieval of digital surfaces with similar geometric reliefs",
      date: "Oct, 2020",
      journal: "Computers & Graphics",
      authors: "Elia Moscoso Thompson,  Minh-Triet Tran, Hoang-Phuc Nguyen-Dinh,...",
      summary: "This paper presents the methods that have participated in the SHREC’20 contest on retrieval of surface patches with similar geometric reliefs and the analysis of their performance over the benchmark created for this challenge. The goal of the context is to verify the possibility of retrieving 3D models only based on the reliefs that are present on their surface and to compare methods that are suitable for this task.",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0097849320301138",
    },
    {
      id: 2,
      image: Itask,
      title: "iTASK - Intelligent Traffic Analysis Software Kit",
      date: "Jul, 2020",
      journal: "CVPRW",
      authors: "Minh-Triet Tran, Tam V. Nguyen, Trung-Hieu Hoang, Hoang-Phuc Nguyen-Dinh,...",
      summary: "Traffic flow analysis is essential for intelligent transportation systems. In this paper, we introduce our Intelligent Traffic Analysis Software Kit (iTASK) to tackle three challenging problems: vehicle flow counting, vehicle re-identification, and abnormal event detection.",
      link: "https://ieeexplore.ieee.org/document/9150669",
    },
    {
      id: 3,
      image: Davis,
      title: "Multi-Referenced Guided Instance Segmentation Framework for Semi-supervised Video Instance Segmentation",
      date: "Jun, 2020",
      journal: "CVPRW",
      authors: "Minh-Triet Tran, Trung-Hieu Hoang, Tam V. Nguyen, Hoang-Phuc Nguyen-Dinh,...",
      summary: "In this paper, we propose a novel Multi-Referenced Guided Instance Segmentation (MR-GIS) framework for the challenging problem of semi-supervised video instance segmentation. Our proposed method consists two passes of segmentation with mask guidance.",
      link: "https://www.researchgate.net/publication/344373053_Multi-Referenced_Guided_Instance_Segmentation_Framework_for_Semi-supervised_Video_Instance_Segmentation",
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
          My <strong className="main-name">Publications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Publications I have participated in.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" , paddingTop: "50px" }}>
          {publications.map((publication) => (
            <Col
              md={10}
              key={publication.id}
              className="publication-card"
              style={{
                marginBottom: "30px",
                padding: "0",
                border: "1px solid #0dac62",
                borderRadius: "15px",
                boxShadow: "0 8px 32px rgba(13, 172, 98, 0.2)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                display: "flex",
                alignItems: "stretch",
                backgroundColor: "rgba(20, 20, 25, 0.9)",
                backdropFilter: "blur(10px)",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(13, 172, 98, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(13, 172, 98, 0.2)";
              }}
              onClick={() => window.open(publication.link, "_blank")}
            >
              <Row style={{ width: "100%", margin: 0, minHeight: "300px" }}>
                {/* Image Column */}
                <Col
                  md={4}
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    padding: "20px",
                    background: "linear-gradient(135deg, rgba(13, 172, 98, 0.1) 0%, rgba(20, 20, 25, 0.9) 100%)"
                  }}
                >
                  <img
                    src={publication.image}
                    alt="publication cover"
                    className="img-fluid"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "250px",
                      borderRadius: "10px",
                      border: "1px solid #0dac62",
                      objectFit: "cover"
                    }}
                  />
                </Col>

                {/* Details Column */}
                <Col md={8} style={{ padding: "25px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <h3 style={{
                      color: "white",
                      fontSize: "1.3em",
                      fontWeight: "bold",
                      marginBottom: "15px",
                      lineHeight: "1.3"
                    }}>
                      {publication.title}
                    </h3>

                    <div style={{ marginBottom: "12px" }}>
                      <span style={{ color: "#0dac62", fontSize: "0.9em", marginRight: "20px" }}>
                        <FaCalendarAlt style={{ marginRight: "8px" }} />
                        {publication.date}
                      </span>
                      <span style={{ color: "#0dac62", fontSize: "0.9em" }}>
                        <FaBookOpen style={{ marginRight: "8px" }} />
                        {publication.journal}
                      </span>
                    </div>

                    <p style={{
                      color: "white",
                      fontSize: "0.9em",
                      opacity: 0.9,
                      marginBottom: "15px",
                      fontStyle: "italic"
                    }}>
                      <FaUserEdit style={{ marginRight: "8px", color: "#0dac62" }} />
                      {publication.authors}
                    </p>


                    <p style={{
                      color: "white",
                      fontSize: "1em",
                      lineHeight: "1.6",
                      marginBottom: "0",
                      opacity: 0.9
                    }}>
                      {publication.summary}
                    </p>
                  </div>

                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Publication;
