import React, { useState } from "react";
import axios from "axios";

function AgregarObjeto() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name,
      description,
      stock
    };
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/product", data);
      console.log(response.data); // Mostramos la respuesta del servidor en la consola
      // Aquí puedes hacer algo más con la respuesta del servidor, si lo deseas
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="addproduct d-flex flex-column justify-content-center"  onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label"><b>Nombre:</b></label>
        <input className="form-control"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description"><b>Descripción:</b></label>
        <textarea className="form-control"
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="stock"><b>Cantidad:</b></label>
        <input className="form-control"
          type="number"
          id="stock"
          name="stock"
          value={stock}
          onChange={(event) => setStock(event.target.value)}
          required
        />
      </div>
      <button type="submit" className="boton-add">Añadir</button>
    </form>
  );
}
export default AgregarObjeto;