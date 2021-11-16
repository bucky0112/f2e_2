import React, { useContext } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { MdMyLocation, MdKeyboardArrowDown } from 'react-icons/md'
import { GoSettings } from 'react-icons/go'
import SearchContext from '../store/SearchContext'
import { apiGetCyclingShape } from '../request/api'

const Search = () => {
  const { state, dispatch } = useContext(SearchContext)

  const handleFetchCyclingShape = async (city) => {
    try {
      const res = await apiGetCyclingShape(city)
      res.status === 200 &&
        dispatch({ type: 'getAllCyclingShape', payload: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='bg-primary pt-16 px-20 grid grid-rows-2 grid-cols-3 justify-center gap-x-20 gap-y-10'>
      <div className='flex items-center relative col-span-2'>
        <input
          value={state.inputText}
          type='text'
          placeholder='鄉鎮市區、縣市、郵遞區號'
          className='bg-primary border-b-2 pb-2 border-solid border-gray-400 outline-none text-5xl font-light w-full absolute top-5'
          onChange={(e) =>
            dispatch({ type: 'getCityValue', payload: e.target.value })
          }
        />
        <button
          type='button'
          className='py-6 px-10 rounded-lg bg-dark-green absolute right-0 hover:bg-green-500 hover:scale-110 motion-reduce:transform-none transition-all'
          onClick={() => handleFetchCyclingShape(state.cityValue[0].CITY_VALUE)}
        >
          <RiSearch2Line className='text-white text-3xl' />
        </button>
      </div>
      <button className='flex items-center justify-center gap-3 text-2xl font-semibold border-2 border-gray-300 py-5 px-20 rounded-xl bg-white shadow hover:scale-110 motion-reduce:transform-none transition'>
        <MdMyLocation className='text-purple-500' />
        我附近的自行車道
      </button>
      <div className='col-start-3 row-start-2 justify-self-end'>
        <button className='flex items-center gap-3 text-2xl font-semibold'>
          <GoSettings className='rotate-90 text-purple-500' />
          <span>更多篩選</span>
          <MdKeyboardArrowDown />
        </button>
      </div>
    </div>
  )
}

export default Search
