import React from 'react';
import MapView from './MapView';

const RouteCard = ({ id, inicioLatitud, inicioLongitud, finLatitud, finLongitud, nombre, descripcion }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item"><strong>ID:</strong> {id}</li>
        </ul>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Punto</th>
              <th scope="col">Longitud</th>
              <th scope="col">Latitud</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inicio</td>
              <td>{inicioLatitud}</td>
              <td>{inicioLongitud}</td>
            </tr>
            <tr>
              <td>Fin</td>
              <td>{finLatitud}</td>
              <td>{finLongitud}</td>
            </tr>
          </tbody>
        </table>
        <div className="mb-4">
          <h6>Descripción:</h6>
          <p className="card-text">{descripcion}</p>
        </div>
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