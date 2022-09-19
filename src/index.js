import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import RoutingSection from './router/routing';
import './style/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <RoutingSection />
    </BrowserRouter>
  </>,
);
