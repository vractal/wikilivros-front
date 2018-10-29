import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Provider as CroodsProvider } from 'croods'
import { MuiThemeProvider } from '@material-ui/core/styles'
import './App.css'
import theme from './theme'

import store from './store/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CroodsProvider baseUrl={process.env.REACT_APP_API_URL}>
          <MuiThemeProvider theme={theme}>
            <div>New React App</div>
          </MuiThemeProvider>
        </CroodsProvider>
      </Provider>
    )
  }
}

export default App
