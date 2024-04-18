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
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MyComponent from "./MyComponent";
import L from 'leaflet';

// Define un nuevo icono para el marcador
const customMarkerIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

function MapView() {
  const startPoint = [39.9946, -0.0714]; // Ingresa las coordenadas del punto de inicio aquí
  const endPoint = [39.9754, -0.0566]; // Ingresa las coordenadas del punto de fin aquí

  return (
    <MapContainer center={[39.9946, -0.0714]} zoom={15} style={{ height: "50vh", width: "50vw" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marcador para el punto de inicio */}
      <Marker position={startPoint} icon={customMarkerIcon}>
        <Popup>
          Punto de inicio
        </Popup>
      </Marker>
      {/* Marcador para el punto de fin */}
      <Marker position={endPoint} icon={customMarkerIcon}>
        <Popup>
          Punto de fin
        </Popup>
      </Marker>
      {/* Pasa las coordenadas de los puntos como props al componente MyComponent */}
      <MyComponent startPoint={startPoint} endPoint={endPoint} />
    </MapContainer>
  );
}

export default MapView;


