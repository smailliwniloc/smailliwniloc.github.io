import React from 'react';
import PawprintHeader from './PawprintHeader';
import './Pawprint.css'

function PawprintLayout(props) {
    return (
        <div className='Pawprint'>
            <PawprintHeader className="Router"/>
            {props.children}
        </div>
    )
}
  
export default PawprintLayout;