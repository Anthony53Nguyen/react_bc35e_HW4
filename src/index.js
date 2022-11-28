import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeTemplate from './Template/HomeTemplate';
import Home from './BaiTapQLSV/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (

  <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<HomeTemplate />}>

        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='*' element={<Navigate to="/" />} />
       
      </Route>
    </Routes>
  </BrowserRouter>

)

