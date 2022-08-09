import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  //NavBtnLink, //use this for internal links, <a> for external links
} from './NavbarElements';
import './index.css';
import { FaGithub, FaHome, FaGamepad, FaInfoCircle, FaBook, FaPen, FaSmile } from "react-icons/fa";
import Sidebar from '../Sidebar/Sidebar'


  
const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen)
    console.log(sidebarOpen)
  }
  return (
    <>
      <Nav>
        <Bars onClick={handleDrawerToggle}/>
        <Sidebar isOpen={sidebarOpen} handleDrawerToggle={handleDrawerToggle}/>
  
        <NavMenu>
          <NavLink to='/' activestyle={{ color:'black' }}>
            <FaHome/> Home
          </NavLink>
          <NavLink to='/about' activestyle={{ color:'black' }}>
            <FaInfoCircle/> About
          </NavLink>
          <NavLink to='/games' activestyle={{ color:'black' }}>
            <FaGamepad/> Games
          </NavLink>
          <NavLink to='/library' activestyle={{ color:'black' }}>
            <FaBook/> Library
          </NavLink>
          <NavLink to='/team' activestyle={{ color:'black' }}>
            <FaSmile/> Team
          </NavLink>
          <NavLink to='/blogs' activestyle={{ color:'black' }}>
            <FaPen/> Blogs
          </NavLink>
          <NavLink to='/sign-up' activestyle={{ color:'black' }}>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <a href='https://github.com/smailliwniloc' className="Navbar-External-Link"  target="_blank" rel="noreferrer"><FaGithub/> My GitHub</a>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;