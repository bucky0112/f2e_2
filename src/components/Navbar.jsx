import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  MdDirectionsBike,
  MdSearch,
  MdLocationOn,
  MdFastfood
} from 'react-icons/md'
import SearchContext from '../store/SearchContext'

const links = [
  {
    id: 0,
    title: '自行車道搜尋',
    icon: MdSearch,
    url: '/'
  },
  {
    id: 1,
    title: '我附近的 Youbike 租借站',
    icon: MdLocationOn,
    url: '/near_by_station'
  },
  {
    id: 2,
    title: '美食與景點',
    icon: MdFastfood,
    url: '/travel'
  }
]

const Navbar = () => {
  const [hoverState, setHoverState] = useState(null)

  const { dispatch, state } = useContext(SearchContext)

  return (
    <nav className='flex pt-6 px-12 justify-between border-2 border-gray-300'>
      <Link to='/'>
        <h1 className='cursor-pointer font-medium'>
          <p className='flex items-center text-xl font-semibold'>
            <MdDirectionsBike className='mr-1' />
            <span className='text-purple-500'>自行車道</span>地圖資訊整合網
          </p>
        </h1>
      </Link>
      <ul className='flex items-center text-xl font-medium gap-3'>
        {links.map((link) => {
          return (
            <Link key={link.id} to={link.url}>
              <li
                className={
                  hoverState === link.id || state.thisPage === link.id
                    ? 'nav-enter'
                    : 'nav-leave'
                }
                onMouseEnter={() => setHoverState(link.id)}
                onMouseLeave={() => setHoverState(null)}
                onClick={() => dispatch({ type: 'clearAll' })}
              >
                <link.icon
                  className={hoverState === link.id ? 'text-purple-500' : null}
                />
                {link.title}
              </li>
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
