// import React from "react";

// import { Container } from 'react-bootstrap';
// import RouteCard from "../../components/RouteCard";

// function MyRoutesList() {
//   return (
//     <Container>
//     <h1>Mis rutas</h1>
//       <RouteCard />
//     </Container>
//   );
// }

// export default MyRoutesList;

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import RouteCard from "../../components/RouteCard";

function MyRoutesList() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    try {
      const response = await fetch('http://backend.motorvibe.es:443/rutas');
      const data = await response.json();
      setRoutes(data);
    } catch (error) {
      console.error('Error fetching routes:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Mis rutas</h1>
      {routes.map(route => (
        <Row key={route.id} className="mb-4">
          <Col>
            <RouteCard
              id={route.id}
              inicioLatitud={route.iniciolatitud}
              inicioLongitud={route.iniciolongitud}
              finLatitud={route.finlatitud}
              finLongitud={route.finlongitud}
              nombre={route.nombre}
              descripcion={route.descripcion}
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default MyRoutesList;
