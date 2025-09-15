import React from "react";
import "./Experience.css";

const Experience: React.FC = () => {
  const experiences: {
    title: string;
    company: string;
    startYear: number;
    startMonth: string;
    endYear: any;
    endMonth: string;
  }[] = [
    {
      title: "Front End developer",
      company: "Gire S.A.",
      startMonth: "Jun",
      startYear: 2025,
      endYear: "",
      endMonth: "now",
    },
    {
      title: "UX-UI Designer and Front End developer",
      company: "Gire S.A.",
      startMonth: "Jan",
      startYear: 2023,
      endYear: "2025",
      endMonth: "Jun",
    },
    {
      title: "Front End developer",
      company: "Gire S.A.",
      startYear: 2022,
      startMonth: "May",
      endYear: 2022,
      endMonth: "Dec",
    },
    {
      title: "Back End intern",
      company: "Gire S.A.",
      startYear: 2021,
      startMonth: "Jun",
      endYear: 2021,
      endMonth: "Dec",
    },
  ];
  return (
    <section id="experience">
      <h3>Experience</h3>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index}>
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
