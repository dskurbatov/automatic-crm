import React from 'react'

import { Link } from 'react-router-dom'
import Info from './basic/Info'
import Form from './basic/Form'
import Select from './basic/Select'
import Input from './basic/Input'

//helper methods
import { isValidEmail, isValidPassword, isEmpty } from '../helpers/validators'


const text = [
  'Once we’ve completed our analysis of your personal network, we synchronize your contacts along with our customized relationship score directly into your SalesForce account. This is the third step of unlocking your network.',
  'This is the third step of unlocking you network.'
]

const initialState = {
  email: '',
  password: ''
}

class SalesForce extends React.Component{
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
      this.props.history.push('/analysis')
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
                <Input 
                  parentClassName="form-group"
                  onChange={onChange('email')}
                  error={errors.email}
                  id="formControlInput3"
                  placeholder="user@company.com"
                  className="form-control"
                  type="email"
                  name="SalesForce Login"
                />
                <Input 
                  parentClassName="form-group"
                  onChange={onChange('password')}
                  error={errors.password}
                  id="inputPassword3"
                  placeholder="Password"
                  className="form-control"
                  type="password"
                  name="Password"
                />
                <div className="d-flex justify-content-around">
                  <Link to="/analysis" className="btn btn-secondary button-size">Skip</Link>
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

export default SalesForce