import React from 'react'
import { Link } from '@reach/router'

const TOKEN = 'RYe9xcWxdisyxFrzZuWN'

export default () => (
  <div>
    <h2>An email with instructions was sent to you!</h2>
    <Link to={`/reset-password?reset_password_token=${TOKEN}`}>
      Simulate reset
    </Link>
  </div>
)
