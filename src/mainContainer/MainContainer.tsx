import React, { ReactNode } from "react";
import "./MainContainer.css";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default MainContainer;
