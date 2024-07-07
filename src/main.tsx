import React from "react";
import ReactDOM from "react-dom/client";
import MainContainer from "./mainContainer/MainContainer.tsx";
import Header from "./header/Header.tsx";
import Experience from "./experience/Experience.tsx";
import Skills from "./skills/Skills.tsx";
import Navigation from "./navigation/Navigation.tsx";
import CurriculumFooter from "./contact/CurriculumFooter.tsx";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navigation />
    <MainContainer>
      <Header />
      <Experience />
      <Skills />
      {/* <Projects /> */}
      <CurriculumFooter />
    </MainContainer>
  </React.StrictMode>
);
