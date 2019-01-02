import React from 'react'

const ProgressBar = (props) => {
  return(
    <div className="progressBar">
      <div className="wrapper">
        <div className="innerBar w-75 m-auto">
          <div className="knob"><span className="check"></span></div>
          <div className="knob"><span className="check"></span></div>
          <div className="knob"><span className="check"></span></div>
          <div className="knob"><span className="check"></span></div>
        </div>
      </div>
      <div className="w-75 m-auto d-flex justify-content-between">
        <p className="text-uppercase">Corporate Email</p>
        <p className="text-uppercase">Personal Email</p>
        <p className="text-uppercase">Salesforce</p>
        <p className="text-uppercase">Analysis</p>
      </div>
    </div>
  )
}

export default ProgressBar