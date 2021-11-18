import React, { useContext } from 'react'
import SearchContext from '../../store/SearchContext'

const SearchTravelResult = () => {
  const { state } = useContext(SearchContext)

  const { travelFirstPage } = state

  return (
    <>
      {travelFirstPage.length > 0 && (
        <ul className='absolute z-20 bg-white'>
          {travelFirstPage.map((item) => {
            return (
              <li
                key={item.ID}
                className='container py-3 px-5 cursor-pointer border-b-2 border-gray-300 hover:bg-gray-100'
              >
                <div className='flex flex-col items-start justify-between'>
                  <h4 className='font-semibold text-green-700'>{item.Name}</h4>
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
