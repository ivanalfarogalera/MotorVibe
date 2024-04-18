import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

function MyComponent({ startPoint, endPoint }) {
  const map = useMap();

  useEffect(() => {
    if (startPoint && endPoint) {
      // Crea una polilínea que conecte los puntos de inicio y fin
      const polyline = L.polyline([startPoint, endPoint], { color: 'blue' }).addTo(map);

      // Ajusta la vista del mapa para que muestre la polilínea
      map.fitBounds(polyline.getBounds());
    }
  }, [map, startPoint, endPoint]);

  return null;
}

export default MyComponent;