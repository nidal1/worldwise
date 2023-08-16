import React, { useState } from 'react';
import styles from './Map.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
export default function Map() {
  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([20, 40]);
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
