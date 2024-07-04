import React from 'react';

const Skills: React.FC= () => {
    const skills: string[] = ["React", "TypeScript", "Node.js", "HTML", "CSS", "JavaScript", "Python", "Java", "C++", "C", "Figma", "Git", "Github", "Agile metrologies", "Accessibility"]
    return (
        <div>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;