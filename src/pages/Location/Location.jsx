import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Intro } from '../../components/Intro/Intro';

export const Location = () => {
  const position = [42.6977, 23.3219];

  return (
    <>
      <Intro
        text='BAR LOCATOR'
        description='Cocktailandia is a home for wonderful cocktails, find the closest place to try one of them!'
      />
      <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>COCKTAILANDIA</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
