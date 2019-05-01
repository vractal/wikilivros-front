import React from 'react'
import { Router } from '@reach/router'
import { CroodsProvider } from 'croods-light'
import { MuiThemeProvider } from '@material-ui/core/styles'
import FlashMessage from 'components/FlashMessage'

import isDev from 'utils/isDev'

import Index from 'pages/Index'
import Protected from 'pages/Protected'
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'
import ForgotPassword from 'pages/ForgotPassword'
import ForgotSent from 'pages/ForgotSent'
import ResetPassword from 'pages/ResetPassword'

import { Route, AuthRoute } from './Routes'
import theme from './theme'
import './App.css'

export default () => (
  <CroodsProvider
    debugRequest={isDev}
    debugActions={isDev}
    persistHeaders
    baseUrl={process.env.REACT_APP_API_URL}
  >
    <MuiThemeProvider theme={theme}>
      <FlashMessage>
        <Router>
          <Route Component={Index} path="/" />
          <AuthRoute Component={Protected} path="/protected" />
          <Route Component={SignIn} path="/sign-in" />
          <Route Component={SignUp} path="/sign-up" />
          <Route Component={ForgotSent} path="/forgot-sent" />
          <Route Component={ForgotPassword} path="/forgot-password" />
          <Route Component={ResetPassword} path="/reset-password" />
        </Router>
      </FlashMessage>
    </MuiThemeProvider>
  </CroodsProvider>
)
