import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
} from './NavbarElements';
import './index.css';
import { FaGithub, FaHome, FaGamepad, FaBook } from "react-icons/fa";
import Sidebar from '../Sidebar/Sidebar'


  
const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen)
    console.log(sidebarOpen)
  }
  return (
    <>
      <Nav className='Navbar'>
        <Bars onClick={handleDrawerToggle}/>
        <Sidebar isOpen={sidebarOpen} handleDrawerToggle={handleDrawerToggle}/>
  
        <NavMenu>
          <NavLink to='/' activestyle={{ color:'black' }}>
            <FaHome/> Home
          </NavLink>
          <NavLink to='/games' activestyle={{ color:'black' }}>
            <FaGamepad/> Games
          </NavLink>
          <NavLink to='/library' activestyle={{ color:'black' }}>
            <FaBook/> Library
          </NavLink>
          <NavLink to='/singo' activestyle={{ color:'black' }}>
            Singo
          </NavLink>
          <NavLink to='/pawprint-cabin' activestyle={{ color:'black'}}>
            Cabin
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a href='https://github.com/smailliwniloc' className="Navbar-External-Link"  target="_blank" rel="noreferrer"><FaGithub/> My GitHub</a>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;