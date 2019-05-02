import React from 'react'
import { navigate } from '@reach/router'
import Button from '@material-ui/core/Button'
import { useSignOut, useDeleteAccount } from 'croods-light-auth'

import CircularProgress from '@material-ui/core/CircularProgress'
import PageTitle from 'components/PageTitle'
import { useFlash } from 'seasoned-flash'

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
      <PageTitle>Protected Page</PageTitle>
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
