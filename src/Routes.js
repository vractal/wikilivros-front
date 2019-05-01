import React from 'react'
import { navigate } from '@reach/router'
import { withStyles } from '@material-ui/core/styles'
import { Auth } from 'croods-light-auth'
import Card from '@material-ui/core/Card'
import useFlash from 'hooks/useFlash'

const styles = {
  app: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  card: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 600,
    padding: '2rem',
  },
}

export const Route = withStyles(styles)(
  ({ Component, path, classes, ...props }) => (
    <div className={classes.app}>
      <Card path={path} className={classes.card}>
        <Component {...props} />
      </Card>
    </div>
  ),
)

export const AuthRoute = ({ Component, ...props }) => {
  const { error } = useFlash()
  return (
    <Route
      {...props}
      Component={() => (
        <Auth
          unauthorized={() => {
            navigate('/sign-in')
            error('You are not authorized to access that page')
          }}
          Component={Component}
        />
      )}
    />
  )
}
