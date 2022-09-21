import React from 'react';
import HomePage from '../../components/navbar/navbar';
import './style.css';

export default function Introduce() {
  return (
    <>
      <HomePage />
      <div className="main-container">
        <div className="container-group">
          <div className="container" id="c1">
            Will be updating soon.
          </div>
          <div className="container" id="c2">
            Will be updating soon.
          </div>
          <div className="container" id="c3">
            Will be updating soon.
          </div>
          <div className="container" id="c4">
            Will be updating soon.
          </div>
          <div className="container" id="c5">
            Will be updating soon.
          </div>
        </div>
      </div>
    </>
  );
}
