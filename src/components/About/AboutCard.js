import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillInstagram } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nguyen Dinh Hoang Phuc </span>
            from <span className="purple"> Ho Chi Minh city, Vietnam.</span>
            <br />
            <br />
            I have been working as <span className="purple">Product Software Engineer</span> at Anduin Transactions for <span className="purple">3 years</span>.            <br />
            <br />
            I graduated
            <b className="purple"> 2nd </b> (3.86/4.0 - 9.23/10)
            in the <span className="purple"> Honor Program </span> (a <span className="purple">selective track</span> for the <span className="purple">top 49</span> students) in Information Technology at the University of Science, VNU-HCMC.
            <br />
            <br />
            I achieved <span className="purple">Second Prize</span> in the National Olympiad in Informatics and a <span className="purple">Silver Medal</span> in the ICPC Asia Regional.
            <br />
            <br />
            Apart from programming, some other activities that I love to <span className="purple">dance!</span> (follow me on <a href="https://www.instagram.com/tiny__camel/?hl=en" target="_blank" rel="noreferrer" style={{ color: "#0dac62", textDecoration: "none" }}><AiFillInstagram style={{ fontSize: "1.2em", verticalAlign: "middle" }} /></a>)
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Think less, do more!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
