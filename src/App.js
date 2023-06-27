
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Games from './pages/games';
import Library from './pages/library';
import Singo from './pages/singo';
import Pawprint from './pages/Pawprint';
  
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={Home()} />
        <Route path='/games' element={<Games/>} />
        <Route path='/library' element={Library()} />
        <Route path='/singo' element={<Singo/>} />
        <Route path='/pawprint-cabin' element={<Pawprint/>}/>
      </Routes>
    </Router>
  );
}
  
export default App;