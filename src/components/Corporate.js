import React from 'react'
import { Link } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import MicrosoftLogin from 'react-microsoft-login'
import Info from './basic/Info'
import Form from './basic/Form'
import Select from './basic/Select'
import Input from './basic/Input'

//helper methods
import { isValidEmail, isValidPassword, isValidURL, isEmpty } from '../helpers/validators'

const text = [
  'automaticCRM connects to your corporate email server and runs a deep analysis on the people you contact, how often you’re in contact, the sentiment of your messages, and 34 other metrics.',
  'This is the first step of unlocking you network.'
]

const initialState = {
  type: 'Gmail',
  url: '',
  email: '',
  password: ''
}

class Corporate extends React.Component {
  state = {
    errors: {}
  }

  componentDidMount(){
    this.props.setActive('corporate')
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
      this.props.history.push('/personal')
    }
    return
  }

  onSignIn = (googleUser) => {
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

  render(){
    const { errors } = this.state
    return (
      <React.Fragment>
        <Info text={text} />
        <div>
          <GoogleLogin
            clientId="340145829210-7se6mbp5gpntdlqnrnr3nni51lhj0q2a.apps.googleusercontent.com"
            buttonText="Sign in"
            onSuccess={this.onSignIn}
            onFailure={this.onError}
          />
          <MicrosoftLogin
            clientId={"6756d763-3e9c-4728-803b-aae818ca4a89"}
            buttonTheme={"light_short"}
            graphScopes={["user.read"]}
            withUserData={true}
            authCallback={this.onSignInMS}  
          />
        </div>
        <Form onSubmit={this.onSubmit} initialState={initialState}>
          {(state, onChange) => {
            return(
              <React.Fragment>
                <Select
                  parentClassName="form-group text-uppercase" 
                  id="formControlSelect1"
                  className="form-control"
                  onChange={onChange('type')}
                />
                {state.type === 'Exchange' && 
                  <Input 
                    parentClassName="form-group text-uppercase"
                    onChange={onChange('url')}
                    error={errors.url}
                    id="formControlInput1"
                    placeholder="mail.cisco.com"
                    className="form-control"
                    type="text"
                    name="Exchange Server URL"
                  />
                }
                  <Input 
                  parentClassName="form-group text-uppercase"
                  onChange={onChange('email')}
                  error={errors.email}
                  id="formControlInput1"
                  placeholder="user@company.com"
                  className="form-control"
                  type="email"
                  name="Corporate Email Login"
                />
                <Input 
                  parentClassName="form-group text-uppercase"
                  onChange={onChange('password')}
                  error={errors.password}
                  id="inputPassword1"
                  placeholder="Password"
                  className="form-control"
                  type="password"
                  name="Password"
                />
                <div className="d-flex justify-content-around">
                  <Link to="/personal" className="btn btn-secondary text-uppercase">Skip</Link>
                  <input type="submit" className="btn btn-primary text-uppercase" value="Next"/>
                </div>
              </React.Fragment>
            )
          }}
        </Form>
      </React.Fragment>
    )
  }
}

export default Corporate