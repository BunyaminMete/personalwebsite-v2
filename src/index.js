import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/header/header';
import './style/main.css';
import About from './pages/about2/about';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HomePage />
    <About />
  </>,
);
