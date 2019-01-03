import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signUp(this.state)
  }
  render() {
    const { auth, authError } = this.props
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="container mt-3">

        <form onSubmit={this.handleSubmit} className="white">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input onChange={this.handleChange} type="text" className="form-control" id="firstName" aria-describedby="firstNameHelp" placeholder="Enter first name" />
            <small id="firstNameHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input onChange={this.handleChange} type="text" className="form-control" id="lastName" aria-describedby="lastNameHelp" placeholder="Enter last name" />
            <small id="lastNameHelp" className="form-text text-muted">We'll never share your last name with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input onChange={this.handleChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          {authError ? <div className="alert alert-danger" role="alert">{authError}</div> : null}
        </form>

      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
