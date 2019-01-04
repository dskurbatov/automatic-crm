import React from 'react'
import Info from './basic/Info'
import AuthButtons from './basic/AuthButtons'
import FormForPersonal from './forms/FormForPersonal'
import Main from './Main'

const text = [
  'automaticCRM also connects to your personal email server and runs a deep analysis on the people you contact, how often you’re in contact, the sentiment of your messages, and 34 other metrics.',
  'This is the second step of unlocking you network.'
]

const Personal = (props) => {
  return (
    <Main {...props} active="personal" next="/salesforce">
      {(errors, propsFromMain) => {
        return (
          <React.Fragment>
            <Info text={text} />
            <AuthButtons 
              onSignInG={propsFromMain.onSignInG}
              onSignInMS={propsFromMain.onSignInMS}
              onError={propsFromMain.onError}
            />
            <FormForPersonal 
              errors={errors}
              next="/salesforce"
              onSubmit={propsFromMain.onSubmit}
            />
          </React.Fragment>
        )
      }}
    </Main>
  )
}

export default Personal