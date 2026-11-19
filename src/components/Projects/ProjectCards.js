import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import  { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaFilePdf, FaTrophy } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        {(props.company || props.award) && (
          <div style={{ textAlign: "left", marginBottom: "10px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {props.company && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(0, 255, 136, 0.1)",
                color: "#00ff88",
                border: "1px solid rgba(0, 255, 136, 0.35)",
                borderRadius: "12px",
                padding: "3px 10px",
                fontSize: "0.8em",
                fontWeight: "600"
              }}
            >
              <MdBusinessCenter />
              Company project · {props.company}
            </span>
            )}
            {props.award && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255, 196, 0, 0.12)",
                color: "#ffc400",
                border: "1px solid rgba(255, 196, 0, 0.45)",
                borderRadius: "12px",
                padding: "3px 10px",
                fontSize: "0.8em",
                fontWeight: "600"
              }}
            >
              <FaTrophy />
              {props.award}
            </span>
            )}
          </div>
        )}
        <Card.Title style={{ fontWeight: "bold" }}>{props.title}</Card.Title>
        <Card.Text as="div" style={{ textAlign: "left" }}>
          {Array.isArray(props.description) ? (
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {props.description.map((point, index) => (
                <li key={index} style={{ display: "flex", gap: "8px", alignItems: "flex-start", lineHeight: 1.45 }}>
                  <span style={{ color: "#00ff88", fontWeight: 700, flexShrink: 0 }}>▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : (
            props.description
          )}
        </Card.Text>
        
        <div style={{ textAlign: "center", marginTop: "15px", display: "flex", flexWrap: "nowrap", justifyContent: "center", gap: "10px" }}>
        {/* If the component contains GitHub link(s), it will render the GitHub button/dropdown */}
        {props.ghLink && (
          <>
            {Array.isArray(props.ghLink) ? (
              <Dropdown style={{ display: "inline-block" }}>
                <Dropdown.Toggle variant="primary" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <BsGithub style={{ verticalAlign: "middle", marginRight: "5px" }} />
                  {props.isBlog ? "Blog" : "GitHub"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {props.ghLink.map((link, index) => (
                    <Dropdown.Item 
                      key={index} 
                      href={link.url} 
                      target="_blank"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {link.name || `Repo ${index + 1}`}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Button variant="primary" href={props.ghLink} target="_blank" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BsGithub style={{ verticalAlign: "middle", marginRight: "5px" }} />
                {props.isBlog ? "Blog" : "GitHub"}
              </Button>
            )}
          </>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <CgWebsite style={{ verticalAlign: "middle", marginRight: "5px" }} />
            Demo
          </Button>
        )}

        {/* If the component contains PDF link, it will render the PDF button */}
        {props.pdfLink && (
          <Button
            variant="danger"
            href={props.pdfLink}
            target="_blank"
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <FaFilePdf style={{ verticalAlign: "middle", marginRight: "5px" }} />
            PDF
          </Button>
        )}

        {/* If the component contains Product link, it will render the Product button */}
        {props.productLink && (
          <Button
            variant="success"
            href={props.productLink}
            target="_blank"
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <MdBusinessCenter style={{ verticalAlign: "middle", marginRight: "5px" }} />
            Product
          </Button>
        )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
