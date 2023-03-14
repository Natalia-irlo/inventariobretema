import React from 'react';
import logosinfondo from '../assets/img/logosinfondo.png';

function Home () {
  return (
    <div className='container-home'>
      <div className='container-logog'>
        <img className="logo-grande" src={logosinfondo} alt="logo" width="500px" />
      </div>
      <div className='container-botonh'>
        <button className='boton-login'><p><b>LOG IN</b></p></button>
      </div>
    </div>
  )
}

export default Home;