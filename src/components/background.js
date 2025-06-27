// background.js
import React from "react";
import "./background.css"; // Add your background container styles here

const BackgroundContainer = ({ children }) => {
  return <div className="background">{children}</div>;
};

export default BackgroundContainer;
