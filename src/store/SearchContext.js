import { createContext } from 'react'
import allCity from '../utils/allCity.json'
import allStationCity from '../utils/allStationCity.json'
import Wkt from 'wicket'

const SearchContext = createContext()

export const initialState = {
  thisPage: null,
  inputText: '',
  cityValue: [],
  allCyclingShape: [],
  allStation: [],
  allStationAvailability: [],
  stationCombineData: [],
  currentLatitude: 0,
  currentLongitude: 0,
  multiPosition: [],
  cyclingShapeFirstPage: [],
  stationFirstPage: [],
  allTravel: [],
  travelFirstPage: [],
  showSpot: {
    PositionLat: 0,
    PositionLon: 0
  }
}

const transToArray = (text) => new Wkt.Wkt().read(text).toJson()

/* const mergeAlernatively = (arr1, arr2) => {
  const res = []
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (i % 2 === 0) {
      res.push(arr1[i / 2])
    } else {
      res.push(arr2[(i - 1) / 2])
    }
  }
  return res
} */

const paginate = (array, pageSize, pageNumber) =>
  array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)

export const reducer = (state, action) => {
  switch (action.type) {
    case 'getCurrentPosition':
      return {
        ...state,
        currentLatitude: action.latitude,
        currentLongitude: action.longitude
      }
    case 'getThisPage':
      return {
        ...state,
        thisPage: action.payload
      }
    case 'getCityValue':
      return {
        ...state,
        inputText: action.payload,
        cityValue: allCity.filter((city) =>
          city.CITY_NAME.match(action.payload)
        )
      }
    case 'getAllCyclingShape':
      return {
        ...state,
        allCyclingShape: action.payload,
        multiPosition: action.payload.map((item) => {
          return transToArray(item.Geometry)
        }),
        cyclingShapeFirstPage: paginate(action.payload, 5, 1)
      }
    case 'getStationCityValue':
      return {
        ...state,
        inputText: action.payload,
        cityValue: allStationCity.filter((city) =>
          city.CITY_NAME.match(action.payload)
        )
      }
    case 'getAllStation':
      return {
        ...state,
        allStation: action.payload
        /* multiPosition: action.payload.map((item) => {
          return transToArray(item.Geometry)
        }), */
      }
    case 'getAllStationAvailability':
      return {
        ...state,
        allStationAvailability: action.payload
      }
    case 'combineStationData':
      return {
        ...state,
        stationCombineData: action.stations.map((station) => {
          return {
            ...station,
            AvailableRentBikes: action.availability.filter(
              (item) => item.StationUID === station.StationUID
            )
          }
        })
      }
    case 'splitStationPage':
      return {
        ...state,
        stationFirstPage: paginate(action.payload, 5, 1)
      }
    case 'getAllTravel':
      return {
        ...state,
        // allTravel: mergeAlernatively(action.spot, action.res),
        allTravel: action.spot.concat(action.res),
        /* travelFirstPage: paginate(
          mergeAlernatively(action.spot, action.res),
          5,
          1
        ) */
        travelFirstPage: paginate(action.spot.concat(action.res), 5, 1)
      }
    case 'splitTravelPage':
      return {
        ...state,
        travelFirstPage: paginate(action.payload, 5, 1)
      }
    case 'getShowSpot':
      return {
        ...state,
        showSpot: action.payload
      }
    case 'clearAll':
      return {
        ...state,
        inputText: '',
        cityValue: '',
        allCyclingShape: [],
        allStationAvailability: [],
        stationCombineData: [],
        allStation: [],
        multiPosition: [],
        cyclingShapeFirstPage: [],
        stationFirstPage: [],
        allTravel: [],
        travelFirstPage: [],
        showSpot: {
          PositionLat: 0,
          PositionLon: 0
        }
      }
    default:
      return state
  }
}

export default SearchContext
