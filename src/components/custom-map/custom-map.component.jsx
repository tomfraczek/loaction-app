import React from 'react';

import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'

import './custom-map.styles.scss';

const CustomMap = ({lat, lon, zoom}) => (
    <MapContainer center={lat && lon ? [lat, lon] : ['00.000000', '00.000000']} zoom={zoom} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { lat && lon ? <Marker position={[lat, lon]}></Marker> : null }
    </MapContainer>
)
    
    
export default React.memo(CustomMap);