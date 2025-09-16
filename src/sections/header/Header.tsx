import React from "react";
import { calculateAge } from "../../helpers/calculateAge";
import { useTranslation } from "react-i18next";
import Selfie from "../../assets/selfie.jpg";
import "./Header.css";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const dateOfBirth = new Date(2003, 5, 22);

  return (
    <header>
      <img src={Selfie} alt="Santiago's selfie" />
      <h1>Santiago Moltedo</h1>
      <h2>{t("hero.title")}</h2>
      <p>
        {t("hero.introduction", { age: calculateAge(dateOfBirth) })}
        <br />
        {t("hero.currentlyWorkingOn")}
      </p>
    </header>
  );
};

export default Header;
