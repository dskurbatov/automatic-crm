import React from 'react'

const ProgressBar = (props) => {
  const { isCorporateSet, isPersonalSet, isSalesForceSet } = props.settings
  const { active } = props
  const isAllTrue = Object.values(props.settings).every(item => item === true)
  
  return(
    <div className="progressBar">
      <div className="wrapper w-75 m-auto">
        <div className="innerBar w-100 m-auto">
          <div className={active.corporate ? `knob active` : `knob`}>
            <div className="circle">
            {isCorporateSet && <div className="check"></div>}            
            </div>
          </div>
          <div className={active.personal ? `knob active` : `knob`}>
            <div className="circle">
              {isPersonalSet && <div className="check"></div>}
            </div>
          </div>
          <div className={active.salesforce ? `knob active` : `knob`}>
            <div className="circle">
              {isSalesForceSet && <div className="check"></div>}
            </div>
          </div>
          <div className={active.analysis ? `knob active` : `knob`}>
            <div className="circle">
              {isAllTrue && <div className="check"></div>}
            </div>
          </div>
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