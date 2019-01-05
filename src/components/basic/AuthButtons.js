import React from 'react'
import { GoogleLogin } from 'react-google-login'
import MicrosoftLogin from 'react-microsoft-login'

const AuthButtons = (props) => {
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENTID}
        buttonText="Sign in"
        onSuccess={props.onSignInG}
        onFailure={props.onError}
      />
      <MicrosoftLogin
        clientId={process.env.REACT_APP_MICROSOFT_CLIENTID}
        buttonTheme={"light_short"}
        graphScopes={["user.read"]}
        withUserData={true}
        authCallback={props.onSignInMS}  
      />
    </div>
  )
}

export default AuthButtons
