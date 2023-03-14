import React from 'react';
import { Link } from "react-router-dom";
import logosinfondo from '../assets/img/logosinfondo.png';
import modificarfondo from '../assets/img/modificarfondo.png';
import addfondo from '../assets/img/addfondo.png';


function Navbar () {
  return (
    <div className='fondo'>
        <nav class="nav flex-column" id="navbar">
            <div class="container-navbar">
                <Link className="links" target="_self" class="nav-link" aria-current="page" to='/'>
                    <img className="logo-img" src={logosinfondo} alt="logo" width="100px" />
                </Link>
                 <Link className="links" target="_self" class="nav-link" aria-current="page" to='/Stock'>
                    <img className="logo-img" src={modificarfondo} alt="modiflogo" width="100px" />
                </Link>
                <Link className="links" target="_self" class="nav-link" aria-current="page" to='/Add'>
                    <img className="logo-img" src={addfondo} alt="addlogo" width="100px" />
                </Link>
            
            </div>

        </nav>
    </div>
    
    /* <nav className="navbar-sound d-flex">
          <div className="sound m-3">
            <Link className="links" style={{color:"blue"}} to='/'>
             <img className="logo-img" src={logosinfondo} alt="logo" width="40px" />Home
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
              <span className="navbar-toggle-icon"></span>
            </button>
            </div>
          <div className="ms-auto">
            <ul className="d-flex justify-content-end">
              <li className="m-3">
                <Link className="links" style={{color:"blue"}} to='/Stock'>Stock</Link>
              </li>
              <li className="m-3">
                <Link className="links" style={{color:"blue"}} to='/Add'>Add</Link>
              </li>
              </ul>
          </div>
      </nav> */
  );
}

export default Navbar;