import React from "react";

import { Container } from 'react-bootstrap';
import MapView from "../../components/MapView";

function MyRoutePage() {
  return (
    <Container>
      <h1>Mi ruta</h1>
      <MapView />
    </Container>
  );
}

export default MyRoutePage;