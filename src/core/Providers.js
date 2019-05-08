import React from 'react'
import PropTypes from 'prop-types'
import { CroodsProvider } from 'croods-light'
import { authHeaders } from 'croods-light-auth'
import { MuiThemeProvider } from '@material-ui/core/styles'
import FlashMessage from 'seasoned-flash'

import { isDev } from 'utils/helpers'
import theme from '../theme'

const Providers = ({ children }) => (
  <CroodsProvider
    debugRequest={isDev}
    debugActions={isDev}
    headers={authHeaders}
    baseUrl={process.env.REACT_APP_API_URL}
  >
    <MuiThemeProvider theme={theme}>
      <FlashMessage>{children}</FlashMessage>
    </MuiThemeProvider>
  </CroodsProvider>
)

Providers.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Providers
