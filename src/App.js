import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import React from "react";
import Slider from "react-slick";


function App() {
  return (
    <>
      <Header/>
          <Outlet />
    </>
  );
}

export default App;
