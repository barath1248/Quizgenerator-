import React from 'react'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="brand">
        <h1 className="brand-title">Quizoo</h1>
      </div>
      <div className="nav-items">
        <span className="nav-text">Quiz Generator</span>
        <a  href="https://github.com/barath1248"  target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
      </div>
    </nav>
  )
}

export default Navbar
