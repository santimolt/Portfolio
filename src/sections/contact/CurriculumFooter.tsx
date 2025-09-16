import React from "react";
import { useTranslation } from "react-i18next";
import { BaseUrl } from "../../constants";
import Perhaps from "../../assets/perhaps.jpg";
import "./Curriculum.css";

const CurriculumFooter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <h4>{t("footer.title")}</h4>
      <a
        href={`${BaseUrl}MoltedoSantiago-CV.pdf`}
        target="_blank"
        title={t("footer.buttonAlt")}
      >
        {t("footer.button")}
        <img src={Perhaps} alt="Perhaps meme" />
      </a>
    </footer>
  );
};

export default CurriculumFooter;
