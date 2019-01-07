import React from 'react'
import { Link } from 'react-router-dom'
import Emails from './basic/Emails'

const Profile = ({
  corporateEmails,
  personalEmails
}) => {
  return (
    <div className="row">
      <h1 className="display-4 m-auto">Welcome to your Profile</h1>
      <div className="col-6">
        {corporateEmails && <Emails
          to="/corporate" 
          title="Corporate"
          emails={corporateEmails}
        />}
      </div>
      <div className="col-6">
        {personalEmails && <Emails 
          to="/personal"
          title="Personal"
          emails={personalEmails}
        />}
      </div>
      {(!corporateEmails && !personalEmails) && 
        <Link to="/corporate" className="btn btn-primary btn-lg m-auto">Set UP Your Profile</Link>
      }
    </div>
  )
}

export default Profile