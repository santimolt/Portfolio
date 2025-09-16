import React from "react";

interface Project {
  id: number;
  name: string;
  description: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [];
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
