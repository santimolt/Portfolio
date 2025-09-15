import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAccessibleIcon,
  faCss3,
  faFigma,
  faGit,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faNodeJs,
  faPython,
  faReact,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons";

type skill = {
  label: string;
  icon: React.ReactElement;
};

const customTSIcon: IconDefinition = {
  prefix: "fab",
  iconName: "tv",
  icon: [
    32,
    32,
    [],
    "f0c8",
    "M0 16v16h32v-32h-32zM25.786 14.724c0.813 0.203 1.432 0.568 2.005 1.156 0.292 0.312 0.729 0.885 0.766 1.026 0.010 0.042-1.38 0.974-2.224 1.495-0.031 0.021-0.156-0.109-0.292-0.313-0.411-0.599-0.844-0.859-1.505-0.906-0.969-0.063-1.594 0.443-1.589 1.292-0.005 0.208 0.042 0.417 0.135 0.599 0.214 0.443 0.615 0.708 1.854 1.245 2.292 0.984 3.271 1.635 3.88 2.557 0.682 1.031 0.833 2.677 0.375 3.906-0.51 1.328-1.771 2.234-3.542 2.531-0.547 0.099-1.849 0.083-2.438-0.026-1.286-0.229-2.505-0.865-3.255-1.698-0.297-0.323-0.87-1.172-0.833-1.229 0.016-0.021 0.146-0.104 0.292-0.188s0.682-0.396 1.188-0.688l0.922-0.536 0.193 0.286c0.271 0.411 0.859 0.974 1.214 1.161 1.021 0.542 2.422 0.464 3.115-0.156 0.281-0.234 0.438-0.594 0.417-0.958 0-0.37-0.047-0.536-0.24-0.813-0.25-0.354-0.755-0.656-2.198-1.281-1.651-0.714-2.365-1.151-3.010-1.854-0.406-0.464-0.708-1.010-0.88-1.599-0.12-0.453-0.151-1.589-0.057-2.042 0.339-1.599 1.547-2.708 3.281-3.036 0.563-0.109 1.875-0.068 2.427 0.068zM18.276 16.063l0.010 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-0.714 0.016-1.307 0.036-1.323 0.016-0.021 2.547-0.031 5.62-0.026l5.594 0.016z",
  ],
};

const Skills: React.FC = () => {
  const skills: skill[] = [
    { label: "React", icon: <FontAwesomeIcon icon={faReact} /> },
    { label: "TypeScript", icon: <FontAwesomeIcon icon={customTSIcon} /> },
    { label: "Node.js", icon: <FontAwesomeIcon icon={faNodeJs} /> },
    { label: "HTML", icon: <FontAwesomeIcon icon={faHtml5} /> },
    { label: "CSS", icon: <FontAwesomeIcon icon={faCss3} /> },
    { label: "JavaScript", icon: <FontAwesomeIcon icon={faJs} /> },
    { label: "Python", icon: <FontAwesomeIcon icon={faPython} /> },
    { label: "Java", icon: <FontAwesomeIcon icon={faJava} /> },
    { label: "Figma", icon: <FontAwesomeIcon icon={faFigma} /> },
    { label: "Git", icon: <FontAwesomeIcon icon={faGit} /> },
    { label: "Github", icon: <FontAwesomeIcon icon={faGithub} /> },
    {
      label: "Agile methodologies",
      icon: <FontAwesomeIcon icon={faArrowsSpin} />,
    },
    {
      label: "Accessibility",
      icon: <FontAwesomeIcon icon={faAccessibleIcon} />,
    },
  ];
  return (
    <section id="skills">
      <h4>Skills</h4>
      <ul>
        {skills.map((skill: skill, index: number) => (
          <li key={index}>
            <span>{skill.icon}</span>
            <span>{skill.label}</span>
          </li>
        ))}
        <li>Much more!</li>
      </ul>
    </section>
  );
};

export default Skills;
