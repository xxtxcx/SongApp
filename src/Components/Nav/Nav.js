import React from 'react'
import { ReactComponent as HomeIcon } from '../../svgs/home.svg'
import { ReactComponent as SearchIcon } from '../../svgs/search.svg'
import { ReactComponent as LibraryIcon } from '../../svgs/library.svg'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  
const className = "active"

  return (
    <div className="navBar">
      <div className="logo">
        <h2>Ponify</h2>
      </div>
      <ul>
        {/* <Link to="/">
          <li className="active">
            <HomeIcon />
            All Songs
          </li>
        </Link>
        <Link to="/my-chart">
          <li>
            <SearchIcon />
            My List
          </li>
        </Link> */}
        <NavLink activestyle={className} to="/"
                >All songs</NavLink>
        <NavLink activestyle={className} to="/my-chart"
                >My List</NavLink>
        {/* <Link to="/#">
          <li>
            <LibraryIcon />
            Propose a song
          </li>
        </Link> */}
      </ul>
      {/* <div className="cookies">
        <span>Cookies</span>
        <span>Privacy Policy</span>
      </div> */}
    </div>
  )
}

export default Nav