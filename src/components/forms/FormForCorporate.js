import React from 'react'
import Form from '../basic/Form'
import Select from '../basic/Select'
import Input from '../basic/Input'
import { Link } from 'react-router-dom'

//initial State for the Form
const initialState = {
  type: 'Gmail',
  url: '',
  email: '',
  password: ''
}

const FormForCorporate = (props) => {
  const { errors, next, onSubmit } = props
  return (
    <Form onSubmit={onSubmit} initialState={initialState}>
      {(state, onChange) => {
        return(
          <React.Fragment>
            <Select
              parentClassName="form-group text-uppercase" 
              id="formControlSelect1"
              className="form-control"
              onChange={onChange('type')}
              options={['Gmail', 'Exchange', 'Outlook 365']}
              name="Corporate Email Type"
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
              <Link to={next} className="btn btn-secondary text-uppercase">Skip</Link>
              <input type="submit" className="btn btn-primary text-uppercase" value="Next"/>
            </div>
          </React.Fragment>
        )
      }}
    </Form>
  )
}

export default FormForCorporate