import React from "react";
import { BaseUrl } from "../constants";
import Perhaps from "../assets/perhaps.jpg";
import "./Curriculum.css";

const CurriculumFooter: React.FC = () => {
  return (
    <footer>
      {/* <img src={GithubLogo} alt=""/>
            <a href="https://github.com/santimol">GitHub</a>
            <img src={LinkedinLogo} alt=""/>
            <a href="https://www.linkedin.com/in/santiago-moltedo-a731ab163/">LinkedIn</a>
            <img src={Mail} alt=""/>
            <a href="mailto:santimolt@gmail.com">Mail</a> */}

      <h4>Need my CV?</h4>
      <a
        href={`${BaseUrl}Curriculum.pdf`}
        target="_blank"
        title="Download the CV"
      >
        Download it here!
        <img src={Perhaps} alt="Perhaps meme" />
      </a>
    </footer>
  );
};

export default CurriculumFooter;
