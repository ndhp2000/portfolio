import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  FaCode, 
  FaLaptopCode, 
  FaServer, 
  FaDatabase, 
  FaTools, 
  FaPalette,
  FaRobot,
  FaEye,
  FaSitemap
} from "react-icons/fa";

function Techstack() {
  const techCategories = [
    {
      title: "Programming Languages",
      icon: FaCode,
      skills: ["Scala", "C++", "Python", "Java"]
    },
    {
      title: "Generative AI",
      icon: FaRobot,
      skills: ["LLMs", "AI Agents", "Agentic Software Development", "LangGraph", "Claude SDK", "Workflow Automation"]
    },
    {
      title: "Backend Development",
      icon: FaServer,
      skills: ["ZIO", "ZIO HTTP", "REST APIs", "Temporal", "Django", "System Integration"]
    },
    {
      title: "Frontend Development",
      icon: FaLaptopCode,
      skills: ["Scala.js", "Laminar", "React", "UI/UX Development"]
    },
    {
      title: "Databases & Storage",
      icon: FaDatabase,
      skills: ["FoundationDB", "Kafka", "MySQL"]
    },
    {
      title: "Tools & Technologies",
      icon: FaTools,
      skills: ["Git", "AWS", "Docker", "Linux/Unix", "CI/CD Pipelines"]
    },
    {
      title: "Computer Vision",
      icon: FaEye,
      skills: ["Object Detection", "Retrieval", "Segmentation", "3 Published Papers"]
    },
    {
      title: "Fundamentals",
      icon: FaSitemap,
      skills: ["Data Structures & Algorithms", "Operating Systems", "Databases", "Computer Networks", "Software Design"]
    },
    {
      title: "Workflow & Design",
      icon: FaPalette,
      skills: ["Agile/Scrum", "System Design", "Architecture", "Performance Optimization", "Troubleshooting", "End-to-end Ownership", "Product Mindset"]
    }
  ];

  return (
    <div style={{ padding: "50px 0" }}>
      <Row style={{ justifyContent: "center" }}>
        {techCategories.map((category, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={4} xl={4} style={{ marginBottom: "30px", padding: "0 15px" }}>
            <div 
              style={{
                border: "1px solid rgb(26, 213, 126)",
                borderRadius: "15px",
                padding: "25px",
                height: "100%",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 32px rgba(23, 225, 131, 0.2)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "20px", height: "100px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "5px" }}>
                <div 
                  style={{ 
                    fontSize: "1.8em", 
                    color: "#0dac62", 
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50px",
                    height: "50px",
                    margin: "0 auto"
                  }}
                >
                  <category.icon style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }} />
                </div>
                <h3 
                  style={{ 
                    color: "#0dac62", 
                    fontSize: "1.2em",
                    fontWeight: "bold",
                    marginBottom: "0",
                    textShadow: "0 0 10px rgba(13, 172, 98, 0.3)",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {category.title}
                </h3>
              </div>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    style={{
                      background: "rgba(13, 172, 98, 0.2)",
                      color: "#0dac62",
                      padding: "8px 12px",
                      borderRadius: "20px",
                      fontSize: "0.9em",
                      fontWeight: "500",
                      border: "1px solid rgba(13, 172, 98, 0.3)",
                      transition: "all 0.3s ease",
                      cursor: "default"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "rgba(13, 172, 98, 0.3)";
                      e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(13, 172, 98, 0.2)";
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
