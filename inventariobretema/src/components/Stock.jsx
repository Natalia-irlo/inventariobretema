import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';

function MostrarProductos() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("verTodo");

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/products");
        setProductos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
      
    getProductos();
  }, []);

  const images = [
    "../assets/modelos/agarimo.jpg",
    "../assets/modelos/astronauta.jpg",
    "../assets/modelos/dino.jpg",
    "../assets/modelos/alien.jpg",
    "../assets/modelos/ceo.jpg",
  ];

  const handleSearch = (event) => {
    setBusqueda(event.target.value);
  };

  const handleFiltro = (event) => {
    setFiltro(event.target.value);
  };

  const [stock, setStock] = useState({});
  const handleStockChange = (productId, newStock) => {
    setStock({
      ...stock,
      [productId]: newStock
    });
  }
 

  const actualizarStock = async (id, nuevaCantidad) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/product/${id}`, { stock: nuevaCantidad });
      const nuevosProductos = productos.map((producto) => {
        if (producto.id === id) {
          return { ...producto, stock: nuevaCantidad };
        } else {
          return producto;
        }
      });
      setProductos(nuevosProductos);
    } catch (error) {
      console.error(error);
    }
  };

// const [colores, setColores] = useState({});

// const handleStockChange = (productId, newStock) => {
//     setStock({
//       ...stock,
//       [productId]: newStock
//     });
  
//     setColores({
//       ...colores,
//       [productId]: newStock === 0 ? 'red' : ''
//     });
//   };
  


  const handleStockUpdate = (id, incremento) => {
    const producto = productos.find((p) => p.id === id);
    const nuevaCantidad = producto.stock + incremento;
    actualizarStock(id, nuevaCantidad);
  };
    
  const eliminarProducto = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/product/${id}`);
      const newProductos = productos.filter((producto) => producto.id !== id);
      setProductos(newProductos);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredProductos = productos.filter((producto) => {
    if (filtro === "verTodo") {
      return true;
    } else if (filtro === "conStock") {
      return producto.stock > 0;
    } else if (filtro === "sinStock") {
      return producto.stock === 0;
    }
  });

  return (
    <div className="container fondo-cards">
      <div className="row justify-content-center mb-4">
        <div className="col-md-4">
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text filtro-desp" htmlFor="filtro">
                Filtrar por:
              </label>
            </div>
            <select
              className="custom-select desplegable"
              id="filtro"
              value={filtro}
              onChange={handleFiltro}
            >
              <option value="verTodo">Ver todo</option>
              <option value="conStock">Con stock</option>
              <option value="sinStock">Sin stock</option>
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control search"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="fondo-cards2 row justify-content-center">
        {filteredProductos.map((producto) => (
            
          <Card key={producto.id} className="producto col-md-2 p-2 my-1">
            <Card.Img variant="top" className="img-product" src={images[Math.floor(Math.random() * images.length)]} />
            <Card.Body>
              <Card.Title><b>{producto.name}</b></Card.Title>
              <Card.Text>{producto.description}</Card.Text>
              <div>
              <Card.Text>Stock: {stock[producto.id] || producto.stock}</Card.Text>
<div>
  <button
    className="boton-rsp"
    onClick={() => handleStockChange(producto.id, (stock[producto.id] || producto.stock) - 1)}
  >
    -
  </button>
  <button
    className="boton-rsp"
    onClick={() => handleStockChange(producto.id, (stock[producto.id] || producto.stock) + 1)}
  >
    +
  </button>


                <button className='boton-rsp' onClick={() => eliminarProducto(producto.id)}>
  <FontAwesomeIcon icon={faTrash} />
</button>
</div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MostrarProductos;
