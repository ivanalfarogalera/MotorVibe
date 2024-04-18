import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css';


function MyComponent() {
  const map = useMap();
  console.log('map center:', map.getCenter());
  return null;
}

function MapView() {
  return (
          <MapContainer center={[50.5, 30.5]} zoom={15} style={{height: "50vh", width: "50vw"}}>
            <MyComponent />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </MapContainer>
  );
}


export default MapView;
