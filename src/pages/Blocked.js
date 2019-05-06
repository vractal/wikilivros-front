import React from 'react'

import Button from '@material-ui/core/Button'

const email = 'blocked@gmail.com'

export default ({ setCurrentUser }) => (
  <>
    <h1>This page should block this user: {email}</h1>
    <div>
      <p>Not blocked?</p>
      <Button
        onClick={() => setCurrentUser({ email }, true)}
        variant="contained"
        color="primary"
      >
        Change my email to {email}
      </Button>
    </div>
  </>
)
