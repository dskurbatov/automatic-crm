import React from 'react'

const Navbar = (props) => {
  return(
    <nav className="navbar navbar-light">
      <a className="navbar-brand font-weight-bold mx-5" href="#">automaticCRM</a>
      <ul className="nav">
        <li className="nav-item mx-5">
          <a className="nav-link text-uppercase text-dark" href="#">Features</a>
        </li>
        <li className="nav-item mx-5">
          <a className="nav-link text-uppercase text-dark" href="#">Pricing</a>
        </li>
        <li className="nav-item mx-5">
          <a className="nav-link text-uppercase text-dark" href="#">Faq</a>
        </li>
        <li className="nav-item mx-5">
          <a className="nav-link text-uppercase text-dark" href="#">About us</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar