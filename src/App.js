
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Games from './pages/games';
import Library from './pages/library';
import Singo from './pages/singo';
import Pawprint from './pages/Pawprint/Pawprint';
import AboutUs from './pages/Pawprint/AboutUs';
import Blog from './pages/Pawprint/Blog';
import Booking from './pages/Pawprint/Booking';
import FAQ from './pages/Pawprint/FAQ';
  
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={Home()} />
        <Route path='/games' element={<Games/>} />
        <Route path='/library' element={Library()} />
        <Route path='/singo' element={<Singo/>} />
        <Route path='/pawprint-cabin' element={<Pawprint/>}/>
        <Route path='/pawprint-cabin/about-us' element={<AboutUs/>}/>
        <Route path='/pawprint-cabin/blog' element={<Blog/>}/>
        <Route path='/pawprint-cabin/booking' element={<Booking/>}/>
        <Route path='/pawprint-cabin/FAQ' element={<FAQ/>}/>
      </Routes>
    </Router>
  );
}
  
export default App;