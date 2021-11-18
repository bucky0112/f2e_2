import React from 'react'
import Search from '../components/CyclingShape/Search'
// import MainMap from './../components/MainMap'
import { useGetThisPage } from '../hooks/useGetThisPage'

const pageID = 0

const CyclingShape = () => {
  useGetThisPage(pageID)

  return (
    <>
      <Search />
      {/* <MainMap /> */}
    </>
  )
}

export default CyclingShape
