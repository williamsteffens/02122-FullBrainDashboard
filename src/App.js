import './App.css';
import { React, useState, useEffect } from 'react';
import { Navbar, Dashboard, Footer } from './components';
import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

import userService from './services/users';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService
      .getAll()
      .then(initialUsers => {
        setUsers(initialUsers)
      })
  }, [])

  return (
    <>  
      <Navbar />
      <div className="my-5">
        <Routes>
          <Route path="/" element={<Dashboard users={users} />} />
          <Route path="dashboard/*" element={<Dashboard users={users} />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
