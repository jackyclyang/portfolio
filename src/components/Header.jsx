import React from 'react'

export default function Header() {
  return (
    <div class="menu-wrapper">
      <header className="header">
        <a href="#home" class="logo">
          Chenlong "Jacky" Yang
        </a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li><a href="#about">About</a></li>
          <li><a href="#se">SE</a></li>
          <li><a href="#ux">UX</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header >
    </div>

  )
}
