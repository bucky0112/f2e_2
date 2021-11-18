import React, { useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
// import Search from './components/Search'
import CyclingShape from './views/CyclingShape'
import NearByStation from './views/NearByStation'
import Travel from './views/Travel'
import MainMap from './components/MainMap'
import SearchContext, { initialState, reducer } from './store/SearchContext'

function App () {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<CyclingShape />} />
        <Route path='near_by_station' element={<NearByStation />} />
        <Route path='travel' element={<Travel />} />
      </Routes>
      <MainMap />
    </SearchContext.Provider>
  )
}

export default App
