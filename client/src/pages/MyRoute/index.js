import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import MapView from "../../components/MapView";

function MyRoutePage() {
  const [routeData, setRouteData] = useState(null);

  useEffect(() => {
    fetchRouteData();
  }, []);

  const fetchRouteData = async () => {
    try {
      const response = await fetch('http://backend.motorvibe.es:443/ruta');
      const data = await response.json();
      setRouteData(data);
    } catch (error) {
      console.error('Error fetching route data:', error);
    }
  };

  return (
    <Container className="mt-5">
      {routeData ? (
        <>
          <h1 className="text-center mb-4">{routeData.nombre}</h1>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h3>Punto de Inicio</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Latitud:</strong> {routeData.iniciolatitud}
                </li>
                <li className="list-group-item">
                  <strong>Longitud:</strong> {routeData.iniciolongitud}
                </li>
              </ul>
            </div>
            <div className="col-md-6 mb-4">
              <h3>Punto de Fin</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Latitud:</strong> {routeData.finlatitud}
                </li>
                <li className="list-group-item">
                  <strong>Longitud:</strong> {routeData.finlongitud}
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <MapView
                inicioLatitud={routeData.iniciolatitud}
                inicioLongitud={routeData.iniciolongitud}
                finLatitud={routeData.finlatitud}
                finLongitud={routeData.finlongitud}
                nombre={routeData.nombre}
                descripcion={routeData.descripcion}
                alto={'50vh'}
                ancho={'100%'}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12 text-center">
              <h3>Descripción</h3>
              <p>{routeData.descripcion}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Cargando datos de la ruta...</p>
      )}
    </Container>
  );
}

export default MyRoutePage;