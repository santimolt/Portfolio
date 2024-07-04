import React from 'react';

const Experience: React.FC = () => {
    const experiences: { title: string, company: string, startYear: number, startMonth: string,  endYear: any, endMonth: string }[] = [
        {
            title: 'UX-UI Designer and Front End developer',
            company: 'Gire S.A.',
            startMonth: 'Jan',
            startYear: 2023,
            endYear: "",
            endMonth: 'now'
        },
        {
            title: 'Front End developer',
            company: 'Gire S.A.',
            startYear: 2022,
            startMonth: 'May',
            endYear: 2022,
            endMonth: 'Dec'
        },
        {
            title: 'Back End intern',
            company: 'Gire S.A.',
            startYear: 2021,
            startMonth: 'Jun',
            endYear: 2021,
            endMonth: 'Dec'
        },
    ];
    return (
        <section>
            <h3>Experience</h3>
            <ul>
                {experiences.map((experience, index) => (
                    <li key={index}>
                        <h3>{experience.title}</h3>
                        <p>{experience.company}</p>
                        <p>{experience.startMonth}</p>
                        <p>{experience.startYear}</p>
                        <p>{experience.endMonth}</p>
                        <p>{experience.endYear}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Experience;