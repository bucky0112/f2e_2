import React, { useState } from 'react'
import {
  MdDirectionsBike,
  MdSearch,
  MdLocationOn,
  MdFastfood
} from 'react-icons/md'

const links = [
  {
    id: 0,
    title: '自行車道搜尋',
    icon: MdSearch
  },
  {
    id: 1,
    title: '我附近的 Youbike 租借站',
    icon: MdLocationOn
  },
  {
    id: 2,
    title: '美食與景點',
    icon: MdFastfood
  }
]

const Navbar = () => {
  const [hoverState, setHoverState] = useState(null)

  return (
    <nav className='flex pt-6 px-12 justify-between border-2 border-gray-300'>
      <h1 className='cursor-pointer font-medium'>
        <p className='flex items-center text-xl font-semibold'>
          <MdDirectionsBike className='mr-1' />
          <span className='text-purple-500'>自行車道</span>地圖資訊整合網
        </p>
      </h1>
      <ul className='flex items-center text-xl font-medium gap-3'>
        {links.map((link) => {
          return (
            <li
              key={link.id}
              className={hoverState === link.id ? 'nav-enter' : 'nav-leave'}
              onMouseEnter={() => setHoverState(link.id)}
              onMouseLeave={() => setHoverState(null)}
            >
              <link.icon
                className={hoverState === link.id ? 'text-purple-500' : null}
              />
              {link.title}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
