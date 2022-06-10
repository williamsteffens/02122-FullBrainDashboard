import './App.css';
import React from 'react';
import { Navbar, BarChartComp } from './components';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Navbar />
      <BarChartComp />
      <Dashboard />
      <Footer />
    </>
    );
}

export default App;
