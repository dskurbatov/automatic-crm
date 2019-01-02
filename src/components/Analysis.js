import React from 'react'

class Analysis extends React.Component{
  componentDidMount(){
    this.props.setActive('analysis')
  }

  render(){
    return(
      <h1 className="display-4">Congratulation You are Done!!!</h1>
    )
  }
}

export default Analysis