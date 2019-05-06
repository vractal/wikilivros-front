import React from 'react'
import { Router } from '@reach/router'

import EditProfile from 'account/EditProfile'
import SignIn from 'auth/SignIn'
import SignUp from 'auth/SignUp'
import ForgotPassword from 'auth/ForgotPassword'
import ForgotSent from 'auth/ForgotSent'
import ResetPassword from 'auth/ResetPassword'
import Route from 'core/Route'
import { useSiteTitle } from 'core/hooks'
import Blocked from './blocked'
import Home from './home'
import Account from './account'

export default () => {
  useSiteTitle()
  return (
    <Router>
      <Route Component={Home} path="/" title="Home" />
      <Route Component={Account} path="/account" title="Account" authorize />
      <Route Component={SignIn} path="/sign-in" title="Sign In" />
      <Route Component={SignUp} path="/sign-up" title="Sign Up" />
      <Route Component={ForgotSent} path="/forgot-sent" />
      <Route Component={ForgotPassword} path="/forgot-password" />
      <Route Component={ResetPassword} path="/reset-password" />
      <Route Component={EditProfile} path="/edit-profile" authorize />
      <Route
        Component={Blocked}
        path="/blocked"
        authorize
        unauthorize={currentUser => currentUser.email === 'blocked@gmail.com'}
        unauthorizeMessage="You have been blocked"
        redirect="/"
      />
    </Router>
  )
}
