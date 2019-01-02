import React from 'react'
import Info from './basic/Info'
import Form from './basic/Form'

const text = [
  'automaticCRM connects to your corporate email server and runs a deep analysis on the people you contact, how often you’re in contact, the sentiment of your messages, and 34 other metrics. This is the first step of unlocking your network.',
  'This is the first step of unlocking you network.'
]

const initialState = {
  type: 'Gmail',
  email: '',
  password: ''
}

const Corporate = (props) => {
  return(
    <React.Fragment>
      <Info text={text} />
      <Form onSubmit={props.onSubmit} initialState={initialState}>
        {(state, onChange) => {
          return(
            <React.Fragment>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Corporate Email type</label>
                <select class="form-control" id="exampleFormControlSelect1" onChange={onChange('type')}>
                  <option>Gmail</option>
                  <option>Yahoo</option>
                  <option>Yandex</option>
                  <option>Mail</option>
                  <option>Aon</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Corporate Email login</label>
                <input onChange={onChange('email')} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="form-group">
                <label for="inputPassword">Password</label>
                <input onChange={onChange('password')}type="password" class="form-control" id="inputPassword" placeholder="Password" />
              </div>
              <div className="d-flex justify-content-around">
                <button type="submit" class="btn btn-secondary button-size">Skip</button>
                <button type="submit" class="btn btn-primary button-size">Next</button>
              </div>
            </React.Fragment>
          )
        }}
      </Form>
    </React.Fragment>
  )
}

export default Corporate