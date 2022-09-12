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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWQAAABRAQMAAADfFU7JAAAABlBMVEX///////9VfPVsAAAAAXRSTlMAQObYZgAAAmlJREFUSInt1M+K1DAYAPAvRpo9dBqPPYTtPkLFS8Wy9VEKC3rxUPDgHGQbKTgXYV/Ah8me5hU8CAYG9FrwMuKy8cu/mVmsrOtJpR8MJOGXP/2+ZADmmON/iZNdq/gNPcYGM7fIFI0ObWq2cTjp1ZROcPugibnaDTMzqZmEBrVqABrT4mzi1mdqWmuwaI0nbqTVjdOcTOuRbDuAT85gI/FHKH7SmTt3xVQJcO1GSjvbtZ5QOakFR0THqAv5C+3iXpYh4irqcz/8iF0fotigDKACLqN+HYZXZtxrttO4ZQ4LryuAF36YrPaVOtREoyZe5662Tkuob+r7TuMtEZM6VTd05vUpiimd6TzgByyDk6CPrb5wCwnUPilYnKQVRwBPQVKz5tBlR07bTaivIC5chMwpyFohjkETxcyXQi4z7ICtQgLc3z7UvY46Rd2AoqqgZ4/lNsFO0L0/N24SL60C0Qnx0uqa04fqQ4Idpyl89zoB9jFoDVUpxEYqpqpi6C5Rb6TLBoVwK5j70KC7sk4vpUp01w968z7BjtcyaLrXLYxVvUCd6fbroM/esUXQZEoTnZ/zN0qL9vlmUK9Sih2bWNShOjgpVAc6JsUzLlVXtf0wqNOUXkhlPx5nhJdiKxh1AfwzA71ctjUZZJ3RFX6L1fjTsYLxupUC+HoFbTN2gDpPCHZiAsaYZSaDtpf5LbRcdfaEOcP0tjEBS3DLa6Bh+cpu5d51GRNgO+6Q9g9wdNNg65fPd1t4TSC27MM07mXh7N6YKQ2HmniNfe71Piq4S/w9Or+d/Ona38bbzT7MnXR4snPMMccc/3r8ANqSyHeJyfACAAAAAElFTkSuQmCC"
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
