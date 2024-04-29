import React from 'react';
import { useState } from 'react';


export default function Nav() {
  const [showButton, setShowButton] = useState(false);

  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
      <nav className='nav-bar' id='home'>
        <ul>
          <button>
          <li>
            <a href="#about">About</a>
          </li></button>
          <button><li>
            <a href="#resume">Services</a>
          </li></button>
          <button><li>
            <a href="#contact">Contact</a>
          </li></button>
        </ul>
        {showButton && (
          <svg onClick={scrollToTop} id="scrollToTopBtn" title="Go to top" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path></svg>
      )}
      </nav>
    );
}
