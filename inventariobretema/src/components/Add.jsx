import React from 'react';


function Add() {
  return (
    <>
      <form className='addproduct'>
        <h2>Añadir producto</h2>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label"><b>Nombre*</b></label>
          <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label"><b>Características</b></label>
          <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label"><b>Imagen*</b></label>
          <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
        <button type="submit" className='boton-add'>AÑADIR</button>
      </form>
    </>
  )
}

export default Add;