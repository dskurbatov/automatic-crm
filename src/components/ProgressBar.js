import React from 'react'

const ProgressBar = (props) => {
  const { isCorporateSet, isPersonalSet, isSalesForceSet } = props.settings
  const isTrue = Object.values(props.settings).every(item => item === true)
  
  return(
    <div className="progressBar">
      <div className="wrapper">
        <div className="innerBar w-75 m-auto">
          <div className="knob">{isCorporateSet && <span className="check"></span>}</div>
          <div className="knob">{isPersonalSet && <span className="check"></span>}</div>
          <div className="knob">{isSalesForceSet && <span className="check"></span>}</div>
          <div className="knob">{isTrue && <span className="check"></span>}</div>
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