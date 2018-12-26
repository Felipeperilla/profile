import React from 'react'
import { Link } from 'react-router-dom'
import SingedInLinks from './SignedInLinks'
import SingedOutLinks from './signedOutLinks'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to='/' className="navbar-brand">Developers</Link>
      <SingedInLinks></SingedInLinks>
      <SingedOutLinks></SingedOutLinks>
    </nav>
  )
}

export default Navbar