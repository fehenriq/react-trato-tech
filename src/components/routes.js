import Categoria from 'pages/Categoria';
import Home from 'pages/Home';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaPadrao from './PaginaPadrao';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path='/categoria/:nomeCategoria' element={<Categoria />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}