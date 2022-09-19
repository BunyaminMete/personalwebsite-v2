import React from 'react';
import './style.css';

const DownArrow = ({ id }) => {
  console.log(window.innerHeight);
  const [windowHeight] = React.useState(window.innerHeight);
  // const [which, setWhich] = React.useState(whichOne);

  const btn = React.useRef();

  return (
    <div className="arrow-div">
      <button
        ref={btn}
        id={id}
        type="button"
        className="downarrow"
        onClick={() => {
          window.scrollTo(0, `${windowHeight}` * btn.current.id);
          console.log(btn.current.id);
        }}
      >
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/down-arrow-1767499-1502567.png"
          alt="downarrow-logo"
        ></img>
      </button>
    </div>
  );
};

export default DownArrow;
