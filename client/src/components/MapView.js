import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MyComponent from "./MyComponent";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define un nuevo icono para el marcador
const customMarkerIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

function MapView() {
  const startPoint = [39.994942,-0.066562]; // Longitud, Latitud
  const endPoint = [39.974287,-0.056597];   // Longitud, Latitud

  return (
    <MapContainer center={startPoint} zoom={15} style={{ height: "50vh", width: "50vw" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={startPoint} icon={customMarkerIcon}>
        <Popup>
          Punto de inicio
        </Popup>
      </Marker>
      <Marker position={endPoint} icon={customMarkerIcon}>
        <Popup>
          Punto de fin
        </Popup>
      </Marker>
      {/* Pasamos las coordenadas como props al componente MyComponent */}
      <MyComponent startPoint={startPoint} endPoint={endPoint} />
    </MapContainer>
  );
}

export default MapView;


