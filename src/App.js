import './App.css';
import { React, useState, useEffect } from 'react';
import { Navbar, Dashboard, Footer } from './components';
import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

import axios from 'axios';


// Maybe do a routing here for the demo newsfeed so you can switch between the two
// And a login screen?

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3002/users')
      .then(response => {
        console.log('promise fulfilled')
        setUsers(response.data)
      })
  }, [])
  console.log('render', users.length, 'users')

  return (
    <>  
      <Navbar />
      <div className="mx-60 my-5">

        {users.map(user => 
          <div key={user.id}>
            {user.name}
          </div>
        )}

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
