import React from 'react'

//helper methods
import { isValidEmail, isValidPassword, isValidURL, isEmpty } from '../helpers/validators'

class Main extends React.Component{
  state = {
    errors: {}
  }

  componentDidMount(){
    this.props.setActive(this.props.active)
  }

  onSubmit = (state) => {
    const errors = {}
    if(!isValidEmail(state.email)){
      errors.email = "Please enter valid email"
    }

    if(!isValidPassword(state.password)){
      errors.password = 'Password must be at least 2 characters long'
    }

    if(state.type === 'Exchange' && !isValidURL(state.url)){
      errors.url = "Please enter valid url address"
    }
    
    this.setState({errors})
    
    if(isEmpty(errors)){
      this.props.onSubmit(true)
      this.props.history.push(this.props.next)
    }
    return
  }

  onSignInG = (googleUser) => {
    const user = Object.assign({}, googleUser.profileObj, {tokenId: googleUser.tokenId})
    this.props.setUser(user)
  }

  onSignInMS = (err, user) => {
    if(err){
      console.log(err)
    } else {
      this.props.setUser(user)
    }
  }

  onError = (err) => {
    console.log(err)
  }

  getProperties = () => ({
    onSubmit: this.onSubmit,
    onSignInG: this.onSignInG,
    onSignInMS: this.onSignInMS,
    onError: this.onError
  })

  render(){
    return (
      <main>
        {this.props.children(this.state.errors, this.getProperties())}
      </main>
    )
  }
}

export default Main