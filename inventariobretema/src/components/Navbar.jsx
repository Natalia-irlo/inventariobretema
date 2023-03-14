import React from 'react';
import { Link } from "react-router-dom";
import logosinfondo from '../assets/img/logosinfondo.png';
import modificarfondo from '../assets/img/modificarfondo.png';
import addfondo from '../assets/img/addfondo.png';


function Navbar () {
  return (
    <div className='fondo'>
        <nav className="nav flex-column" id="navbar">
            <div className="container-navbar">
                <Link className="links nav-link" target="_self" aria-current="page" to='/'>
                    <img className="logo-img" src={logosinfondo} alt="logo" width="100px" />
                </Link>
                 <Link className="links nav-link" target="_self" aria-current="page" to='/Stock'>
                    <img className="logo-img" src={modificarfondo} alt="modiflogo" width="100px" />
                </Link>
                <Link className="links nav-link" target="_self" aria-current="page" to='/Add'>
                    <img className="logo-img" src={addfondo} alt="addlogo" width="100px" />
                </Link>
            
            </div>

        </nav>
    </div>
    
  );
}

export default Navbar;