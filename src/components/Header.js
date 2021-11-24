import React from 'react'
import './header.css'
import Netflix from '../assets/netflix.png'
import avatar from '../assets/avatar.png'

function Header({ black }) {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header-logo">
        <img src={Netflix} alt="logo" />
      </div>
      <div className="header-user">
        <img src={avatar} alt="logo" />
      </div>
    </header>
  )
}

export default Header
