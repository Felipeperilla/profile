import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
  const { notifications } = props
  return (
    <div className="card mt-3">
      <div className="card-header">
        Notifications
      </div>
      <ul className="list-group list-group-flush">
        {notifications && notifications.map(notification => {
          return (
            <li key={notification.id} className="list-group-item">{notification.user}  
              <span className="text-danger pl-1">{notification.content}</span>
              <br/>
              <span className="text-muted">{moment(notification.time.toDate()).fromNow()}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Notifications