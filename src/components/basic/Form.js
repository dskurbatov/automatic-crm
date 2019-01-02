import React from 'react'

class Form extends React.Component {
  state = this.props.initialState || {}
  
  onChange = (key) => (e) => {
    this.setState({
      [key]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  render(){
    return (
      <form onSubmit={this.onSubmit} className="form" noValidate>
        {this.props.children(this.state, this.onChange)}
      </form>
    )
  }
}

export default Form