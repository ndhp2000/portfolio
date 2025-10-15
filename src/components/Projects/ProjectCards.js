import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import  { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {/* If the component contains GitHub link(s), it will render the GitHub button/dropdown */}
        {props.ghLink && (
          <>
            {Array.isArray(props.ghLink) ? (
              <Dropdown style={{ display: "inline-block" }}>
                <Dropdown.Toggle variant="primary">
                  <BsGithub /> &nbsp;
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
              <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp;
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
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {/* If the component contains PDF link, it will render the PDF button */}
        {props.pdfLink && (
          <Button
            variant="danger"
            href={props.pdfLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaFilePdf /> &nbsp;
            {"PDF"}
          </Button>
        )}

        {/* If the component contains Product link, it will render the Product button */}
        {props.productLink && (
          <Button
            variant="success"
            href={props.productLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <MdBusinessCenter /> &nbsp;
            {"Product"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
