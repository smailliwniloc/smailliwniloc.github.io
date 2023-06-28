import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
} from '../../components/Navbar/NavbarElements';
import '../../components/Navbar/index.css'
import { FaHome } from "react-icons/fa";
import Sidebar from '../../components/Sidebar/Sidebar';
import pawprintlogo from './FurNFeathersLogo.png';


  
const PawprintHeader = () => {
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
          <NavLink to='/pawprint-cabin'>
            <img src={pawprintlogo} width="200" alt="Fur 'N Feathers Logo"/>
          </NavLink>
          <NavLink to='/pawprint-cabin/about-us'>
            About Us
          </NavLink>
          <NavLink to='/pawprint-cabin/blog'>
            Blog
          </NavLink>
          <NavLink to='/pawprint-cabin/booking'>
            Booking
          </NavLink>
          <NavLink to='/pawprint-cabin/FAQ'>
            FAQ
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a href='https://pawprintcabin.com/' className="Navbar-External-Link"  target="_blank" rel="noreferrer"><FaHome/> Old Site</a>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default PawprintHeader;