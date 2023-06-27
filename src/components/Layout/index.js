import React from 'react';
import Navbar from '../Navbar';


function Layout(props) {
    return (
        <div>
            <Navbar className="Router"/>
            {props.children}
        </div>
    )
}
  
export default Layout;