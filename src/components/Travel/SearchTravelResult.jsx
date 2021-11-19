import React, { useContext } from 'react'
import SearchContext from '../../store/SearchContext'

const SearchTravelResult = () => {
  const { state, dispatch } = useContext(SearchContext)

  const { travelFirstPage } = state

  const handleChangePosition = (item) => {
    dispatch({
      type: 'getShowSpot',
      payload: item.Position
    })

    const { Position } = item

    dispatch({
      type: 'getCurrentPosition',
      latitude: Position.PositionLat,
      longitude: Position.PositionLon
    })
  }

  return (
    <>
      {travelFirstPage.length > 0 && (
        <ul className='absolute z-20 left-11 bg-white'>
          {travelFirstPage.map((item, i) => {
            return (
              <li
                key={i}
                className='container py-3 px-5 cursor-pointer border-b-2 border-gray-300 hover:bg-gray-100'
                onClick={() => handleChangePosition(item)}
              >
                <div className='flex flex-col items-start justify-between'>
                  <h4 className='font-semibold text-green-700'>
                    {item.Name}
                  </h4>
                  <span>地址：{item.Address}</span>
                  <span>電話：{item.Phone}</span>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default SearchTravelResult
