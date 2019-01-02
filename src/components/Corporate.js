import React from 'react'
import { Link } from 'react-router-dom'
import Info from './basic/Info'
import Form from './basic/Form'

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
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Corporate Email type</label>
                  <select className="form-control" id="exampleFormControlSelect1" onChange={onChange('type')}>
                    <option>Gmail</option>
                    <option>Yahoo</option>
                    <option>Yandex</option>
                    <option>Mail</option>
                    <option>Aon</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Corporate Email login</label>
                  <input onChange={onChange('email')} type="email" className="form-control" id="exampleFormControlInput1" placeholder="user@company.com" />
                  {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="inputPassword">Password</label>
                  <input onChange={onChange('password')} type="password" className="form-control" id="inputPassword" placeholder="Password" />
                  {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>
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