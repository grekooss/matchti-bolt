"use client"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { useEffect, useState } from 'react';

// Define the custom icon
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [38, 38]
});

// Sample data for facilities
const facilities = [
  { id: 1, name: 'City Park Basketball Court', category: 'Basketball', position: [52.237049, 21.017532] },
  { id: 2, name: 'Riverside Tennis Courts', category: 'Tennis', position: [52.232049, 21.027532] },
  { id: 3, name: 'Community Center Soccer Field', category: 'Soccer', position: [52.227049, 21.007532] },
  { id: 4, name: 'Lakeside Volleyball Court', category: 'Volleyball', position: [52.242049, 21.037532] },
];

export default function MapComponent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <MapContainer center={[52.237049, 21.017532]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {facilities.map((facility) => (
        <Marker key={facility.id} position={facility.position as [number, number]} icon={customIcon}>
          <Popup>
            <div>
              <h3 className="font-bold">{facility.name}</h3>
              <p>{facility.category}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}