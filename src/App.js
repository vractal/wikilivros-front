import React from 'react'
import { Router } from '@reach/router'
import { Route, Root } from 'core/Routes'
import NotFound from 'core/NotFound'

import SignIn from 'auth/SignIn'
import SignUp from 'auth/SignUp'
import ForgotPassword from 'auth/ForgotPassword'
import ForgotSent from 'auth/ForgotSent'
import ResetPassword from 'auth/ResetPassword'
import Account from 'account/index'
import EditProfile from 'account/EditProfile'
import Home from 'home/index'
import Book from 'book/Info'
import Blocked from 'blocked/index'
import Upload from 'book/Upload'
import { useSiteTitle } from 'core/hooks'

export default () => {
  useSiteTitle()
  return (
    <Router>
      <Route Component={Home} path="/" title="Home" />
      <Route Component={Book} path="/books/:id" title="Book page" />
      <Route Component={Upload} path="/books/upload" title="upload" />

      <Root path="account">
        <Route Component={Account} path="/" title="My Account" authorize />
        <Route Component={EditProfile} path="/edit-profile" authorize />
      </Root>
      <Route Component={SignIn} path="/sign-in" title="Sign In" />
      <Route Component={SignUp} path="/sign-up" title="Sign Up" />
      <Route Component={ForgotSent} path="/forgot-sent" />
      <Route Component={ForgotPassword} path="/forgot-password" />
      <Route Component={ResetPassword} path="/reset-password" />
      <Route {...Blocked.routeConfig} path="/blocked" />
      <Route Component={NotFound} default title="404 - Page not found" />
    </Router>
  )
}
