import './home.css';
const HomePage = () => {
  return (
    <>
      <img className="bg1" alt="bg1" src="https://wallpaperaccess.com/full/2562637.jpg"></img>
      <div className="Navbar">
        <div className="bmtlogo">
          <img
            className="bmt"
            alt="bünyamin mete"
            src="https://www.coolgenerator.com/Data/Textdesign/202209/49e329dde9c5db17ee2e5dcd7d7b4172.png"
          ></img>
        </div>
        <div className="linkarea">
          <ul>
            <li className="lists">
              <a className="links" href="#Home">
                Home
              </a>
            </li>
            <li className="lists">
              <a className="links" href="#About">
                About
              </a>
            </li>
            <li className="lists">
              <a className="links" href="#Profile">
                Profile
              </a>
            </li>
            <li className="lists">
              <a className="links" href="#Blog">
                Blogs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
