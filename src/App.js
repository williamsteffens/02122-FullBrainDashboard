import './App.css';
import React from 'react';
import { Navbar, Dashboard, Footer } from './components';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Footer />
    </>
    );
}

export default App;
