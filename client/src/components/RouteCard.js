import React from 'react';
import MapView from './MapView';

const RouteCard = ({ id, inicioLatitud, inicioLongitud, finLatitud, finLongitud, nombre, descripcion }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item"><strong>ID:</strong> {id}</li>
          <li className="list-group-item"><strong>Inicio:</strong> Latitud {inicioLatitud}, Longitud {inicioLongitud}</li>
          <li className="list-group-item"><strong>Fin:</strong> Latitud {finLatitud}, Longitud {finLongitud}</li>
        </ul>
        <MapView
          inicioLatitud={inicioLatitud}
          inicioLongitud={inicioLongitud}
          finLatitud={finLatitud}
          finLongitud={finLongitud}
          nombre={nombre}
          descripcion={descripcion}
          alto={'50vh'}
          ancho={'100%'}
        />
      </div>
    </div>
  );
};

export default RouteCard;