import React, { useReducer } from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import MainMap from './components/MainMap'
import SearchContext, { initialState, reducer } from './store/SearchContext'
// import allCity from './utils/allCity.json'

/* const initialState = {
  inputText: '',
  cityValue: '',
  allCyclingShape: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'getCityValue':
      return {
        ...state,
        inputText: action.payload,
        cityValue: allCity.filter((city) => city.CITY_NAME.match(action.payload))
      }
    case 'getAllCyclingShape':
      return {
        ...state,
        allCyclingShape: action.payload
      }
    default:
      return state
  }
} */

function App () {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      <Navbar />
      <Search />
      <MainMap />
    </SearchContext.Provider>
  )
}

export default App
