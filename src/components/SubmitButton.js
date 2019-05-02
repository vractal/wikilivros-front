import React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

export default ({ children, loading, ...props }) =>
  loading ? (
    <CircularProgress />
  ) : (
    <Button type="submit" variant="contained" color="primary" {...props}>
      {children}
    </Button>
  )
