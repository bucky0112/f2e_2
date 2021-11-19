import React, { useContext, useEffect } from 'react'
import SearchContext from '../../store/SearchContext'

const checkServiceType = (num) =>
  num === 1 ? 'YouBike1.0' : num === 2 ? 'YouBike1.0' : 'iBike1.0'

const SearchStationResults = () => {
  const { state, dispatch } = useContext(SearchContext)

  const { stationCombineData, stationFirstPage } = state

  useEffect(() => {
    stationCombineData.length > 0 &&
      dispatch({
        type: 'splitStationPage',
        payload: stationCombineData
      })
  }, [stationCombineData])

  const handleChangePosition = (item) => {
    dispatch({
      type: 'getShowSpot',
      payload: item.StationPosition
    })

    const { StationPosition } = item

    dispatch({
      type: 'getCurrentPosition',
      latitude: StationPosition.PositionLat,
      longitude: StationPosition.PositionLon
    })
  }

  return (
    <>
      {stationFirstPage.length > 0 && (
        <ul className='absolute z-20 left-11 bg-white'>
          {stationFirstPage.map((item, i) => {
            return (
              <li
                key={i}
                className='container py-3 px-5 cursor-pointer flex justify-between gap-10 border-b-2 border-gray-300 hover:bg-gray-100'
                onClick={() => handleChangePosition(item)}
              >
                <div className='flex flex-col items-start justify-between'>
                  <h4>{item.StationName.Zh_tw}</h4>
                  <span>地址：{item.StationAddress.Zh_tw}</span>
                  <span>種類：{checkServiceType(item.ServiceType)}</span>
                </div>
                <ul className='flex self-end gap-3 text-white'>
                  <li className='bg-purple-400 px-3 rounded-xl'>
                    可租車數
                    {item.AvailableRentBikes.length > 0 &&
                      item.AvailableRentBikes[0].AvailableRentBikes}
                  </li>
                  <li className='bg-dark-green px-3 rounded-xl'>
                    可停車位
                    {item.AvailableRentBikes.length > 0 &&
                      item.AvailableRentBikes[0].AvailableReturnBikes}
                  </li>
                </ul>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default SearchStationResults
