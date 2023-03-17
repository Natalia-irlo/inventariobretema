import React from 'react';
import agarimo from '../assets/img/agarimo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



function Stock() {
  return (
<>
    <div className="d-flex justify-content-center">
      <div className="fondo-cards">
        <img src={agarimo} alt="blog1" width="200px" />
        <div className="p-2">
          <h5 className="card-title"><b>Agarimo</b></h5>
          <p>Características</p>
          <button className='boton-rsp'>-</button>
          <button className='boton-rsp'>+</button>
          <button className='boton-rsp'><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      </div>
      <div className="fondo-cards">
        <img src={agarimo} alt="blog1" width="200px" />
        <div className="p-2">
          <h5 className="card-title"><b>Agarimo</b></h5>
          <p>Características</p>
          <button className='boton-rsp'>-</button>
          <button className='boton-rsp'>+</button>
          <button className='boton-rsp'><FontAwesomeIcon icon={faTrash} /></button>
        </div>
        </div>
        <div className="fondo-cards">
          <img src={agarimo} alt="blog1" width="200px" />
          <div className="p-2">
            <h5 className="card-title"><b>Agarimo</b></h5>
            <p>Características</p>
            <button className='boton-rsp'>-</button>
          <button className='boton-rsp'>+</button>
          <button className='boton-rsp'><FontAwesomeIcon icon={faTrash} /></button>
          </div>
        </div>
        </div>
      </>
      );
}

      export default Stock;