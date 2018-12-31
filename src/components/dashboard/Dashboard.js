import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <ProjectList />
          </div>
          <div className="col-sm-12 col-md-5 offset-md-1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    projects: state.firestore.ordered.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])  
)(Dashboard)