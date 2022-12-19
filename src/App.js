import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useRecoilState } from "recoil";


import './App.css';

// Components
import Nav from './components/nav/nav';
import Home from './pages/home/home';
import Security from './pages/security/security';
import Challenge from './pages/challenge/challenge';
import News from './pages/news/news';
import Faqs from './pages/faqs/faqs';
import Pizza from './pages/pizza/pizza';
import Apple from './pages/apple/apple';

import { currencyState } from './atoms/currency';

function App() {
  const [currency, setCurrency] = useRecoilState(currencyState);
  
  return (
    <div className='container'>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seguranca-mb-way" element={<Security />} />
        <Route path="/challenge-mb-way" element={<Challenge />} />
        <Route path="/novidades-mb-way" element={<News />} />
        <Route path="/faqs-mb-way" element={<Faqs />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/apple" element={<Apple />} />
      </Routes>

    </div>
  );
}

export default App;
