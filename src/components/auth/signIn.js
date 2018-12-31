import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    console.log(e.target.id)
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <div className="container mt-3">

        <form onSubmit={this.handleSubmit} className="white">
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
        </form>

      </div>
    )
  }
}

export default SignIn
