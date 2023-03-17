import React, { useState, useEffect, useCallback } from 'react';

function Add() {
  const [item, setItem] = useState('');
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    const response = await fetch(`http://127.0.0.1:8000/api/products/${item}`, config);
    const responseJson = await response.json();
    setData(responseJson);
  }, [item]);

  useEffect(() => {
    fetchData();
  }, [fetchData, item]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleItemChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <>
      <form className="addproduct" onSubmit={handleSubmit}>
        <h2>Añadir producto</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            <b>Nombre*</b>
          </label>
          <input
            name="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleItemChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            <b>Características</b>
          </label>
          <input name="description" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            <b>Cantidad*</b>
          </label>
          <input name="stock" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <button type="submit" className="boton-add">
          AÑADIR
        </button>
      </form>

      {data && (
  <div key={data.id}>
    <h2>Información del producto</h2>
    <h3>Nombre: {data.name}</h3>
    <p>Características: {data.description}</p>
    <p>Cantidad: {data.stock}</p>
  </div>
)}

    </>
  );
}

export default Add;
