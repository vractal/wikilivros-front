import React from 'react'
import { Link } from '@reach/router'

export default () => (
  <>
    <h1>New_React_App</h1>
    <p>
      <Link to="/account">Account page</Link>
    </p>
    <p>
      <Link to="/blocked">Blocked sample</Link>
    </p>
  </>
)
