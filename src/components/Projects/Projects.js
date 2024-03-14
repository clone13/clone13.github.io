import React from "react";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";

const ProjectsContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 100px;

  .row {
    heigth: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1200px) {
      flex-direction: column;
    }
  }

  .card {
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 290px;
    @media (min-width: 576px) {
      width: 500px;
    }
    @media (min-width: 1200px) {
      width: 300px;
    }
    img {
      margin-bottom: 1rem;
    }
  }

  .projects-main {
    margin-top: 100px;

    h2 {
      font-size: 28px;
      color: #151418;
      font-weight: 700;
      margin-bottom: 3.5rem;
    }
  }

  .project-text {
    width: 100%;
    margin: 10px;
    font-size: 18px;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .Buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-fluid {
    width: 100%;
    height: 100%;
    max-width: 100%;
    height: auto;
  }
`;

function Projects() {
  return (
    <ProjectsContainer id="projects">
      <div className="Container">
        <div className="projects-main">
          <h2>Projects</h2>
          <div className="row">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="col-lg-4 card">
                <img
                  className="img-fluid"
                  src="/project-1.jpeg"
                  alt="alternative"
                ></img>
                <div className="project-text">
                  <b>FREE Project</b>
                  <p>HTML, CSS, SCSS</p>
                </div>
                <div className="Buttons">
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href="https://github.com/clone13/free_project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <a
                    className="btn PrimaryBtn btn-shadow"
                    href="https://clone13.github.io/free_project/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo ➜
                  </a>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="col-lg-4 card">
                <img
                  className="img-fluid"
                  src="/project-2.jpeg"
                  alt="alternative"
                ></img>
                <div className="project-text">
                  <b>Pizza Project</b>
                  <p>REACT, TYPESCRIPT</p>
                </div>
                <div className="Buttons">
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href="https://github.com/clone13/hello_pizza"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <a
                    className="btn PrimaryBtn btn-shadow"
                    href="https://clone13.github.io/hello_pizza/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo ➜
                  </a>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="col-lg-4 card">
                <img
                  className="img-fluid"
                  src="/project-3.jpeg"
                  alt="alternative"
                ></img>
                <div className="project-text">
                  <b>Portfolio Project</b>
                  <p>JavaScript, REACT</p>
                </div>
                <div className="Buttons">
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href="https://github.com/clone13/clone13.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <a
                    className="btn PrimaryBtn btn-shadow"
                    href="."
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    Demo ➜
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </ProjectsContainer>
  );
}
export default Projects;
