import React from "react";

import { Container, Image } from 'react-bootstrap';
import cocheImage from '../../images/coche.png';
import tituloImage from '../../images/titulo.png';

function HomePage() {
  return (
    <Container className="text-center">
      <div className="mb-4">
        <Image
          src={tituloImage}
          fluid
          width="80%"
          height="80%"
          className="d-block mx-auto"
          alt="Title"
        />
      </div>
      <div className="mb-4">
        <Image
          src={cocheImage}
          fluid
          border
          width="100%"
          height="100%"
          className="d-block mx-auto"
          alt="Adventurer"
        />
      </div>
      <div class="container-fluid text-center ">
        <h3 class="margin">Quienes somos?</h3>
        <p className="lead mt-4">MotorVibe es una plataforma dedicada a proporcionar información detallada y de calidad sobre una amplia variedad de rutas para coches y motocicletas. Nuestro objetivo es reunir a una comunidad apasionada de entusiastas de las rutas en motor, brindando un espacio donde puedan compartir experiencias, descubrir nuevas rutas y conectarse con otros amantes de la carretera.</p>
      </div>
    </Container>
  );
}

export default HomePage;