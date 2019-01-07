import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import List from './List'


const Emails = (props) => {
  return (
    <React.Fragment>
      <h4 className="border-bottom">{props.title}</h4>
      <List items={props.emails} />
      {!props.emails && <Link to={props.to}>{`Set up ${props.title} Emails`}</Link>}
    </React.Fragment>
  )
}

Emails.propTypes = {
  emails: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default Emails