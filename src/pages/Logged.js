import React from 'react'
import { navigate } from '@reach/router'
import { useSignOut, useDeleteAccount } from 'croods-light-auth'
import { useFlash } from 'seasoned-flash'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

export default ({ currentUser }) => {
  const { info } = useFlash()
  const [{ signingOut }, signOut] = useSignOut()
  const [{ deleting }, deleteAccount] = useDeleteAccount()
  const loading = deleting || signingOut
  const logout = () => {
    info('Logged out')
    navigate('/')
    signOut()
  }

  return (
    <>
      <h1>Logged in as {currentUser.email}</h1>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <Button onClick={logout} variant="contained" color="primary">
            Logout
          </Button>{' '}
          <Button onClick={deleteAccount} variant="contained" color="secondary">
            {deleting ? 'Deleting account...' : 'Delete account'}
          </Button>
        </div>
      )}
    </>
  )
}
