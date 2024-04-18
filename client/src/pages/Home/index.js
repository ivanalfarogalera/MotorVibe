import React from "react";

import { Container } from 'react-bootstrap';
import MapView from "../../components/MapView";

function HomePage() {
  return (
    <Container>
      <h1>Rutas destacadas</h1>
      <MapView />
    </Container>
  );
}

export default HomePage;