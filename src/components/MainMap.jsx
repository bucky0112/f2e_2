import React, { useEffect, useReducer } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const defaultPosition = [24.068096, 120.5141504]

const USER = import.meta.env.VITE_MAP_USER
const TOKEN = import.meta.env.VITE_MAP_TOKEN
const key = import.meta.env.VITE_MAP_STYLE_KEY

const initialState = {
  currentLatitude: 0,
  currentLongitude: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'getCurrentPosition':
      return {
        ...state,
        currentLatitude: action.latitude,
        currentLongitude: action.longitude
      }
    default:
      return state
  }
}

const MainMap = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch({
        type: 'getCurrentPosition',
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    })
  }, [])

  const { currentLatitude, currentLongitude } = state

  const position = [currentLatitude, currentLongitude]

  return (
    <MapContainer
      center={currentLatitude === 0 ? defaultPosition : position}
      zoom={15}
      scrollWheelZoom={false}
      className='w-screen h-screen-3/5'
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/${USER}/${key}/tiles/256/{z}/{x}/{y}@2x?access_token=${TOKEN}`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      {currentLatitude && (
        <Marker position={[currentLatitude, currentLongitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
    </MapContainer>
  )
}

export default MainMap
