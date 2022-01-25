import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatarImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.7em" }}>
              LET ME <span className="orange"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a <b className="orange"> young programmer </b> with great
              knowledge in many programming languages like{" "}
              <i>
                <b className="orange"> C#, Java, PHP.</b>
              </i>
              <br />
              <br />
              Possess <b className="orange"> strong leadership </b> and{" "}
              <b className="orange">communication skills </b> with fluency in
              English. <br />
              In terms of results and objectives, I am{" "}
              <b className="orange"> enthusiastic</b> and{" "}
              <b className="orange"> work with determination and conviction.</b>
              <br />
              <br /> I have a proactive attitude and find positive ways to
              stimulate and engage with people.
              <b className="orange">Keen to pursue a career as a programmer.</b>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="orange">Node.js</b> and
              <i>
                <b className="orange">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="orange"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={avatarImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="orange">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/GenatHadri"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/genat-hadri-6b69261ba/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
