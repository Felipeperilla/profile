import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {
  return (
    <div className="list-group mt-3">
      {projects && projects.map(project => {
        return (
          <Link key={project.id} to={'/project/' + project.id}>
            <ProjectSummary key={project.id} project={project} />
          </Link>
        )
      })}

    </div>
  )
}

export default ProjectList