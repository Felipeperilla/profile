import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props  
    if (!auth.uid) return <Redirect to='/signIn' />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <ProjectList projects={projects} />
          </div>
          <div className="col-sm-12 col-md-5 offset-md-1">
            <Notifications notifications={notifications}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    notifications: state.firestore.ordered.notifications,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' },
    { collection: 'notifications', limit: 3 }
  ])
)(Dashboard)