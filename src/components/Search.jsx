import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { MdMyLocation } from 'react-icons/md'

const Search = () => {
  return (
    <div className='bg-primary py-20'>
      <div className='flex items-center justify-center gap-32'>
        <div className='flex w-2/5 relative items-center'>
          <input
            type='text'
            placeholder='鄉鎮市區、縣市、郵遞區號'
            className='bg-primary border-b-2 pb-2 border-solid border-gray-400 outline-none text-5xl font-light w-full absolute -top-4'
          />
          <button
            type='button'
            className='py-6 px-10 rounded-lg absolute -top-10 right-1 bg-dark-green hover:bg-green-500 transition-all'
          >
            <RiSearch2Line className='text-white text-3xl' />
          </button>
        </div>
        <button className='flex items-center gap-3 text-2xl border-2 border-gray-300 py-5 px-20 rounded-xl bg-white shadow font-semibold'>
          <MdMyLocation className='text-purple-500' />
          我附近的自行車道
        </button>
      </div>
    </div>
  )
}

export default Search
