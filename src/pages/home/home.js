import React from 'react';
import './home.css';
import NavBar from '../../components/navbar/navbar';

const HomePage = () => {
  return (
    <>
      <NavBar>
        <div id="Home" className="rel">
          <div className="name-introduce">
            Hello, I'm Bunyamin <br /> <span>Front-End Developer Intern</span>
          </div>
        </div>
      </NavBar>
    </>
  );
};

export default HomePage;
