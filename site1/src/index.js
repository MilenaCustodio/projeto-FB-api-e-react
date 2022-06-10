import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaPrincipal from './pages/home/index.js';
import Admin from './pages/admin/index.js';
import Cadastro from './pages/cadastro/index.js';
import Geral from './pages/geral/index.js';
import Controle from './pages/controle/index.js';
import Menu from './pages/menu/index.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<PaginaPrincipal />} />
        <Route path = '/admin' element={<Admin />} />
        <Route path = '/cadastro' element={<Cadastro/>} />
        <Route path = '/geral' element={<Geral/>} />
        <Route path = '/controle' element={<Controle/>} />
        <Route path = '/menu' element={<Menu/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

