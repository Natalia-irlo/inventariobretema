import React from 'react';
import logosinfondo from '../assets/img/logosinfondo.png';
import { Link } from "react-router-dom";

function Home () {
  return (
    <div className='container-home'>
      <div className='container-logog'>
        <img className="logo-grande" src={logosinfondo} alt="logo" width="500px" />
      </div>
      <div className='container-botonh'>
      <Link className="links" target="_self" class="nav-link" aria-current="page" to='/Login'>
        <button className='boton-login'><p><b>LOG IN</b></p></button>
      </Link>
        
      </div>
    </div>
  )
}

export default Home;