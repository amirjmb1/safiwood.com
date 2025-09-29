'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import type { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  {
    ssr: false,
  },
);
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), {
  ssr: false,
});
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), {
  ssr: false,
});
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
});

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapProps {
  position: LatLngTuple;
  title: string;
}

export function Map({ position, title }: MapProps) {
  const center = useMemo(() => position, [position]);
  return (
    <MapContainer
      center={center}
      zoom={16}
      style={{ height: '100%', width: '100%', borderRadius: '1.5rem' }}
      scrollWheelZoom={false}
      aria-label={title}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={center} icon={markerIcon}>
        <Popup>{title}</Popup>
      </Marker>
    </MapContainer>
  );
}
