import './App.css';
import React from 'react';
import { Navbar, Dashboard, Footer } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'


// Maybe do a routing here for the demo newsfeed so you can switch between the two
// And a login screen?

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="mx-60 my-5">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
