import React from 'react'
import ReactDOM from 'react-dom'
import 'typeface-roboto'
import Providers from 'core/Providers'

import App from './App'
import './index.css'

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('root'),
)
