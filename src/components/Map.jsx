import React from 'react';
import styles from './Map.module.css';
import { useSearchParams } from 'react-router-dom';
export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      position: {lat}, {lng}
      <button onClick={() => setSearchParams({ lat: 23, lng: 54 })}>
        set position
      </button>
    </div>
  );
}
