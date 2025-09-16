import React from "react";
import LinkedinLogo from "../../assets/LinkedinLogo.tsx";
import GithubLogo from "../../assets/GithubLogo.tsx";
import Envelope from "../../assets/Envelope.tsx";
import CircleHalf from "../../assets/CircleHalf.tsx";

import { getRandomPair } from "../../helpers/randomPair.ts";
import { hexToRgb } from "../../helpers/hexToRgb.ts";
import { useTranslation } from "react-i18next";

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

  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
    document.documentElement.lang = i18n.language;
  };

  return (
    <nav className="header-nav">
      <ul>
        <li>
          <a href="https://github.com/santimol" title={t("navbar.githubAlt")}>
            <GithubLogo />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/santiago-moltedo-a731ab163/"
            title={t("navbar.linkedInAlt")}
          >
            <LinkedinLogo />
          </a>
        </li>
        <li>
          <a href="mailto:santimolt@gmail.com" title={t("navbar.emailMeAlt")}>
            <Envelope />
          </a>
        </li>
      </ul>
      <div className="navbar-inputs">
        <select
          name="lang"
          id="lang-select"
          onChange={handleChange}
          value={i18n.language}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
        <button className="theme-manager" onClick={handleThemeChange}>
          {t("navbar.themeButtonLabel")} <CircleHalf />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
