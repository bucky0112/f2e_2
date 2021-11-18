import React from 'react'
// import MainMap from '../components/MainMap'
import Search from '../components/NearByStation/Search'
import { useGetThisPage } from '../hooks/useGetThisPage'

const pageID = 1

const NearByStation = () => {
  useGetThisPage(pageID)

  return (
    <>
      <Search />
      {/* <MainMap /> */}
    </>
  )
}

export default NearByStation
