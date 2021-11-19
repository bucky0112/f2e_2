import React, { useEffect, useContext } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import SearchContext from '../store/SearchContext'
import SearchResults from './SearchResults'
import SearchStationResults from './NearByStation/SearchStationResult'
import SearchTravelResult from './Travel/SearchTravelResult'

const USER = import.meta.env.VITE_MAP_USER
const TOKEN = import.meta.env.VITE_MAP_TOKEN
const key = import.meta.env.VITE_MAP_STYLE_KEY

const ChangeView = ({ center, zoom }) => {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

const MainMap = () => {
  const { dispatch, state } = useContext(SearchContext)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch({
        type: 'getCurrentPosition',
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    })
  }, [])

  const { currentLatitude, currentLongitude, showSpot } = state

  const { PositionLat, PositionLon } = showSpot

  const position = [currentLatitude, currentLongitude]

  return (
    <div className='relative'>
      <SearchResults />
      <SearchStationResults />
      <SearchTravelResult />
      <div className='absolute z-10'>
        {currentLatitude && (
          <MapContainer
            center={position}
            zoom={10}
            scrollWheelZoom={false}
            className='w-screen h-screen'
          >
            <ChangeView center={position} zoom={10} />
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/${USER}/${key}/tiles/256/{z}/{x}/{y}@2x?access_token=${TOKEN}`}
              attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            />
            {PositionLat && (
              <Marker position={[PositionLat, PositionLon]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            )}
          </MapContainer>
        )}
      </div>
    </div>
  )
}

export default MainMap
