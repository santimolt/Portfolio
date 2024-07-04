import React from 'react';
import { calculateAge } from '../helpers/calculateAge';
import Navigation from './navigation/Navigation';

const Header: React.FC = () => {
    const dateOfBirth = new Date (2003, 5, 22)

    return (
        <header>
            <Navigation/>
            <h1>Santiago Moltedo</h1>
            <h2>Front-end developer and UX-UI designer.</h2>
            <p>Hi! I'm a {calculateAge(dateOfBirth)} year old student, developer and designer. I'm currently studying for my systems engineering degree, but always open to keep learning in any topic.</p>
            <p>I'm currently working with React, Figma and specially familiarized with Storybook, developing and maintaining NPM packages and Design Systems.</p>
        </header>
    );
};

export default Header;