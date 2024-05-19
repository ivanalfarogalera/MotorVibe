import React, { useState, useEffect } from "react";
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
  const [routeData, setRouteData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/ruta');
      const data = await response.json();
      setRouteData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <MapContainer center={[39.994942, -0.066562]} zoom={15} style={{ height: "50vh", width: "50vw" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {routeData && (
        <>
          <Marker position={[routeData.iniciolongitud, routeData.iniciolatitud]} icon={customMarkerIcon}>
            <Popup>{routeData.nombre}</Popup>
          </Marker>
          <Marker position={[routeData.finlongitud, routeData.finlatitud]} icon={customMarkerIcon}>
            <Popup>{routeData.descripcion}</Popup>
          </Marker>
          <MyComponent startPoint={[routeData.iniciolongitud, routeData.iniciolatitud]} endPoint={[routeData.finlongitud, routeData.finlatitud]} />
        </>
      )}
    </MapContainer>
  );
}

export default MapView;


