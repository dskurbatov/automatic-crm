import React from 'react'
import Main from './Main'
import Info from './basic/Info'
import AuthButtons from './basic/AuthButtons'
import FormForCorporate from './forms/FormForCorporate';

const text = [
  'automaticCRM connects to your corporate email server and runs a deep analysis on the people you contact, how often you’re in contact, the sentiment of your messages, and 34 other metrics.',
  'This is the first step of unlocking you network.'
]

const Corporate = (props) => {
  return (
    <Main {...props} active="corporate" next="/personal">
      {(errors, propsFromMain) => {
        return (
        <React.Fragment>
          <Info text={text} />
          <AuthButtons 
            onSignInG={propsFromMain.onSignInG}
            onSignInMS={propsFromMain.onSignInMS}
            onError={propsFromMain.onError}
          />
          <FormForCorporate 
            errors={errors}
            next="/personal"
            onSubmit={propsFromMain.onSubmit}
          />
        </React.Fragment>
        )
      }}
    </Main>
  )
}

export default Corporate