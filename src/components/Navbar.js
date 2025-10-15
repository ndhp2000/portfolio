import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineThunderbolt,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { MdArticle } from "react-icons/md";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => updateExpanded(false)}
                className={location.pathname === "/" ? "active-nav-link" : ""}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                className={location.pathname === "/project" ? "active-nav-link" : ""}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/publication"
                onClick={() => updateExpanded(false)}
                className={location.pathname === "/publication" ? "active-nav-link" : ""}
              >
                <MdArticle style={{ marginBottom: "2px" }} /> Publications
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/activities"
                onClick={() => updateExpanded(false)}
                className={location.pathname === "/activities" ? "active-nav-link" : ""}
              >
                <AiOutlineThunderbolt style={{ marginBottom: "2px" }} /> Activities
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                className={location.pathname === "/resume" ? "active-nav-link" : ""}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
