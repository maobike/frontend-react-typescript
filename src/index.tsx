import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './modules/shared/components/NavBar';
import Menu from './modules/shared/components/Menu';
import './styles/style.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Menu />
    </BrowserRouter>
  </React.StrictMode>
);