import React from 'react'
// import MainMap from '../components/MainMap'
import Search from '../components/Travel/Search'
import { useGetThisPage } from '../hooks/useGetThisPage'

const pageID = 2

const Travel = () => {
  useGetThisPage(pageID)

  return (
    <>
      <Search />
      {/* <MainMap /> */}
    </>
  )
}

export default Travel
