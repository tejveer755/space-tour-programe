import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Destinations from './components/Destinations';
import Crew from './components/Crew';
import Technology from './components/Technology';

import homeDesktop from '../public/assets/background//background-home-desktop.jpg';
import homeTablet from '../public/assets/background/background-home-tablet.jpg';
import homeMobile from '../public/assets/background/background-home-mobile.jpg';

import destinationDesktop from '../public/assets/background/background-destination-desktop.jpg';
import destinationTablet from '../public/assets/background/background-destination-tablet.jpg';
import destinationMobile from '../public/assets/background/background-destination-mobile.jpg';

import crewDesktop from '../public/assets/background/background-crew-desktop.jpg';
import crewTablet from '../public/assets/background/background-crew-tablet.jpg';
import crewMobile from '../public/assets/background/background-crew-mobile.jpg';

import technologyDesktop from '../public/assets/background/background-technology-desktop.jpg';
import technologyTablet from '../public/assets/background/background-technology-tablet.jpg';
import technologyMobile from '../public/assets/background/background-technology-mobile.jpg';

function App() {
  const [bgImg, setBgImg] = useState({
    backgroundImage: `url(${homeDesktop})`,
  });

  const location = useLocation();

  useEffect(() => {
    function updateBgImg() {
      const width = window.innerWidth;

      switch (location.pathname) {
        case '/':
          if (width >= 1024) {
            setBgImg({ backgroundImage: `url(${homeDesktop})` });
          } else if (width >= 768) {
            setBgImg({ backgroundImage: `url(${homeTablet})` });
          } else {
            setBgImg({ backgroundImage: `url(${homeMobile})` });
          }
          break;
        case '/destination':
          if (width >= 1024) {
            setBgImg({ backgroundImage: `url(${destinationDesktop})` });
          } else if (width >= 768) {
            setBgImg({ backgroundImage: `url(${destinationTablet})` });
          } else {
            setBgImg({ backgroundImage: `url(${destinationMobile})` });
          }
          break;
        case '/crew':
          if (width >= 1024) {
            setBgImg({ backgroundImage: `url(${crewDesktop})` });
          } else if (width >= 768) {
            setBgImg({ backgroundImage: `url(${crewTablet})` });
          } else {
            setBgImg({ backgroundImage: `url(${crewMobile})` });
          }
          break;
        case '/technology':
          if (width >= 1024) {
            setBgImg({ backgroundImage: `url(${technologyDesktop})` });
          } else if (width >= 768) {
            setBgImg({ backgroundImage: `url(${technologyTablet})` });
          } else {
            setBgImg({ backgroundImage: `url(${technologyMobile})` });
          }
          break;
        default:
          if (width >= 1024) {
            setBgImg({ backgroundImage: `url(${homeDesktop})` });
          } else if (width >= 768) {
            setBgImg({ backgroundImage: `url(${homeTablet})` });
          } else {
            setBgImg({ backgroundImage: `url(${homeMobile})` });
          }
      }
    }

    updateBgImg();

    window.addEventListener('resize', updateBgImg);
    return () => window.removeEventListener('resize', updateBgImg);
  }, [location.pathname]);

  return (
    <main style={bgImg} className="main-content">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destinations />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </main>
  );
}

export default App;
