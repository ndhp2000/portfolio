import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import investorDataManagement from "../../Assets/Projects/IDM.png";
import investorAccess from "../../Assets/Projects/IA.png";
import brandedLandingPage from "../../Assets/Projects/landingpage.png";
import zacingGame from "../../Assets/Projects/zacing-game.png";
import seamCarving from "../../Assets/Projects/seam-carving.jpeg";
import smartAnnotation from "../../Assets/Projects/smart-annotation.png";
import llpHealth from "../../Assets/Projects/llphealth.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="main-name">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brandedLandingPage}
              isBlog={false}
              title="Branded Landing Page"
              description="A platform that enables general partners to create fully customizable web pages to showcase their brand, funds, and limited partner–specific content. It includes a page management dashboard, granular access control for limited partners, support for custom domains, and shareable page links. All customized pages are encoded and decoded using Protobuf and securely stored on Amazon S3."
              demoLink="https://anduin.helpjuice.com/en_US/branded-landing-page/page-inspiration-guide-build-content-that-serves-your-different-needs"
              productLink="https://anduintransact.com/solutions/anduin-engagement-hub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={investorDataManagement}
              isBlog={false}
              title="Investor Data Management"
              description="The platform that centralizes all investor data to streamline subscriptions, automate compliance checks, and improve post-close interactions. I owned key parts of the system, including Contact Management, which allows General Partners to manage firm contacts and related entities such as contact matrices and investment entities, and Document Request, which provides workflows for requesting and tracking documents from Limited Partners. I developed complex logic for permissions and object relationships, and optimized dashboards to enhance both scalability and user experience."
              demoLink="https://anduin.helpjuice.com/en_US/investor-data-management/set-up-a-contact-matrix-across-entities-vehicles"
              productLink="https://anduintransact.com/solutions/anduin-investor-data-management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={investorAccess}
              isBlog={false}
              title="Investor Access"
              description="An application for Limited Partners to manage their profiles (over 500 data points), documents, and investments, featuring streamlined workflows for quick fund subscriptions, submitting requested documents, and automatic data synchronization."
              productLink="https://anduintransact.com/solutions/anduin-investor-access"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartAnnotation}
              isBlog={false}
              title="Intelligent Annotation System With Semi Automatic Assistance"
              description="An intelligent annotation system that leverages deep learning for semi-automatic object labeling, integrates a human-in-the-loop process to continuously improve model accuracy, and supports distributed computation through user-shared resources. Built with React, Go, and Python on a scalable microservice architecture using gRPC, Docker, and Kubernetes.
              Scored 10/10 in the thesis defense.
              "
              ghLink = {
                [
                  { name: "Frontend", url: "https://gitlab.com/t9411/thesis-front-end" },
                  { name: "Backend", url: "https://gitlab.com/t9411/annotation-system-backend" },
                  { name: "AI model", url: "https://gitlab.com/t9411/yolov5-training-client" }
                ]
              }
              demoLink="https://www.youtube.com/watch?v=-3xhzuiqaDs"
              pdfLink="https://drive.google.com/file/d/10XorBi1RhzdGGk7aOUN3KnjCi_Vp2Qn5/view?usp=sharing"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zacingGame}
              isBlog={false}
              title="Zacing Game"
              description="A real-time online multiplayer racing game where each player controls a character in a maze and shoots to eliminate others. Developed entirely in Python for both client and server, featuring a server-based action broadcasting system and client-side event queues to ensure synchronized gameplay."
              ghLink= {
                [
                  { name: "Frontend", url: "https://github.com/ndhp2000/DistributedSystem-02" },
                  { name: "Backend", url: "https://github.com/ndhp2000/DistributedSystem02-Server" },
                ]
              }
              demoLink="https://www.youtube.com/watch?v=qSl3rPBrddE"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seamCarving}
              isBlog={false}
              title="Seam Carving on GPU"
              description="Optimized Seam Carving (content-aware image resizing) on GPU using GMEM, CMEM, SMEM, and kernel pipelining, combined with a meet-in-the-middle trick — achieving ~2× speedup over the baseline parallel version."
              ghLink="https://github.com/ktncktnc/PP-FinalProject/tree/master"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={llpHealth}
              isBlog={false}
              title="LLP Health"
              description="Won First Prize at the NFQ Hackathon during the COVID-19 pandemic with an AI-powered Android fitness app that automatically counts exercise reps (push-ups, jumping jacks, squats) and includes tracking, reminders, and social sharing features."
              ghLink="https://github.com/tronglocbrvt/HackathonNFQ"
              demoLink="https://www.youtube.com/watch?v=TK2NjcmVjxs"
            />
          </Col>


       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
