import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  const techCategories = [
    {
      title: "Programming Languages",
      icon: ">_",
      skills: ["Scala", "C++", "Python"]
    },
    {
      title: "Frontend Development", 
      icon: "🧩",
      skills: ["Scala.js", "Laminar", "React"]
    },
    {
      title: "Backend Development",
      icon: "</>",
      skills: ["ZIO", "ZIO HTTP", "Temporal", "Django"]
    },
    {
      title: "Databases & Storage",
      icon: "🗄️",
      skills: ["FoundationDB", "Kafka", "MySQL"]
    },
    {
      title: "Tools & Technologies",
      icon: "⚙️",
      skills: [ "Git", "AWS"]
    },
    {
      title: "Workflow & Design",
      icon: "🎨",
      skills: ["Agile/Scrum", "System Design", "Architecture"]
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
                e.target.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <div 
                  style={{ 
                    fontSize: "2.5em", 
                    color: "#0dac62", 
                    marginBottom: "10px",
                  }}
                >
                  {category.icon}
                </div>
                <h3 
                  style={{ 
                    color: "#0dac62", 
                    fontSize: "1.2em",
                    fontWeight: "bold",
                    marginBottom: "0",
                    textShadow: "0 0 10px rgba(13, 172, 98, 0.3)"
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
