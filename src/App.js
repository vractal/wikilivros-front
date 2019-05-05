import React from 'react'
import { Router } from '@reach/router'

import Index from 'pages/Index'
import Logged from 'pages/Logged'
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'
import ForgotPassword from 'pages/ForgotPassword'
import ForgotSent from 'pages/ForgotSent'
import ResetPassword from 'pages/ResetPassword'
import ProtectedRoute from 'core/ProtectedRoute'
import { useSiteTitle } from 'core/hooks'

export default () => {
  useSiteTitle()
  return (
    <Router>
      <Index path="/" />
      <ProtectedRoute Component={Logged} path="/logged" />
      <SignIn path="/sign-in" />
      <SignUp path="/sign-up" />
      <ForgotSent path="/forgot-sent" />
      <ForgotPassword path="/forgot-password" />
      <ResetPassword path="/reset-password" />
    </Router>
  )
}
