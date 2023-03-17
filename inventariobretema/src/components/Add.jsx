import React, { useState, useEffect } from 'react';

function Add() {
  //const [submitItem, setSubmitItem] = useState([]);
  const [item, setItem] = useState('');

  const DataApi =()=> {
    const [Data, setData] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const config = {
          Headers: {
            Accept: "application/json", 
          },
        };
      const response = await fetch(`http://127.0.0.1:8000/api/product/${item}`, config);
      const responseJson = await response.json();
      setData(responseJson);

  } fetchData();
  }, []);
    
  }

  function handleSubmit(event) {
    event.preventDefault();
    DataApi();
  }

  function handleItemChange(event) {
    setItem(event.target.value);
  }


  return (
    <>
      <form className='addproduct' onSubmit={handleSubmit}>
        <h2>Añadir producto</h2>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label"><b>Nombre*</b></label>
          <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label"><b>Características</b></label>
          <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"><b>Cantidad*</b></label>
          <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
        <button type="submit" className='boton-add'onChange={handleItemChange}>AÑADIR</button>
      </form>
    </>
  )
}


export default Add;