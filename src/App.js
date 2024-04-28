import React from "react";
import "./App.css";
import Main from "./Components/main.js";
import About from "./Components/about.js";
import Resume from "./Components/resume.js";
import Contact from "./Components/contact.js";
import Footer from "./Components/footer.js";

export default function App() {
  return (
    <div className="App">
      <>
        <div className="main">
          <Main />
          <div className="about">
            <About />
            <div className="resume">
              <Resume />
            </div>
            <div className="contact">
              <Contact />
            </div>
            <div className="footer">
              <Footer />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}