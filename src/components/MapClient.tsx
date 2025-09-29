'use client';

import dynamic from 'next/dynamic';
import type { LatLngTuple } from 'leaflet';

const Map = dynamic(() => import('./Map').then((mod) => mod.Map), { ssr: false });

interface MapClientProps {
  position: LatLngTuple;
  title: string;
}

export function MapClient(props: MapClientProps) {
  return <Map {...props} />;
}
