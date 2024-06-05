import React, { useState } from "react";
import { Container, Form, Button, Image} from 'react-bootstrap';
import tituloImage from '../../images/foto1.jfif';

function NewRoute() {
  const [routeData, setRouteData] = useState({
    nombre: '',
    iniciolatitud: '',
    iniciolongitud: '',
    finlatitud: '',
    finlongitud: '',
    descripcion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRouteData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://backend.motorvibe.es:443/nuevaruta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(routeData)
      });
      if (response.ok) {
        alert('Ruta añadida correctamente');
        // Limpiar el formulario después de añadir la ruta
        setRouteData({
          nombre: '',
          iniciolatitud: '',
          iniciolongitud: '',
          finlatitud: '',
          finlongitud: '',
          descripcion: ''
        });
      } else {
        alert('Error al añadir la ruta');
      }
    } catch (error) {
      console.error('Error al añadir la ruta:', error);
    }
  };

  return (
    <Container className="mt-5">
  <h1 className="mb-4 text-center">Añadir nueva ruta</h1>
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formNombre">
      <Form.Label><strong>Nombre</strong></Form.Label>
      <Form.Control type="text" name="nombre" value={routeData.nombre} onChange={handleChange} required />
    </Form.Group>
    <Form.Group controlId="formInicioLatitud">
      <Form.Label><strong>Inicio Latitud</strong></Form.Label>
      <Form.Control type="text" name="iniciolatitud" value={routeData.iniciolatitud} onChange={handleChange} required />
    </Form.Group>
    <Form.Group controlId="formInicioLongitud">
      <Form.Label><strong>Inicio Longitud</strong></Form.Label>
      <Form.Control type="text" name="iniciolongitud" value={routeData.iniciolongitud} onChange={handleChange} required />
    </Form.Group>
    <Form.Group controlId="formFinLatitud">
      <Form.Label><strong>Fin Latitud</strong></Form.Label>
      <Form.Control type="text" name="finlatitud" value={routeData.finlatitud} onChange={handleChange} required />
    </Form.Group>
    <Form.Group controlId="formFinLongitud">
      <Form.Label><strong>Fin Longitud</strong></Form.Label>
      <Form.Control type="text" name="finlongitud" value={routeData.finlongitud} onChange={handleChange} required />
    </Form.Group>
    <Form.Group controlId="formDescripcion">
      <Form.Label><strong>Descripción</strong></Form.Label>
      <Form.Control as="textarea" rows={3} name="descripcion" value={routeData.descripcion} onChange={handleChange} required />
    </Form.Group>
    <Button variant="primary" type="submit" className="mt-3">
      Añadir Ruta
    </Button>
  </Form>
  <div className="mb-4 mt-4">
        <Image
          src={tituloImage}
          fluid
          width="40%"
          height="40%"
          className="d-block mx-auto"
          alt="Title"
        />
      </div>
</Container>

  );
}

export default NewRoute;
