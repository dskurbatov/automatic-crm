import React from 'react'

const Info = (props) => {
  return (
    <div className="info">
      {props.text.map((text, idx) => <p key={idx}>{text}</p>)}
    </div>
  )
}

export default Info