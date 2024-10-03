import React from 'react';
import ReactDOM from 'react-dom/client';
// import './assets/styles/scss/css/index.css';
import './assets/styles/scss/index.scss'

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coffee from './pages/coffee/Coffee';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Shops from './pages/shops/Shops';
import Duties from './pages/duties/Duties';
import AboutUs from './pages/about-us/AboutUs';
import Cards from './pages/cards/Cards';
import Layout from './layout/Layout';
import CardLayout from './layout/CardLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Layout ><Home /> </Layout>  } />
     <Route path="/coffee" element={<Layout ><Coffee/> </Layout> } />
     <Route path="/menu" element={<Layout ><Menu /> </Layout> } />
     <Route path="/shops" element={<Layout > <Shops /></Layout> } />
     <Route path="/duties" element={<Layout ><Duties /> </Layout> } />
     <Route path="/about-us" element={<Layout > <AboutUs /></Layout> } />
     <Route path="/card" element={<CardLayout><Cards /></CardLayout> } />
     </Routes>
     </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
