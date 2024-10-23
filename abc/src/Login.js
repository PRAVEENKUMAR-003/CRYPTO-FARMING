import React from 'react';
import UAuth from '@uauth/js';

const uauth=new UAuth(
    {
        clientID: "87b7f54d-e413-4640-b233-e8c68d4f80bb",
        redirectUri: "http://localhost:3000",
        scope: "openid wallet email profile:optional social:optional"
    }
)

window.Login = async () => {
    try {
      const authorization = await uauth.LoginWithPopup()
   
      console.log(authorization)
    } catch (error) {
      console.error(error)
    }
  }
  
  
  window.logout = async () => {
    await uauth.logout()
    console.log('Logged out with Unstoppable')
  }

const Login = () => {
  return (
    <div>
    <button onClick={Login}>Login with unstoppable</button>
    <script type='module' src='Login.js'></script>
    </div>
  )
}

export default Login
