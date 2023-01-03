import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

export function Header() {

  const className = "active"

  return (
    <header>
        <div className="header">
          <Link to="/" className="logo">The SongList</Link>
            <div className="header-right">
                <NavLink activestyle={className} to="/"
                >All songs</NavLink>
                <NavLink activestyle={className} to="/my-chart"
                >My chart</NavLink>
            </div>
        </div>
    </header>
  );
}