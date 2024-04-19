import React, { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import axios from "axios";

function MyComponent({ startPoint, endPoint }) {
  const map = useMap();
  const myapikey = "5b3ce3597851110001cf62485cc344608531435a8bdce1033c4284ea"; // Tu API key de OpenRouteService

  useEffect(() => {
    const getRoute = async () => {
      try {
        const response = await axios.get(
          `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${myapikey}&start=${startPoint[1]},${startPoint[0]}&end=${endPoint[1]},${endPoint[0]}`
        );

        const routeCoordinates = response.data.features[0].geometry.coordinates.map(coord => [coord[1], coord[0]]); // Intercambiar el orden de las coordenadas

        // Dibujar la nueva ruta
        const polyline = L.polyline(routeCoordinates, { color: 'blue' }).addTo(map);

        // Ajustar el mapa para que se vea toda la ruta
        map.fitBounds(polyline.getBounds());
      } catch (error) {
        console.error("Error al obtener la ruta:", error);
      }
    };

    if (startPoint && endPoint) {
      getRoute();
    }
  }, [map, startPoint, endPoint]);

  return null;
}

export default MyComponent;
