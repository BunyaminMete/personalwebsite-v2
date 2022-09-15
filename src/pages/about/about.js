import './style.css';
import React from 'react';

const About = () => {
  const sliderEffect = React.useRef();

  window.onscroll = function () {
    sliderFunction();
  };

  const sliderFunction = () => {
    if (document.documentElement.scrollTop > 1000) {
      sliderEffect.current.id = 'sliderAbout';
    } else {
      sliderEffect.current.id = 'About';
    }
  };

  return (
    <>
      <img
        className="bg2"
        alt="bg2"
        src="https://img2.goodfon.com/original/1920x1080/5/a4/tekstura-fon-cvet-chernyy.jpg"
      ></img>

      <div>
        <div ref={sliderEffect} id="About">
          Currently I'm studying for Software Enginerring at <br /> Istinye University .
          <br /> I did some projects by using React. <br />
          <br /> Here are the projects that I did.
          <div className="imagecontainer">
            <div className="projects">
              <a href="https://github.com/BunyaminMete/Daily-App-React">
                <img
                  className="images"
                  alt="project1"
                  src="https://user-images.githubusercontent.com/108274379/184619867-ddf8890d-5e2f-4e48-96ff-c59cb25de322.png"
                ></img>
              </a>
              <span>
                <br />
                Project 1
              </span>
            </div>
            <div className="projects">
              <a href="https://bunyaminmete.github.io/Highlighter-Project-For-Hubstudio">
                <img
                  className="images"
                  alt="project2"
                  src="https://user-images.githubusercontent.com/108274379/186110185-ef2ccc9f-f9f3-4670-b01b-9be518097faa.png"
                ></img>
              </a>
              <span>
                <br />
                Project 2
              </span>
            </div>

            <div className="projects">
              <a href="https://bunyaminmete.github.io/Music-Player/">
                <img
                  className="images"
                  alt="project3"
                  src="https://user-images.githubusercontent.com/108274379/188332065-a27b8265-7775-41e1-88e5-3374d5e9a771.png"
                ></img>
              </a>
              <span>
                <br />
                Project 3
              </span>
            </div>

            <div className="projects">
              <a href="https://bunyaminmete.github.io/pokeAPI/">
                <img
                  className="images"
                  alt="project3"
                  src="https://user-images.githubusercontent.com/108274379/188894030-525c0f14-a85e-4afe-9860-88159919efd6.png"
                ></img>
              </a>
              <span>
                <br />
                Project 4
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
