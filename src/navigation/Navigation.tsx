import React from "react";
import LinkedinLogo from "../assets/LinkedinLogo.tsx";
import GithubLogo from "../assets/GithubLogo.tsx";
import Envelope from "../assets/Envelope.tsx";
import CircleHalf from "../assets/CircleHalf.tsx";

import { getRandomPair } from "../helpers/randomPair";
import { hexToRgb } from "../helpers/hexToRgb.ts";

import "./Navigation.css";

const Navigation: React.FC = () => {
  const handleThemeChange = () => {
    const randomPair = getRandomPair();
    document.documentElement.style.setProperty(
      "--primary-color",
      `${hexToRgb(randomPair[0]).toString()}`
    );
    document.documentElement.style.setProperty(
      "--background-color",
      `${hexToRgb(randomPair[1]).toString()}`
    );
  };

  return (
    <nav className="header-nav">
      <ul>
        <li>
          <a href="https://github.com/santimol" title="My Github page">
            <GithubLogo />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/santiago-moltedo-a731ab163/"
            title="My Linkedin page"
          >
            <LinkedinLogo />
          </a>
        </li>
        <li>
          <a href="mailto:santimolt@gmail.com" title="Email me">
            <Envelope />
          </a>
        </li>
      </ul>
      <button className="theme-manager" onClick={handleThemeChange}>
        Change theme <CircleHalf />
      </button>
    </nav>
  );
};

export default Navigation;
