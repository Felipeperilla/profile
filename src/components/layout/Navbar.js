import React from 'react'
import { Link } from 'react-router-dom'
import SingedInLinks from './SignedInLinks'
import SingedOutLinks from './signedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth } = props
    
  const links = auth.uid ? <SingedInLinks email={auth.email}/> : <SingedOutLinks/>
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to='/' className="navbar-brand">Developers</Link>
      { links }
    </nav>
  )
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)