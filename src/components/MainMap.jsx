import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const position = [38.9072, -77.0369]

const USER = import.meta.env.VITE_MAP_USER
const TOKEN = import.meta.env.VITE_MAP_TOKEN
const key = import.meta.env.VITE_MAP_STYLE_KEY

const MainMap = () => {
  return (
    <MapContainer center={position} zoom={8} scrollWheelZoom={false}>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/${USER}/${key}/tiles/256/{z}/{x}/{y}@2x?access_token=${TOKEN}`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MainMap
