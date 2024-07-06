import React from "react";
import "./Skills.css";

const Skills: React.FC = () => {
  const skills: string[] = [
    "React",
    "TypeScript",
    "Node.js",
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "C",
    "Figma",
    "Git",
    "Github",
    "Agile metrologies",
    "Accessibility",
  ];
  return (
    <section id="skills">
      <h4>Skills</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
        <li>Much more!</li>
      </ul>
    </section>
  );
};

export default Skills;
