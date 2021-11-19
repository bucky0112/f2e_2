import React, { useContext } from 'react'
import SearchContext from '../store/SearchContext'

const transferKM = (num) => num / 1000

const SearchResults = () => {
  const { state } = useContext(SearchContext)
  const { cyclingShapeFirstPage } = state

  const handleChangePosition = (item) => {
    console.log(item)
    /* dispatch({
      type: 'getShowSpot',
      payload: item.Position
    })

    const { Position } = item

    dispatch({
      type: 'getCurrentPosition',
      latitude: Position.PositionLat,
      longitude: Position.PositionLon
    }) */
  }

  return (
    <>
      {cyclingShapeFirstPage.length > 0 && (
        <ul className='absolute z-20 left-11 bg-white'>
          {cyclingShapeFirstPage.map((item, i) => {
            return (
              <li
                key={i}
                className='container py-3 px-5 cursor-pointer flex justify-between gap-10 border-b-2 border-gray-300 hover:bg-gray-100'
                onClick={() => handleChangePosition(item)}
              >
                <div className='flex flex-col items-start justify-between'>
                  <h4>{item.RouteName}</h4>
                  <span>車道長度：{transferKM(item.CyclingLength)}公里</span>
                  <span>起點：{item.RoadSectionStart}</span>
                </div>
                <ul className='flex self-end gap-3 text-white'>
                  <li className='bg-purple-400 px-3 rounded-xl'>{item.City}</li>
                  <li className='bg-purple-400 px-3 rounded-xl'>{item.Town}</li>
                  <li className='bg-dark-green px-3 rounded-xl'>
                    {item.Direction}
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

export default SearchResults
