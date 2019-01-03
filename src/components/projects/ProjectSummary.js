import React from 'react'
import moment from 'moment'

const ProjectSummary = ({ project }) => {
  return (
    <div className="card text-center" >
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.content}</p>
        <p className="card-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ProjectSummary