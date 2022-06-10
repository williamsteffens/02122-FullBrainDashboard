import './App.css';
import { Navbar, Dashboard, Footer } from './components';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'


// Maybe do a routing here for the demo newsfeed so you can switch between the two
// And a login screen?

const App = () => {
  return (
    <>
      <Navbar />
      <div className="mx-60 my-5">
        <Dashboard />
        <Footer />
      </div>
      </>
    );
}

export default App;
