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
            1
          </div>
          <div className="container" id="c2">
            2
          </div>
          <div className="container" id="c3">
            3
          </div>
          <div className="container" id="c4">
            4
          </div>
          <div className="container" id="c5">
            5
          </div>
        </div>
      </div>
    </>
  );
}
