import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/header/home';
import './style/main.css';
import SayHello from './pages/home/home';
import About from './pages/about/about';
import { BrowserRouter } from 'react-router-dom';

const basename = document.querySelector('base')?.getAttribute('href') ?? '/'    


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={basename}>
    <HomePage />
    <SayHello />
    <About />
    </BrowserRouter>
);
