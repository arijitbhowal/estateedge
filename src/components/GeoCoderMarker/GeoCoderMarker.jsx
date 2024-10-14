// GeoCoderMarker.jsx
import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import * as ELG from 'esri-leaflet-geocoder';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const GeoCoderMarker = ({ address }) => {
    const map = useMap();
    const [position, setPosition] = useState([60, 19]); // Default position
  
    useEffect(() => {
      const apiKey = 'AAPTxy8BH1VEsoebNVZXo8HurCmVux6Z1ECvC_RvygBPUZr9fcVbBWtQ3N_P8kEC-Tz4SWoKD8xlE5WPevD0vxdUr9803Xy0LeWzk-eKEn_1SFNH0Fw0gGRANh65OZwKIVafKQoI18rTIYIhNqbQnH-Q4wG2pyuOA5-475r_oHiQSN07WWjlK_HRmZn0v5zEbv2Q1gqVa4Jz9oNQYIG9WERqf4w9PH7gtlIGKcBIyIswxt4.AT1_byg69OYb';

  
      ELG.geocode({ apikey: apiKey })
        .text(address)
        .run((err, results) => {
          if (err) {
            console.error("Geocoding error: ", err);
            return;
          }
  
          if (results?.results?.length > 0) {
            const { lat, lng } = results.results[0].latlng;
            setPosition([lat, lng]);
            map.flyTo([lat, lng], 6);
            // Print the geocoded coordinates to the console
            console.log(`Geocoded coordinates: Latitude: ${lat}, Longitude: ${lng}`);
          } else {
            console.warn("No results found for the provided address.");
          }
        });
    }, [address, map]); // Add map to dependencies
  return (
    <Marker position={position} icon={DefaultIcon}>
      <Popup>{address}</Popup>
    </Marker>
  );
}

export default GeoCoderMarker;