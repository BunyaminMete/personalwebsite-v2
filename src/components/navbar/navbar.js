import React, { useEffect } from 'react';
import './home.css';

const NavBar = ({ children }) => {
  const [clicked, setClicked] = React.useState(true);

  useEffect(() => {
    if (document.documentElement.clientWidth > 425) {
      setClicked(true);
    } else {
      setClicked(false);
    }
    console.log('useeffect');
  }, []);

  const dropdownContentShow = () => {
    setClicked(!clicked);
    console.log(clicked);
  };

  return (
    <>
      <div className="bg-homepage">
        <div className="Navbar">
          <div className="linkarea">
            {/* leftside */}
            <ul>
              <li className="rightlist">
                <img src="https://media.slid.es/uploads/118447/images/2991881/reactpurple.png" alt="logo"></img>
              </li>
              {/* rightside */}
              <li className="leftlogo">
                <button onClick={dropdownContentShow} className="leftlogo">
                  <img src="https://www.bogazicicamfilmi.com/images/mobil.png" alt="selectbar"></img>
                </button>
              </li>
            </ul>
            {clicked && (
              <ul>
                <li className="list1 lists">
                  <a className="profile" href="/introduce">
                    Profile
                  </a>
                </li>
                <li className="list2 lists">
                  <a
                    className="about"
                    href="#About"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Projects
                  </a>
                </li>
                <li className="list3 lists">
                  <a className="home" href="#Home">
                    Home
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default NavBar;
