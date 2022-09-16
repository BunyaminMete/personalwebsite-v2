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
                (text.current.className = 'p1-text-after')((buttonVisibility.current.style.opacity = 1));
            }}
            onMouseLeave={() => {
              (text.current.className = 'p1-text')((buttonVisibility.current.style.opacity = 0));
            }}
            className="projects"
            ref={projectContainer}
          >
            {/* for mobile */}
            <img className="p1" alt="project1" src={image}></img>
            <div className="card-container">
              <div onMouseEnter={() => (text.current.style.display = 'block')} ref={text} className="p1-text">
                {description}
                <br /> <br />
                <button className="projectbutton" type="button" ref={buttonVisibility}>
                  <a alt="project1" href={url}>
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

export default CardGenerator;
