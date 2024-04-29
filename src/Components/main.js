import React from "react";
import Logo from "./images/Boosted Enterprises.png";
import "../App.css"; // Import CSS file for styling

export default function Main() {
  return (
    <>
      <div className="content">
        <div className="intro">
          <img src={Logo} alt="placeholder" /> 
        </div>
      </div>
    </>
  );
}
