import { createContext } from 'react'
import allCity from '../utils/allCity.json'

const SearchContext = createContext()

export const initialState = {
  inputText: '',
  cityValue: '',
  allCyclingShape: []
}

console.log(initialState)

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
        allCyclingShape: action.payload
      }
    default:
      return state
  }
}

export default SearchContext
