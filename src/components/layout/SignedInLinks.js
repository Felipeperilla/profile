import React from 'react'
import { NavLink } from 'react-router-dom'

const SingedInLinks = () => {
  return (
    <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mr-3">
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Username
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="/createProject">Create project</NavLink>
              <NavLink className="dropdown-item" to="/">Another action</NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="/">Log out</NavLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SingedInLinks
