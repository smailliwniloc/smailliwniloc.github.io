
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Games from './pages/games';
import Library from './pages/library';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Singo from './pages/singo';
  
function App() {
  return (
    <Router>
      <Navbar className='Router'/>
      <Routes>
        <Route path='/' exact element={Home()} />
        <Route path='/about' element={About()} />
        <Route path='/games' element={<Games/>} />
        <Route path='/library' element={Library()} />
        <Route path='/team' element={Teams()} />
        <Route path='/blogs' element={Blogs()} />
        <Route path='/sign-up' element={SignUp()} />
        <Route path='/singo' element={<Singo/>} />
      </Routes>
    </Router>
  );
}
  
export default App;