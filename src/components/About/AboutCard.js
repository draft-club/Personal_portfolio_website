import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, 
            Amine Here . A passionate <span className="purple"> Data Scientist .</span>
            <br />
            Today , consulting as a Lead Data Scientist and Team Lead at <span className="purple"> DXC Technologies imternational </span> 
            ,Morocco.
            <br />
                      I hold a Master's degree in Econometrics and Applied Statistics,
                      and an MBA specializing in quantitative Finance from the International University of Japan.
         
            <br />
            <br />
            In my spare time , I'm usually 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Cultures
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven by a passion to create meaningful impact!"{" "}
          </p>
          <footer className="blockquote-footer">Amine.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
