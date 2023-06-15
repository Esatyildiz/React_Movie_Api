import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Tailwind.css';
import Detail from './pages/details/Detail';
import Home from './pages/home/Home';
import Footer from './static/Footer';
import Header from './static/Header';

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/:mediaType/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;