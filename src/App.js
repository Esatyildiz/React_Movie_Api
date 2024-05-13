import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Tailwind.css';
import Detail from './pages/details/Detail';
import Home from './pages/home/Home';
import Footer from './static/Footer';
import Header from './static/Header';
import Login from './pages/login';
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataApi } from './utils/api';
import { getGenres } from './store/homeSlice';


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    genresCall();
  }, [])

  // Türler
  const genresCall = async () => {
    let promires = [];

    let endpoints = ["tv", "movie"];
    let allGenres = {};

    endpoints.forEach((url) => {
      promires.push(fetchDataApi(`/genre/${url}/list`))
    })
    const data = await Promise.all(promires)
    const data1 = data[0].data;
    const data2 = data[1].data;
    const final_data = [data1, data2];

    final_data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item))
    })

    dispatch(getGenres(allGenres));
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path="/:mediaType/:id" element={<Detail />} />
      </Routes>
      {/* {!Login &&
        <Footer />
      } */}
    </BrowserRouter>
  );
};

export default App;