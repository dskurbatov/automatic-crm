import React from 'react'

const List = (props) => {
  return(
    <ul className="list-group list-group-flush text-left">
      {Object.keys(props.item).map((key, idx) => <li key={idx} className="list-group-item">{key}: {props.item[key]}</li>)}
    </ul>
  )
}

export default List