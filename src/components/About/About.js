import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="https://raw.githubusercontent.com/aadhil2002/portfolio-app/d55b66855383069246063744d10ca7e1bbf7d54e/public/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <br />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! I'm <strong>Aadhil Muhammad Abou</strong> , a passionate computer scientist specializing in Artificial Intelligence and Web Development. Currently pursuing my M.Sc. in Computer Science with a focus on AI at Cochin University of Science & Technology, I thrive on applying cutting-edge technologies to solve real-world challenges.
            </ScrollAnimation>

            <br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            With a solid foundation in various programming languages including Python, C/C++, and Java, I excel in both backend and frontend development. My expertise spans frameworks such as Flask, Django, and ReactJS, allowing me to create robust and dynamic web applications.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
             In the realm of Artificial Intelligence, I have hands-on experience with Keras, TensorFlow, and PyTorch, enabling me to develop sophisticated machine learning models. I recently led a team at LegalGPT - IBM, where we leveraged IBM WatsonX and IBM Cloud to build an AI-powered legal case similarity search system. This initiative significantly enhanced legal research efficiency by automating case brief generation and citation analysis.
             </ScrollAnimation>
             <br />
             <ScrollAnimation animateIn="fadeInLeft">
             Throughout my academic and professional journey, I have spearheaded impactful projects like the AI Based Social Interaction Trainer and StethoSense, which demonstrate my capability in utilizing advanced computer vision and machine learning techniques to solve complex problems in diverse domains.
             </ScrollAnimation>
             <br />
             <ScrollAnimation animateIn="fadeInLeft">
             I am committed to continuous learning and innovation, as evidenced by my internships in Python and Artificial Intelligence, along with my active involvement in hackathons and collaborative projects. My goal is to leverage technology to make meaningful contributions that improve efficiency, enhance user experiences, and drive innovation.
             </ScrollAnimation>    <br />

             <ScrollAnimation animateIn="fadeInLeft">
             Connect with me on GitHub and LinkedIn to explore more about my work and projects. Let's innovate together!
             </ScrollAnimation>
             <br />
             <ScrollAnimation animateIn="fadeInLeft">
             <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
