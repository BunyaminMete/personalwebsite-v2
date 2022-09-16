import React, { useEffect } from 'react';
import './home.css';
import projectpng from '../../assets/hub.png';
import CardGenerator from '../../components/card-projects/card';
import highlightpng from '../../assets/highlight.png';

// let count = 0;

// window.onscroll = () => {
//   currentScroolPos();
// };

// const currentScroolPos = () => {
//   if (document.documentElement.scrollTop === 90.90908813476562 && count === 0) {
//     window.scrollTo(0, document.body.scrollHeight);
//     count += 1;
//   }
//   console.log(document.documentElement.scrollTop);
// };

const HomePage = () => {
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
                  <a className="profile" href="#Profile">
                    Profile
                  </a>
                </li>
                <li className="list2 lists">
                  <a
                    className="home"
                    href="#undefined"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Home
                  </a>
                </li>
                <li className="list3 lists">
                  <a className="about" href="#About">
                    About
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="rel">
          <div className="name-introduce">
            Hello, I'm Bunyamin <br /> <span>Front-End Developer Intern</span>
          </div>
        </div>
        <div className="arrow-div">
          <button type="button" className="downarrow" onClick={() => window.scrollTo(0, 1146)}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/down-arrow-1767499-1502567.png"
              alt="downarrow-logo"
            ></img>
          </button>
        </div>
      </div>
      <CardGenerator
        description="Daily App project is the first long-time project that I did. I learned informations such as React state
                usage, routing..."
        image={projectpng}
        url="https://dailyappwithreact-gu51hocr7-bunyaminmete.vercel.app/login"
        desktopimage="https://user-images.githubusercontent.com/108274379/184619867-ddf8890d-5e2f-4e48-96ff-c59cb25de322.png"
      />
      <CardGenerator
        description="Daily App project is the first long-time project that I did. I learned informations such as React state
                usage, routing..."
        image="https://user-images.githubusercontent.com/108274379/186110176-84dd157d-5038-48f6-845e-121347d1921d.png"
        url="https://bunyaminmete.github.io/Highlighter-Project-For-Hubstudio/"
        desktopimage={highlightpng}
      />
    </>
  );
};

export default HomePage;
