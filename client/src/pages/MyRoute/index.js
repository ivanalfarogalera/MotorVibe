// import React from "react";

// import { Container } from 'react-bootstrap';
// import MapView from "../../components/MapView";
// import RouteCard from "../../components/RouteCard";

// function MyRoutePage() {
//   return (
//     <Container>
//       <RouteCard />
//       <MapView />
//     </Container>
//   );
// }

// export default MyRoutePage;

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
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Detalles de la Ruta</h5>
                  <ul className="list-group list-group-flush">
                    {Object.entries(routeData).map(([key, value]) => (
                      <li className="list-group-item" key={key}>
                        <strong>{key}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <MapView
                inicioLatitud={routeData.iniciolatitud}
                inicioLongitud={routeData.iniciolongitud}
                finLatitud={routeData.finlatitud}
                finLongitud={routeData.finlongitud}
                nombre={routeData.nombre}
                descripcion={routeData.descripcion}
                alto={'50vh'}
                ancho={'80%'}
              />
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