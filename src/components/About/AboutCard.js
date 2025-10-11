import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nguyen Dinh Hoang Phuc </span>
            from <span className="purple"> Ho Chi Minh City, Vietnam.</span>
            <br />
            <br />
            I have been working as <span className="purple">Product Software Engineer</span> at Anduin Transactions for <span className="purple">3 years</span>.            <br />
            <br />
            I graduated
            <b className="purple"> 2nd </b>
            in the <span className="purple"> Honor Program </span> (a <span className="purple">selective track</span> for the top 60 students) in Information Technology at the University of Science, Vietnam National University Ho Chi Minh City.
            <br />
            <br />
            Apart from programming, some other activities that I love to dance!
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
