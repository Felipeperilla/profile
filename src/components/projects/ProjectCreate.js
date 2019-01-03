import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createProject(this.state)
    this.props.history.push('/')
  }
  render() {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to='/signIn' />

    return (
      <div className="container mt-3">

        <form onSubmit={this.handleSubmit} className="white">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input onChange={this.handleChange} type="text" className="form-control" id="title" aria-describedby="titlelHelp" placeholder="Enter title" />
            <small id="titleHelp" className="form-text text-muted">We'll never share your title with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea className="form-control" rows="5" id="content" onChange={this.handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
