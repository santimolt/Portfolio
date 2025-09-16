import React from "react";
import "./Experience.css";
import { useTranslation } from "react-i18next";

type ExperienceType = {
  title: string;
  company: string;
  startYear: number;
  startMonth: string;
  endYear: any;
  endMonth: string;
};

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const experiences = t("experience.experiences", { returnObjects: true }) as {
    [key: string]: ExperienceType;
  };

  return (
    <section id="experience">
      <h3>Experience</h3>
      <ul>
        {Object.entries(experiences).map(([key, experience]) => (
          <li key={key}>
            <p>
              <b>{experience.title}</b>
            </p>
            <div className="experience-length">
              <p>{experience.company}</p>
              <p>
                {experience.startMonth} {experience.startYear} -{" "}
                {experience.endMonth} {experience.endYear}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
