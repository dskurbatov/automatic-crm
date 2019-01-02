import React from 'react'

const ProgressBar = (props) => {
  const { isCorporateSet, isPersonalSet, isSalesForceSet, isAnalysisSet } = props.settings
  const { active } = props
  
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
              {isAnalysisSet && <div className="check"></div>}
            </div>
          </div>
        </div>
      </div>
      <div className="progress-text w-75 m-auto d-flex justify-content-between">
        <p className={active.corporate ? `text-uppercase active` : `text-uppercase`}>Corporate Email</p>
        <p className={active.personal ? `text-uppercase active` : `text-uppercase`}>Personal Email</p>
        <p className={active.salesforce ? `text-uppercase active` : `text-uppercase`}>Salesforce</p>
        <p className={active.analysis ? `text-uppercase active` : `text-uppercase`}>Analysis</p>
      </div>
    </div>
  )
}

export default ProgressBar