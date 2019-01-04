import React from 'react'
import { GoogleLogin } from 'react-google-login'
import MicrosoftLogin from 'react-microsoft-login'
import config from '../../../src/config'

const AuthButtons = (props) => {
  return (
    <div>
      <GoogleLogin
        clientId={config.google.clientId}
        buttonText="Sign in"
        onSuccess={props.onSignInG}
        onFailure={props.onError}
      />
      <MicrosoftLogin
        clientId={config.microsoft.clientId}
        buttonTheme={"light_short"}
        graphScopes={["user.read"]}
        withUserData={true}
        authCallback={props.onSignInMS}  
      />
    </div>
  )
}

export default AuthButtons
