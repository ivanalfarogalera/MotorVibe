import React from "react";

import { Container} from 'react-bootstrap';
import MapView from "../../components/MapView";

function HomePage() {
  return (
    <div>
        <Container>
          <h1>Rutas destacadas</h1>
          <div>
            <MapView />
          </div>
        </Container>
    </div>
  );
}

export default HomePage;