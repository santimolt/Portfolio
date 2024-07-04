import React from "react";
import "./Navigation.css";

const Navigation: React.FC = () => {

  return (
    <nav className="header-nav">
      <ul>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* Todo: Random theme manager */}
      <div className="theme-manager">
            <button>Random theme!</button>
      </div>
    </nav>
  );
};

export default Navigation;
