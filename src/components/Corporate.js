import React from 'react'
import { Link } from 'react-router-dom'
import Info from './basic/Info'
import Form from './basic/Form'
import Select from './basic/Select'
import Input from './basic/Input'

//helper methods
import { isValidEmail, isValidPassword, isEmpty } from '../helpers/validators'

const text = [
  'automaticCRM connects to your corporate email server and runs a deep analysis on the people you contact, how often you’re in contact, the sentiment of your messages, and 34 other metrics. This is the first step of unlocking your network.',
  'This is the first step of unlocking you network.'
]

const initialState = {
  type: 'Gmail',
  email: '',
  password: ''
}

class Corporate extends React.Component {
  state = {
    errors: {}
  }

  onSubmit = (state) => {
    const errors = {}
    if(!isValidEmail(state.email)){
      errors.email = "Please enter valid email"
    }

    if(!isValidPassword(state.password)){
      errors.password = 'Password must be at least 2 characters long'
    }
    this.setState({errors})
    
    if(isEmpty(errors)){
      this.props.onSubmit(true)
      this.props.history.push('/personal')
    }
    return
  }

  render(){
    const { errors } = this.state
    return (
      <React.Fragment>
        <Info text={text} />
        <Form onSubmit={this.onSubmit} initialState={initialState}>
          {(state, onChange) => {
            return(
              <React.Fragment>
                <Select
                  parentClassName="form-group" 
                  id="formControlSelect1"
                  className="form-control"
                  onChange={onChange('type')}
                />
                <Input 
                  parentClassName="form-group"
                  onChange={onChange('email')}
                  error={errors.email}
                  id="formControlInput1"
                  placeholder="user@company.com"
                  className="form-control"
                  type="email"
                  name="Corporate Email Login"
                />
                <Input 
                  parentClassName="form-group"
                  onChange={onChange('password')}
                  error={errors.password}
                  id="inputPassword1"
                  placeholder="Password"
                  className="form-control"
                  type="password"
                  name="Password"
                />
                <div className="d-flex justify-content-around">
                  <Link to="/personal" className="btn btn-secondary button-size">Skip</Link>
                  <button type="submit" className="btn btn-primary button-size">Next</button>
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