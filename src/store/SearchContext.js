import { createContext } from 'react'
import allCity from '../utils/allCity.json'
import Wkt from 'wicket'

const SearchContext = createContext()

export const initialState = {
  inputText: '',
  cityValue: '',
  allCyclingShape: [],
  currentLatitude: 0,
  currentLongitude: 0,
  multiPosition: [],
  firstPage: []
}

const transToArray = (text) => new Wkt.Wkt().read(text).toJson()

const paginate = (array, pageSize, pageNumber) => {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
}

export const reducer = (state, action) => {
  switch (action.type) {
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
        firstPage: paginate(action.payload, 5, 1)
      }
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

export default SearchContext
