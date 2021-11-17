import React, { useContext } from 'react'
import SearchContext from '../store/SearchContext'

const transferKM = (num) => num / 1000

const SearchResults = () => {
  const { state } = useContext(SearchContext)

  return (
    <>
      {state.firstPage.length > 0 && (
        <ul className='absolute z-20 bg-white'>
          {state.firstPage.map((item, i) => {
            return (
              <li
                key={i}
                className='container py-3 px-5 cursor-pointer flex justify-around gap-10 border-b-2 border-gray-300 hover:bg-gray-100'
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
          {/* <li className='container pt-4 pb-3 px-6 cursor-pointer flex justify-around gap-10 border-b-2 border-gray-300 hover:bg-gray-100'>
        <div className='flex flex-col items-center'>
          <h4>路線名稱</h4>
          <span>車道長度：x公里</span>
          <span>起點：xxxx</span>
        </div>
        <ul className='flex gap-3 self-end text-white'>
          <li className='bg-purple-400 px-3 rounded-xl'>台北市</li>
          <li className='bg-purple-400 px-3 rounded-xl'>中正區</li>
          <li className='bg-dark-green px-3 rounded-xl'>單向</li>
        </ul>
      </li> */}
        </ul>
      )}
    </>
  )
}

export default SearchResults
