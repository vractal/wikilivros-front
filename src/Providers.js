import React from 'react'
import { CroodsProvider } from 'croods-light'
import { MuiThemeProvider } from '@material-ui/core/styles'
import FlashMessage from 'seasoned-flash'

import isDev from 'utils/isDev'
import theme from './theme'

export default ({ children }) => (
  <CroodsProvider
    debugRequest={isDev}
    debugActions={isDev}
    persistHeaders
    baseUrl={process.env.REACT_APP_API_URL}
  >
    <MuiThemeProvider theme={theme}>
      <FlashMessage>{children}</FlashMessage>
    </MuiThemeProvider>
  </CroodsProvider>
)
