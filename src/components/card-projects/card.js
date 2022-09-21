import './style.css';
import React, { useEffect } from 'react';

const CardGenerator = ({ image, description, url, desktopimage }) => {
  const text = React.useRef();
  const projectContainer = React.useRef();
  const buttonVisibility = React.useRef();

  useEffect(() => {
    projectContainer.current.style.backgroundImage = `url(${desktopimage})`;
  });

  return (
    <>
      <div id="About" className="bg-about">
        <div className="rel2">
          <div
            onMouseEnter={() => {
              window.innerWidth > 1024 &&
                (text.current.className = 'p1-text-after') &&
                (projectContainer.current.className = 'projectsHover') &&
                (buttonVisibility.current.style.opacity = 1);
            }}
            className="projects"
            ref={projectContainer}
          >
            <img className="p1" alt="project1" src={image}></img>
            <div className="card-container">
              <div ref={text} className="p1-text">
                {description}
                <br /> <br />
                <button className="projectbutton" type="button" ref={buttonVisibility}>
                  <a alt="project1" href={url}>
                    <b>PROJECT</b>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardGenerator;
