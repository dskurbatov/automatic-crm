import React from 'react'
import Form from '../basic/Form'
import Input from '../basic/Input'
import { Link } from 'react-router-dom'

//initial State for the Form
const initialState = {
  email: '',
  password: ''
}

const FormForSalesforce = (props) => {
  const { errors, next, onSubmit } = props
  return (
    <Form onSubmit={onSubmit} initialState={initialState}>
      {(state, onChange) => {
        return(
          <React.Fragment>
            <Input 
              parentClassName="form-group text-uppercase"
              onChange={onChange('email')}
              error={errors.email}
              id="formControlInput1"
              placeholder="user@company.com"
              className="form-control"
              type="email"
              name="Salesforce Login"
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
              <Link to={next} className="btn btn-secondary text-uppercase">Skip</Link>
              <input type="submit" className="btn btn-primary text-uppercase" value="Next"/>
            </div>
          </React.Fragment>
        )
      }}
    </Form>
  )
}

export default FormForSalesforce