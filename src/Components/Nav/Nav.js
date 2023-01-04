import React from 'react'
import { ReactComponent as HomeIcon } from '../../svgs/home.svg'
import { ReactComponent as SearchIcon } from '../../svgs/search.svg'
import { ReactComponent as LibraryIcon } from '../../svgs/library.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <h2>Ponify</h2>
      </div>
      <ul>
        <Link to="/">
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
        </Link>
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