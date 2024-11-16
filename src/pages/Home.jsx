import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import TechCard from "../components/TechCard";
import { backendTech, devTools, frontendTech, languages } from "../helpers/TechDetails";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I am Okkar Aung.</h2>

        <div className="prompt">
          <p>
            A Full-Stack Software Developer passionate about creating responsive
            web designs, user-friendly web experiences and API Development.
          </p>

          <div className="hero-icons">
            <div>
              <a
                href="https://www.linkedin.com/in/okkar-novack-88362b22a/"
                target="blank"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/Okkar25?tab=repositories"
                target="blank"
              >
                <GitHubIcon />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox" target="blank">
                <EmailIcon />
              </a>
            </div>
            <a
              href="../../Okkar_Aung_CV_2024.pdf"
              download="OkkarAung_CV_2024.pdf"
            >
              <button className="cvBtn">Download CV</button>
            </a>
          </div>
        </div>
      </div>

      <div className="skills">
        <h1>Skills</h1>

        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              <div className="techCard" id="">
                {frontendTech.map((el) => (
                  <TechCard {...el} key={el.id} />
                ))}
              </div>
            </span>
          </li>

          <li className="item">
            <h2>Back-End</h2>
            <span>
              <div className="techCard" id="">
                {backendTech.map((el) => (
                  <TechCard {...el} key={el.id} />
                ))}
              </div>
            </span>
          </li>

          <li className="item">
            <h2>Tools</h2>
            <span>
              <div className="techCard" id="">
                {devTools.map((el) => (
                  <TechCard {...el} key={el.id} />
                ))}
              </div>
            </span>
          </li>

          <li className="item">
            <h2>Languages</h2>
            <span>
              <div className="techCard" id="">
                {languages.map((el) => (
                  <TechCard {...el} key={el.id} />
                ))}
              </div>
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
