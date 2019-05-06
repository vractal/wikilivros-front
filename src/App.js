import React from 'react'
import { Router } from '@reach/router'

import Index from 'pages/Index'
import Logged from 'pages/Logged'
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'
import ForgotPassword from 'pages/ForgotPassword'
import ForgotSent from 'pages/ForgotSent'
import ResetPassword from 'pages/ResetPassword'
import Route from 'core/Route'
import { useSiteTitle } from 'core/hooks'

export default () => {
  useSiteTitle()
  return (
    <Router>
      <Route Component={Index} path="/" title="Home" />
      <Route Component={Logged} path="/logged" title="Account" protect />
      <Route Component={SignIn} path="/sign-in" title="Sign In" />
      <Route Component={SignUp} path="/sign-up" title="Sign Up" />
      <Route Component={ForgotSent} path="/forgot-sent" />
      <Route Component={ForgotPassword} path="/forgot-password" />
      <Route Component={ResetPassword} path="/reset-password" />
    </Router>
  )
}
