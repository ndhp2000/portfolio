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
import dependencyAgent from "../../Assets/Projects/dependency-agent.svg";

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

        <Row style={{ justifyContent: "flex-start" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dependencyAgent}
              isBlog={false}
              company="SAP"
              title="Dependency Upgrade Agent"
              description={[
                "AI agent built from scratch with LangGraph and the Claude SDK",
                "Automates end-to-end third-party dependency upgrades across 100+ SAP SuccessFactors repositories",
                "Makes upgrades 10x faster",
              ]}
              productLink="https://www.sap.com/products/hcm.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brandedLandingPage}
              isBlog={false}
              company="Anduin Transactions"
              title="Branded Landing Page"
              description={[
                "Lets general partners build fully customizable pages for their brand, funds and LP-specific content",
                "Page management dashboard, granular LP access control, custom domains and shareable links",
                "Pages encoded with Protobuf and stored securely on Amazon S3",
              ]}
              productLink="https://anduintransact.com/solutions/anduin-engagement-hub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={investorDataManagement}
              isBlog={false}
              company="Anduin Transactions"
              title="Investor Data Management"
              description={[
                "Centralizes investor data to streamline subscriptions, compliance checks and post-close work",
                "Owned Contact Management (contacts, contact matrices, investment entities) and Document Request workflows",
                "Built complex permission and relationship logic; optimized dashboards for scale and UX",
              ]}
              productLink="https://anduintransact.com/solutions/anduin-investor-data-management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={investorAccess}
              isBlog={false}
              company="Anduin Transactions"
              title="Investor Access"
              description={[
                "Lets LPs manage profiles (500+ data points), documents and investments",
                "Streamlined workflows for fund subscriptions and requested documents",
                "Automatic data synchronization",
              ]}
              productLink="https://anduintransact.com/solutions/anduin-investor-access"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={llpHealth}
              isBlog={false}
              award="Winner · NFQ Hackathon 2021"
              title="LLP Health"
              description={[
                "AI-powered Android fitness app built during the COVID-19 pandemic",
                "Automatically counts reps for push-ups, jumping jacks and squats",
                "Tracking, reminders and social sharing",
              ]}
              ghLink="https://github.com/tronglocbrvt/HackathonNFQ"
              demoLink="https://www.youtube.com/watch?v=TK2NjcmVjxs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartAnnotation}
              isBlog={false}
              title="Intelligent Annotation System With Semi Automatic Assistance"
              description={[
                "Deep-learning-assisted, semi-automatic object labeling",
                "Human-in-the-loop training that keeps improving model accuracy, with distributed computation on user-shared resources",
                "React, Go and Python microservices using gRPC, Docker and Kubernetes",
                "Scored 10/10 in the thesis defense",
              ]}
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
              description={[
                "Real-time online multiplayer maze racing and shooting game",
                "Python client and server",
                "Server-side action broadcasting and client-side event queues keep gameplay in sync",
              ]}
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
              description={[
                "Content-aware image resizing optimized on GPU",
                "Uses GMEM, CMEM, SMEM, kernel pipelining and a meet-in-the-middle trick",
                "~2× faster than the baseline parallel version",
              ]}
              ghLink="https://github.com/ktncktnc/PP-FinalProject/tree/master"
            />
          </Col>




       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
