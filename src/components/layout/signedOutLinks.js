import React from 'react'
import { NavLink } from 'react-router-dom'

const SingedOutLinks = () => {
  return (
    <div className="container">
      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div> */}
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mr-3">
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">Sign up</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signin">Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SingedOutLinks
