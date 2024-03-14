import React from "react";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  SectionMain,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <SectionMain className="SectionMain">
          <h2>About Me</h2>
          <div className="BigCard">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
            </ScrollAnimation>
            <div className="AboutBio">
              <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                Hello! My name is <strong>Mukhtor Makhkamov</strong>. I'm a
                Junior <b>React</b> Developer with 1.5 years of hands-on
                experience. I build user-friendly web apps using JavaScript,
                React, and various front-end tools. I'm excited to bring my
                skills to a dynamic team, where I can learn and contribute to
                innovative projects. I thrive in fast-paced environments, love
                learning new tech, and enjoy collaborating to solve challenges
                creatively.
              </ScrollAnimation>

              <br />
              <br />

              <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                I have become confident using the following technologies:
              </ScrollAnimation>

              <br />
              <br />

              <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <Technologies>
                  <Tech className="tech">
                    <TechImg src="./js.png" alt="js" />
                    <TechName>JavaScript</TechName>
                  </Tech>
                  <Tech className="tech">
                    <TechImg src="./typescript.png" alt="typescript" />
                    <TechName>Typescript</TechName>
                  </Tech>
                  <Tech className="tech">
                    <TechImg src="./react.png" alt="react" />
                    <TechName>React</TechName>
                  </Tech>
                  <Tech className="tech">
                    <TechImg src="./nextjs.png" alt="nextjs" />
                    <TechName>Next.js</TechName>
                  </Tech>
                  <Tech className="tech">
                    <TechImg src="./html.png" alt="html" />
                    <TechName>HTML</TechName>
                  </Tech>
                  <Tech className="tech">
                    <TechImg src="./css.png" alt="css" />
                    <TechName>CSS</TechName>
                  </Tech>
                  <Tech className="tech">
                    <TechImg src="./git.png" alt="git" />
                    <TechName>Git</TechName>
                  </Tech>
                  <Tech className="tech">
                    <TechImg src="./github.png" alt="github" />
                    <TechName>Github</TechName>
                  </Tech>
                  <Tech className="tech">
                    <TechImg src="./node-js.png" alt="nodejs" />
                    <TechName>Node.js</TechName>
                  </Tech>
                  <Tech className="tech">
                    <TechImg src="./vite.png" alt="vite" />
                    <TechName>Vite</TechName>
                  </Tech>
                  <Tech className="tech">
                    <TechImg src="./sass.png" alt="sass" />
                    <TechName>SASS</TechName>
                  </Tech>
                  <Tech className="tech">
                    <TechImg src="./npm.png" alt="npm" />
                    <TechName>NPM</TechName>
                  </Tech>
                  <Tech className="tech">
                    <TechImg src="./figma.png" alt="figma" />
                    <TechName>Figma</TechName>
                  </Tech>
                  <Tech className="tech">
                    <TechImg src="./bootstrap.png" alt="bootstrap" />
                    <TechName>Bootstrap</TechName>
                  </Tech>
                </Technologies>
              </ScrollAnimation>
            </div>
          </div>
        </SectionMain>
      </div>
    </ContactWrapper>
  );
}

export default About;
