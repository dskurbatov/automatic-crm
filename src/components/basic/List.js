import React from 'react'
import PropTypes from 'prop-types'

const List = ({items=[]}) => {
  return(
    <ul className="list-group list-group-flush text-left">
      {items.map((item, idx) => <li key={idx} className="list-group-item">{item}</li>)}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired
}

export default List