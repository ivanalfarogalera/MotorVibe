// import React from "react";
// import { MapContainer, TileLayer, useMap } from "react-leaflet";
// import 'leaflet/dist/leaflet.css';


// function MyComponent() {
//   const map = useMap();
//   console.log('map center:', map.getCenter());
//   return null;
// }

// function MapView() {
//   const startPoint = [39.9946,-0.0714];
//   const endPoint = [39.9754,-0.0566];


//   return (
//           <MapContainer center={[39.9946,-0.0714]} zoom={15} style={{height: "50vh", width: "50vw"}}>
//             <MyComponent startPoint={startPoint} endPoint={endPoint} />
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             />
//           </MapContainer>
//   );
// }


// export default MapView;

import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MyComponent from "./MyComponent";

function MapView() {
  const startPoint = [39.9946,-0.0714]; // Ingresa las coordenadas del punto de inicio aquí
  const endPoint = [39.9754,-0.0566]; // Ingresa las coordenadas del punto de fin aquí

  return (
    <MapContainer center={[39.9946,-0.0714]} zoom={15} style={{height: "50vh", width: "50vw"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Pasa las coordenadas de los puntos como props al componente MyComponent */}
      <MyComponent startPoint={startPoint} endPoint={endPoint} />
    </MapContainer>
  );
}

export default MapView;

