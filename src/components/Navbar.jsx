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

const enterStyle =
  'flex items-center gap-0.5 pb-9 cursor-pointer border-solid border-b-8 border-purple-500 transition-all'
const leaveStyle =
  'flex items-center gap-0.5 pb-9 cursor-pointer border-solid border-b-8 border-transparent transition-all'

const Navbar = () => {
  const [hoverState, setHoverState] = useState(null)

  return (
    <nav className='flex pt-9 px-14 justify-between'>
      <h1 className='cursor-pointer'>
        <p className='flex items-center text-xl font-medium'>
          <MdDirectionsBike className='mr-1' />
          <span className='text-purple-500'>自行車道</span>地圖資訊整合網
        </p>
      </h1>
      <ul className='flex items-center text-xl font-medium gap-3'>
        {links.map((link) => {
          return (
            <li
              key={link.id}
              className={hoverState === link.id ? enterStyle : leaveStyle}
              onMouseEnter={() => setHoverState(link.id)}
              onMouseLeave={() => setHoverState(null)}
            >
              <link.icon className={hoverState === link.id ? 'text-purple-500' : null} />
              {link.title}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
