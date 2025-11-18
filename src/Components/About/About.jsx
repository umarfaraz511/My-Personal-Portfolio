import React from "react";
import "./About.css";
import img from "../../assets/profile1.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      {/* Title Section */}
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      {/* Main About Content */}
      <div className="about-section">
        <div className="about-left">
          <img src={img} alt="Profile" className="about-profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a Frontend Developer who loves building fast, attractive, and
              easy-to-use websites with React, JavaScript, HTML, and CSS.
            </p>
            <p>
              I also enjoy lead generation, finding new opportunities, and
              helping businesses grow by connecting with the right audiences.
            </p>
          </div>

          {/* Skills */}
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML</p>
              <hr style={{ width: "90%" }} />
            </div>

            <div className="about-skill">
              <p>CSS</p>
              <hr style={{ width: "80%" }} />
            </div>

            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section (bottom) */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Years of Experience</p>
        </div>

        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>

        <div className="about-achievement">
          <h1>5+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
