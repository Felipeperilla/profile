import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetail = (props) => {
  const { project, auth } = props
  if (!auth.uid) return <Redirect to='/signIn' />

  if (project) {
    return (
      <div className="container project-details mt-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.content}</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Author: {project.authorFirstName + " " + project.authorLastName}</li>
              <li className="list-group-item">Date: {moment(project.createdAt.toDate()).calendar()}</li>             
            </ul>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="container center">
        <p>Loading</p>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetail)