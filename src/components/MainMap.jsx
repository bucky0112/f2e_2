import React, { useEffect, useContext } from 'react'
import { MapContainer, TileLayer, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import SearchContext from '../store/SearchContext'
import SearchResults from './SearchResults'

const USER = import.meta.env.VITE_MAP_USER
const TOKEN = import.meta.env.VITE_MAP_TOKEN
const key = import.meta.env.VITE_MAP_STYLE_KEY

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

  const { currentLatitude, currentLongitude, multiPosition } = state

  multiPosition.length > 0 && console.log(multiPosition[0].coordinates)

  const position = [currentLatitude, currentLongitude]

  const limeOptions = { color: 'red' }

  const defaultLine = [
    [120.567977424533, 24.3286993887771],
    [120.57099863795, 24.3399073580033],
    [120.568998760168, 24.3405380455584],
    [120.567058932669, 24.3367749302846],
    [120.559831887246, 24.3400406494367],
    [120.560119206996, 24.341645294573],
    [120.56050073268, 24.3433882742156],
    [120.561257757954, 24.3453169549065],
    [120.562551232482, 24.3470892173183],
    [120.563535936648, 24.3476820984649],
    [120.565464761423, 24.3490373892965]
  ]

  return (
    <div className='relative'>
      <SearchResults />
      <div className='absolute z-10'>
        {currentLatitude && (
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className='w-screen h-screen'
          >
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/${USER}/${key}/tiles/256/{z}/{x}/{y}@2x?access_token=${TOKEN}`}
              attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            />
            <Polyline pathOptions={limeOptions} positions={defaultLine} />
            {/* {multiPosition.length > 0 && (
            <Polyline
              pathOptions={limeOptions}
              positions={multiPosition[0].coordinates}
            />
          )} */}

            {/* <Marker position={[currentLatitude, currentLongitude]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
          </MapContainer>
        )}
      </div>
    </div>
  )
}

export default MainMap
