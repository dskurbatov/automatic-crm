import React from 'react'
import { GoogleLogin } from 'react-google-login'
import MicrosoftLogin from 'react-microsoft-login'
//import config from '../../../src/config'

// let googleId = null, microsoftId = null
// if(process.env.NODE_ENV === 'production'){
//   googleId = process.env.GOOGLE_CLIENTID
//   microsoftId = process.env.MICROSOFT_CLIENTID
// } else {
//   googleId = config.google.clientId
//   microsoftId = config.microsoft.clientId
// }

const AuthButtons = (props) => {
  return (
    <div>
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENTID}
        buttonText="Sign in"
        onSuccess={props.onSignInG}
        onFailure={props.onError}
      />
      <MicrosoftLogin
        clientId={process.env.MICROSOFT_CLIENTID}
        buttonTheme={"light_short"}
        graphScopes={["user.read"]}
        withUserData={true}
        authCallback={props.onSignInMS}  
      />
    </div>
  )
}

export default AuthButtons