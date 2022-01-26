import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import RelaxRestaurant from "../../Assets/Projects/RelaxRestaurant.png";
import NetflixClone from "../../Assets/Projects/NetflixClone.png";
import AmazonClone from "../../Assets/Projects/AmazonClone.png";
import JobPortalVue from "../../Assets/Projects/JobPortalVue.png";
import JobPortalAsp from "../../Assets/Projects/JobPortalAsp.png";
import MrFisher from "../../Assets/Projects/MrFisher.png";
import Filma24 from "../../Assets/Projects/Filma24.png";
import FastFood from "../../Assets/Projects/FastFood.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="orange">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={RelaxRestaurant}
              title="Relax Restaurant"
              description="A Restaurant Website built with Wordpress, where you can look to the menu and book a table."
              link="https://github.com/GenatHadri/RestaurantWebsiteWP"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={NetflixClone}
              title="Netflix Clone"
              description="Netflix Website Clone, built with ReactJs and getting the data
              from an API."
              link="https://github.com/GenatHadri/Netflix-clone"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={AmazonClone}
              title="AmazonClone"
              description="Amazon Website Clone, built with ReactJs and getting the data from
              an API."
              link="https://github.com/GenatHadri/amazon"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={JobPortalVue}
              title="Job Portal Vue"
              description="  A Job Portal Website built with VueJs and MongoDB.
              An admin can post jobs and users can look at them."
              link="https://github.com/BlinSahatqija/Projekt-VueJS"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={JobPortalAsp}
              title="Job Portal Asp"
              description="A Job Portal Website built with ASP.NET Core MVC. 
              An admin can post jobs and users can look at them."
              link="https://github.com/BlinSahatqija/JobPortal"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={Filma24}
              title="Filma24"
              description="A movie website called Filma24 build with ReactJs and getting all
              data from an API.
              Movies on the first page are from the Tranding category, but you
              can choose other categories as well, only by clicking on the
              Zhanri button ."
              link="https://github.com/GenatHadri/Filma24-React"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={MrFisher}
              title="Mr Fisher Restaurant"
              description="A Restaurant Website called Mr Fisher built with HTML, CSS, JS and
              PHP. 
              What characterize this website, are the animations on it. You can
              login and contact with the fast food staff and see the client
              reviews. If you have the admin priviledge you can manage all the
              users and posts."
              link="https://github.com/BlinSahatqija/MrFisher-WebMultimedia"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={FastFood}
              title="Fast Food"
              description="A Fast Food Website built with, HTML, CSS, JS for the frontend
              site and with PHP for storing the data.
              You can login and contact with the fast food staff and see the
              client reviews. If you have the admin priviledge you can manage
              all the users and posts."
              link="https://github.com/GenatHadri/Projekti-HTML"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
