import React from 'react'

const Navbar = (props) => {
  return(
    <nav className="navbar navbar-light">
      <a className="navbar-brand" href="#">automaticCRM</a>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Faq</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About us</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar