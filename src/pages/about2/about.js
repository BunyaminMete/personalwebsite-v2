import './style.css';
import dailyapppng from '../../assets/hub.png';
import React from 'react';

const About = ({ img, description, url }) => {
  const text = React.useRef();

  return (
    <>
      <div id="About" className="bg-about">
        <div className="rel2">
          <div
            onMouseEnter={() => {
              window.innerWidth > 1024 && (text.current.className = 'p1-text-after');
            }}
            onMouseLeave={() => {
              text.current.className = 'p1-text';
            }}
            className="projects"
          >
            {/* for mobile */}
            <img className="p1" alt="project1" src={dailyapppng}></img>
            <div className="card-container">
              <div onMouseEnter={() => (text.current.style.display = 'block')} ref={text} className="p1-text">
                Daily App project is the first long-time project that I did. I learned informations such as React state
                usage, routing...
                <br /> <br />
                <button className="projectbutton" type="button">
                  <a alt="project1" href="https://dailyappwithreact-gu51hocr7-bunyaminmete.vercel.app/login">
                    PROJECT
                  </a>
                </button>
              </div>
            </div>
            {/* for mobile */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
